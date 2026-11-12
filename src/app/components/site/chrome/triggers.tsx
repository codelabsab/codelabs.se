"use client";

import type { ReactNode } from "react";
import { emit, type ToastDetail } from "@/app/components/site/chrome/events";

/** "Page the crew": opens the phone overlay. */
export function PageCrewButton({
  className = "btn-hud",
  children = "Page the crew",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button type="button" className={className} aria-haspopup="dialog" onClick={() => emit("cl:phone")}>
      {children}
    </button>
  );
}

export function TerminalButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" className={className} aria-haspopup="dialog" onClick={() => emit("cl:terminal")}>
      {children}
    </button>
  );
}

/** A normal link that also fires the MISSION PASSED toast. */
export function ToastLink({
  href,
  toast,
  className,
  children,
}: {
  href: string;
  toast: ToastDetail;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => emit("cl:toast", toast)}>
      {children}
    </a>
  );
}
