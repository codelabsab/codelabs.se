"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type Stage = { id: string; label: string };

/**
 * The same condition as the `.pager` block in globals.css. Paging needs a
 * mouse or trackpad and enough room; phones, tablets and short windows keep
 * the normal scrolling page.
 */
const PAGED_QUERY = "(min-width: 1024px) and (min-height: 640px) and (hover: hover) and (pointer: fine)";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Arrow keys belong to whatever is focused if that thing uses them itself. */
function usesArrows(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) ||
    target.closest('[role="tablist"], [role="dialog"], [data-arrow-scroll]') !== null
  );
}

/** True if something between the wheel target and the stage can still scroll that way. */
function canScrollInside(target: EventTarget | null, stage: HTMLElement, direction: number) {
  let node = target instanceof HTMLElement ? target : null;
  while (node) {
    if (node.scrollHeight > node.clientHeight + 1) {
      const overflowY = getComputedStyle(node).overflowY;
      if (overflowY === "auto" || overflowY === "scroll") {
        const atEnd = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;
        if (direction > 0 ? !atEnd : node.scrollTop > 0) return true;
      }
    }
    if (node === stage) break;
    node = node.parentElement;
  }
  return false;
}

/**
 * Home page as a stage select.
 *
 * Paged mode (desktop): one stage fills the screen. Wheel, arrow keys,
 * PageUp/PageDown and the rail switch stages. A stage taller than the window
 * scrolls inside itself first. After the last stage the page scrolls on to
 * the footer as usual.
 *
 * Scroll mode (touch, small or short screens): the stages are a normal
 * scrolling page and the arrow keys jump between them.
 *
 * Every stage is always in the DOM, so all content stays indexable.
 */
export default function HomePager({ stages, children }: { stages: Stage[]; children: ReactNode }) {
  const panels = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [paged, setPaged] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lockedUntil = useRef(0);
  const wheelSum = useRef(0);

  const go = useCallback(
    (index: number, options: { updateHash?: boolean } = {}) => {
      const next = Math.max(0, Math.min(stages.length - 1, index));
      const isPaged = window.matchMedia(PAGED_QUERY).matches;
      if (isPaged) {
        setActive(next);
        window.scrollTo({ top: 0 });
        stageRefs.current[next]?.scrollTo({ top: 0 });
        lockedUntil.current = Date.now() + 650;
      } else {
        stageRefs.current[next]?.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
      }
      if (options.updateHash !== false) {
        window.history.replaceState(null, "", next === 0 ? window.location.pathname : `#${stages[next].id}`);
      }
    },
    [stages],
  );

  // Mode, and the stage a #hash points at (on load, back/forward, and in-page links).
  useEffect(() => {
    const media = window.matchMedia(PAGED_QUERY);
    const syncMode = () => setPaged(media.matches);
    const fromHash = (hash: string) => stages.findIndex((stage) => `#${stage.id}` === hash);
    const syncHash = () => {
      const index = fromHash(window.location.hash);
      if (index >= 0) go(index, { updateHash: false });
    };
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest?.("a");
      if (!anchor || anchor.origin !== window.location.origin || anchor.pathname !== window.location.pathname) return;
      const index = fromHash(anchor.hash);
      if (index >= 0 && media.matches) {
        event.preventDefault();
        go(index);
      }
    };
    syncMode();
    syncHash();
    media.addEventListener("change", syncMode);
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    document.addEventListener("click", onClick, true);
    return () => {
      media.removeEventListener("change", syncMode);
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
      document.removeEventListener("click", onClick, true);
    };
  }, [go, stages]);

  // Scroll mode: the active stage follows the scroll position.
  useEffect(() => {
    if (paged) return;
    const onScroll = () => {
      // In paged layout the hidden stages have no geometry to measure.
      if (window.matchMedia(PAGED_QUERY).matches) return;
      const line = window.innerHeight * 0.4;
      let current = 0;
      stageRefs.current.forEach((element, index) => {
        if (element && element.getBoundingClientRect().top <= line) current = index;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [paged]);

  // Keyboard: left/right always; PageUp/PageDown/Home/End in paged mode.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || usesArrows(event.target)) return;
      if (document.querySelector('[role="dialog"]')) return;
      const last = stages.length - 1;
      let next: number | null = null;
      if (event.key === "ArrowRight") next = active + 1;
      else if (event.key === "ArrowLeft") next = active - 1;
      else if (paged && window.scrollY === 0) {
        if (event.key === "PageDown" && active < last) next = active + 1;
        else if (event.key === "PageUp") next = active - 1;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End" && active < last) next = last;
      }
      if (next === null || next < 0 || next > last || next === active) return;
      event.preventDefault();
      go(next);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go, paged, stages.length]);

  // Wheel / trackpad in paged mode.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !paged) return;
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      // Scrolled down to the footer: let the page scroll back up first.
      // Hold the pager briefly afterwards so the same gesture does not also flip a stage.
      if (window.scrollY > 0) {
        lockedUntil.current = Date.now() + 500;
        return;
      }
      const direction = Math.sign(event.deltaY);
      const stage = stageRefs.current[active];
      if (!direction || !stage) return;
      if (Date.now() < lockedUntil.current) {
        event.preventDefault();
        return;
      }
      if (canScrollInside(event.target, stage, direction)) return;
      // Past the last stage the page carries on to the footer.
      if (direction > 0 && active === stages.length - 1) return;
      if (direction < 0 && active === 0) return;
      event.preventDefault();
      wheelSum.current += event.deltaY;
      if (Math.abs(wheelSum.current) >= 40) {
        wheelSum.current = 0;
        go(active + direction);
      }
    };
    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel);
  }, [active, go, paged, stages.length]);

  return (
    <main ref={rootRef} className="pager">
      {panels.map((panel, index) => (
        <div
          key={stages[index].id}
          ref={(element) => {
            stageRefs.current[index] = element;
          }}
          className="stage"
          data-active={index === active ? "" : undefined}
        >
          {panel}
        </div>
      ))}

      <p className="sr-only" aria-live="polite">
        {paged ? `Stage ${active + 1} of ${stages.length}: ${stages[active].label}` : ""}
      </p>

      <nav aria-label="Stages on this page" className="fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
        <ol className="flex flex-col items-end gap-1">
          {stages.map((stage, index) => {
            const current = index === active;
            return (
              <li key={stage.id}>
                <a
                  href={`#${stage.id}`}
                  aria-current={current ? "true" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    go(index);
                  }}
                  className="group flex items-center gap-2 py-1"
                >
                  <span
                    className={`mono bg-night-900/90 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${
                      current ? "text-sunset-pink opacity-100" : "text-ink-100 opacity-0"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")} {stage.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`block h-1 transition-all ${
                      current ? "w-7 bg-sunset-pink shadow-[0_0_10px_var(--color-sunset-pink)]" : "w-4 bg-white/30 group-hover:bg-neon-cyan"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ol>
        <p className="mono mt-3 text-right text-[10px] text-ink-300" aria-hidden="true">
          <kbd className="border border-white/30 px-1">←</kbd> <kbd className="border border-white/30 px-1">→</kbd> stage
        </p>
      </nav>

      {/* Without JavaScript the stages cannot be switched, so show them all. */}
      <noscript>
        <style>{`.pager{height:auto!important;overflow:visible!important}.pager>.stage{display:block!important;height:auto!important;overflow:visible!important}`}</style>
      </noscript>
    </main>
  );
}
