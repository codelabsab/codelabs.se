"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ToastDetail } from "@/app/components/site/chrome/events";
import { loadingScreens, loadingTips } from "@/app/components/site/site-data";

// Overlays stay out of the initial bundle and load on first use.
const PhoneUI = dynamic(() => import("@/app/components/site/chrome/PhoneUI"), { ssr: false });
const PauseMenu = dynamic(() => import("@/app/components/site/chrome/PauseMenu"), { ssr: false });
const Terminal = dynamic(() => import("@/app/components/site/chrome/Terminal"), { ssr: false });

type Overlay = "phone" | "menu" | "terminal";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

export default function Overlays() {
  const pathname = usePathname();
  const [open, setOpen] = useState<Overlay | null>(null);
  const [loaded, setLoaded] = useState<Record<Overlay, boolean>>({ phone: false, menu: false, terminal: false });
  const [toast, setToast] = useState<ToastDetail | null>(null);
  const [loading, setLoading] = useState<{ tip: string; image: string } | null>(null);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const show = (overlay: Overlay) => () => {
      setLoaded((current) => ({ ...current, [overlay]: true }));
      setOpen(overlay);
    };
    const onPhone = show("phone");
    const onMenu = show("menu");
    const onTerminal = show("terminal");
    const onToast = (event: Event) => setToast((event as CustomEvent<ToastDetail>).detail);
    const onKey = (event: KeyboardEvent) => {
      if ((event.key === "`" || event.key === "~") && !isTypingTarget(event.target)) {
        event.preventDefault();
        onTerminal();
      }
    };
    // Loading screen on internal navigation. Max 600 ms, skipped under reduced motion.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const anchor = (event.target as HTMLElement).closest?.("a");
      if (!anchor || anchor.target === "_blank" || anchor.origin !== window.location.origin) return;
      if (anchor.pathname === window.location.pathname || reducedMotion()) return;
      const index = Math.floor(Math.random() * loadingTips.length);
      setLoading({ tip: loadingTips[index], image: loadingScreens[index % loadingScreens.length] });
      if (loadingTimer.current) clearTimeout(loadingTimer.current);
      loadingTimer.current = setTimeout(() => setLoading(null), 600);
    };
    window.addEventListener("cl:phone", onPhone);
    window.addEventListener("cl:menu", onMenu);
    window.addEventListener("cl:terminal", onTerminal);
    window.addEventListener("cl:toast", onToast);
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("cl:phone", onPhone);
      window.removeEventListener("cl:menu", onMenu);
      window.removeEventListener("cl:terminal", onTerminal);
      window.removeEventListener("cl:toast", onToast);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // A finished navigation closes menus; the loading screen runs out its timer.
  useEffect(() => {
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3600);
    return () => clearTimeout(timer);
  }, [toast]);

  const close = () => setOpen(null);

  return (
    <>
      {loaded.phone ? <PhoneUI open={open === "phone"} onClose={close} /> : null}
      {loaded.menu ? <PauseMenu open={open === "menu"} onClose={close} /> : null}
      {loaded.terminal ? <Terminal open={open === "terminal"} onClose={close} /> : null}

      <div aria-live="polite" role="status" className="pointer-events-none fixed inset-x-0 bottom-8 z-[70] flex justify-center px-4">
        {toast ? (
          <div className="toast-in border-y-2 border-sunset-gold bg-night-900/95 px-8 py-4 text-center shadow-[0_0_60px_-10px_var(--color-sunset-gold)]">
            <p className="display text-3xl !text-sunset-gold sm:text-4xl">{toast.title}</p>
            {toast.sub ? <p className="mono mt-1 text-xs uppercase tracking-[0.16em] text-sand-50">{toast.sub}</p> : null}
          </div>
        ) : null}
      </div>

      {loading ? (
        <div className="fade-in fixed inset-0 z-[80] flex items-end bg-night-900" aria-hidden="true">
          <Image src={loading.image} alt="" fill sizes="100vw" className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/30 to-transparent" />
          <div className="site-container relative flex items-end justify-between gap-6 pb-10">
            <p className="mono max-w-xl text-sm text-sand-50 sm:text-base">
              <span className="text-sunset-gold">TIP:</span> {loading.tip}
            </p>
            <span className="h-8 w-8 shrink-0 animate-spin rounded-full border-2 border-white/20 border-t-sunset-pink" />
          </div>
        </div>
      ) : null}
    </>
  );
}
