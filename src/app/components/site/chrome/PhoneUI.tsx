"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import { emit } from "@/app/components/site/chrome/events";
import { contactEmail, contactHref, socialLinks } from "@/app/components/site/site-data";

const apps = ["Contacts", "Pager", "Jobs", "Social"];
const rowClass =
  "flex items-center justify-between gap-3 border border-white/10 bg-white/5 px-4 py-3 text-sm text-sand-50 transition-colors hover:border-neon-cyan";

export default function PhoneUI({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ackHref = `${contactHref}?subject=${encodeURIComponent("Ack: our platform needs love")}`;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fade-in fixed inset-0 bg-night-900/80 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-end justify-center p-4 sm:items-center sm:justify-end sm:pr-12">
        <DialogPanel className="toast-in flex h-[min(40rem,calc(100vh-2rem))] w-full max-w-[21rem] flex-col overflow-hidden rounded-[2.4rem] border-[6px] border-night-600 bg-night-800 shadow-[0_0_80px_-20px_var(--color-sunset-pink)]">
          <div className="mono flex items-center justify-between px-6 pt-3 text-[10px] text-ink-300" aria-hidden="true">
            <span>STHLM 5G</span>
            <span className="h-4 w-20 rounded-full bg-night-900" />
            <span>pager: on</span>
          </div>
          <div className="flex items-center justify-between px-5 pt-4">
            <DialogTitle className="display text-2xl">Page the crew</DialogTitle>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close phone"
              className="mono flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sand-50 hover:border-sunset-pink"
            >
              ✕
            </button>
          </div>

          <TabGroup className="flex min-h-0 flex-1 flex-col">
            <TabPanels className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
              <TabPanel className="space-y-3">
                <p className="kicker">Contacts</p>
                <a href={contactHref} className={rowClass}>
                  <span>
                    <span className="block font-semibold">Code Labs</span>
                    <span className="mono text-xs text-ink-300">{contactEmail}</span>
                  </span>
                  <span className="mono text-xs text-neon-cyan">MAIL</span>
                </a>
                <p className="text-sm text-ink-100">
                  Platform, SRE, DevOps or AI rollout on your mind? One email reaches the whole crew.
                </p>
              </TabPanel>
              <TabPanel className="space-y-3">
                <p className="kicker">Pager</p>
                <div className="border border-warn/60 bg-warn/10 p-4">
                  <p className="mono text-[11px] uppercase tracking-[0.14em] text-warn">
                    <span className="status-dot blink mr-2" style={{ "--dot": "var(--color-warn)" } as React.CSSProperties} />
                    Incoming · demo alert
                  </p>
                  <p className="mt-2 font-semibold text-sand-50">SEV-3 · Your platform needs love</p>
                  <p className="mono mt-1 text-xs text-ink-100">runbook: talk to an engineer</p>
                </div>
                <a
                  href={ackHref}
                  className="btn-neon w-full"
                  onClick={() => emit("cl:toast", { title: "Mission passed", sub: "Page acknowledged · Respect +" })}
                >
                  Ack and email us
                </a>
              </TabPanel>
              <TabPanel className="space-y-3">
                <p className="kicker">Jobs</p>
                <Link href="/careers" onClick={onClose} className={rowClass}>
                  <span>
                    <span className="block font-semibold">Join the crew</span>
                    <span className="mono text-xs text-ink-300">SRE · Platform · DevOps · AI</span>
                  </span>
                  <span className="mono text-xs text-neon-cyan">OPEN</span>
                </Link>
                <Link href="/team" onClick={onClose} className={rowClass}>
                  <span className="font-semibold">Meet the crew</span>
                  <span className="mono text-xs text-neon-cyan">OPEN</span>
                </Link>
              </TabPanel>
              <TabPanel className="space-y-3">
                <p className="kicker">Social</p>
                {socialLinks.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={rowClass}>
                    <span className="font-semibold">{link.label}</span>
                    <span className="mono text-xs text-neon-cyan">↗</span>
                  </a>
                ))}
              </TabPanel>
            </TabPanels>
            <TabList className="grid grid-cols-4 border-t border-white/10 bg-night-900">
              {apps.map((app) => (
                <Tab
                  key={app}
                  className="mono px-1 py-4 text-[10px] uppercase tracking-[0.1em] text-ink-100 data-[selected]:bg-sunset-pink data-[selected]:font-bold data-[selected]:text-night-900"
                >
                  {app}
                </Tab>
              ))}
            </TabList>
          </TabGroup>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
