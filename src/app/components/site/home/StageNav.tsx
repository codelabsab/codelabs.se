"use client";

import { useEffect, useState } from "react";

export const stages = [
  { id: "top", label: "Start" },
  { id: "services", label: "Missions" },
  { id: "city", label: "The city" },
  { id: "selected-work", label: "Case files" },
  { id: "how-we-work", label: "Runbook" },
  { id: "crew-code", label: "Crew code" },
  { id: "crew", label: "Crew" },
  { id: "on-call", label: "On-call" },
  { id: "newswire", label: "Newswire" },
  { id: "join", label: "Join" },
] as const;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function goTo(index: number) {
  const target = document.getElementById(stages[index].id);
  target?.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
}

/** Arrow keys belong to whatever is focused if that thing uses them itself. */
function usesArrows(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) ||
    target.closest('[role="tablist"], [role="dialog"], [data-arrow-scroll]') !== null
  );
}

/**
 * Stage select for the home page: a rail of stages on the right, and
 * left/right arrow keys that jump one section at a time. The page still
 * scrolls normally; this is a faster way through it.
 */
export default function StageNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      let current = 0;
      stages.forEach((stage, index) => {
        const element = document.getElementById(stage.id);
        if (element && element.getBoundingClientRect().top <= line) current = index;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || usesArrows(event.target)) return;
      if (document.querySelector('[role="dialog"]')) return;
      if (event.key === "ArrowRight" && active < stages.length - 1) {
        event.preventDefault();
        goTo(active + 1);
      } else if (event.key === "ArrowLeft" && active > 0) {
        event.preventDefault();
        goTo(active - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <nav aria-label="Stages on this page" className="fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
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
                  goTo(index);
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
                  className={`block h-1 transition-all ${current ? "w-7 bg-sunset-pink shadow-[0_0_10px_var(--color-sunset-pink)]" : "w-4 bg-white/30 group-hover:bg-neon-cyan"}`}
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
  );
}
