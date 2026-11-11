"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Minimap, { mapNodes, type MapNode } from "@/app/components/site/chrome/Minimap";
import { emit } from "@/app/components/site/chrome/events";
import { HudBar } from "@/app/components/site/ui";
import { primaryNavItems } from "@/app/components/site/site-data";

const sectionNodes: Record<string, MapNode> = {
  services: "missions",
  "selected-work": "cases",
  "how-we-work": "runbook",
};

function routeNode(pathname: string): MapNode {
  if (pathname.startsWith("/team")) return "team";
  if (pathname.startsWith("/careers")) return "careers";
  if (pathname.startsWith("/blog")) return "blog";
  return "home";
}

export default function OpsHud() {
  const pathname = usePathname();
  const [section, setSection] = useState<MapNode | null>(null);

  // On the home page the minimap follows the section in view.
  useEffect(() => {
    setSection(null);
    if (pathname !== "/") return;
    const targets = Object.keys(sectionNodes)
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const node = sectionNodes[entry.target.id];
          if (entry.isIntersecting) setSection(node);
          else setSection((current) => (current === node ? null : current));
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  const active = section ?? routeNode(pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-night-900/80 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-night-900 focus:px-3 focus:py-2 focus:text-sand-50"
      >
        Skip to content
      </a>
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Code Labs home" className="shrink-0">
          <Image
            src="/assets/logo/codelabs_white.svg"
            alt="Code Labs"
            width={130}
            height={24}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNavItems.map((item) => {
              const current = item.node === active;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current && !item.href.includes("#") ? "page" : undefined}
                    className={`mono block px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-sunset-pink ${
                      current ? "text-sunset-pink" : "text-ink-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden flex-col gap-1.5 xl:flex"
            aria-hidden="true"
            title="Decorative HUD. Health = SLO compliance, armor = error budget. Our job: keep yours full."
          >
            <HudBar label="SLO" fill={96} tone="ok" />
            <HudBar label="Budget" fill={78} tone="info" />
          </div>
          <span className="hidden items-center gap-2 sm:flex" title={`You are here: ${mapNodes[active].label}`}>
            <Minimap active={active} />
          </span>
          <button
            type="button"
            className="btn-hud btn-sm hidden sm:inline-flex"
            aria-haspopup="dialog"
            onClick={() => emit("cl:phone")}
          >
            Page the crew
          </button>
          <button
            type="button"
            className="btn-hud btn-sm lg:hidden"
            aria-haspopup="dialog"
            aria-label="Open pause menu"
            onClick={() => emit("cl:menu")}
          >
            <span aria-hidden="true">II</span> Menu
          </button>
        </div>
      </div>
    </header>
  );
}
