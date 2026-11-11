"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import { emit } from "@/app/components/site/chrome/events";
import { primaryNavItems } from "@/app/components/site/site-data";

const itemClass =
  "display block w-full py-2 text-left text-4xl text-sand-50 transition-colors hover:text-sunset-pink focus-visible:text-sunset-pink";

export default function PauseMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50 lg:hidden">
      <div className="fixed inset-0 overflow-y-auto bg-night-900/95 backdrop-blur-md">
        <DialogPanel className="fade-in flex min-h-full flex-col justify-center px-8 py-16">
          <DialogTitle className="kicker">
            <span aria-hidden="true">II </span>Paused
          </DialogTitle>
          <nav aria-label="Pause menu" className="mt-6">
            <ul>
              <li>
                <button type="button" onClick={onClose} className={`${itemClass} !text-sunset-gold`}>
                  Resume
                </button>
              </li>
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={onClose} className={itemClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => emit("cl:phone")} className={itemClass}>
                  Page us
                </button>
              </li>
            </ul>
          </nav>
          <p className="mono mt-10 text-xs text-ink-300">Esc to resume</p>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
