"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { SkillStars } from "@/app/components/site/cards";
import { crew, crewYaml, factions } from "@/app/components/site/site-data";
import { toneStyles } from "@/app/components/site/design";
import { TerminalFrame } from "@/app/components/site/ui";

/**
 * Character-select screen. Headless UI tabs give arrow-key navigation,
 * roving tabindex and ARIA for free. Rendered from md upwards; smaller
 * screens get the plain card grid in team-page.tsx.
 */
export default function CharacterSelect() {
  const [yaml, setYaml] = useState(false);

  return (
    <TabGroup className="grid gap-8 lg:grid-cols-[1fr_22rem]">
      <TabPanels>
        {crew.map((member) => {
          const tone = toneStyles[member.tone];
          const faction = factions.find((entry) => entry.slug === member.faction);
          return (
            <TabPanel key={member.slug} className="fade-in grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/15">
                <Image
                  src={member.portraitUrl}
                  alt={member.portraitAlt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 45vw"
                  className="object-cover object-top"
                />
                {member.secret ? <span className="badge absolute left-3 top-3">Secret characters unlocked</span> : null}
              </div>
              <div className="flex flex-col">
                <p className={`mono text-xs uppercase tracking-[0.14em] ${tone.text}`}>
                  Class · {member.class}
                </p>
                <h2 className="display mt-2 text-5xl xl:text-6xl">{member.name}</h2>
                <p className="mono mt-2 text-[11px] uppercase tracking-[0.14em] text-ink-300">
                  Faction · {faction?.title}
                </p>

                <div className="mt-5 flex gap-2" role="group" aria-label="Profile view">
                  {[
                    ["Profile", false],
                    ["kubectl describe", true],
                  ].map(([label, value]) => (
                    <button
                      key={String(label)}
                      type="button"
                      aria-pressed={yaml === value}
                      onClick={() => setYaml(value as boolean)}
                      className={`mono border px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] ${
                        yaml === value
                          ? "border-neon-cyan bg-neon-cyan text-night-900"
                          : "border-white/20 text-ink-100 hover:border-neon-cyan"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {yaml ? (
                  <TerminalFrame title={`kubectl get crew ${member.slug} -o yaml`} className="mt-5">
                    <pre>
                      <code>{crewYaml(member)}</code>
                    </pre>
                  </TerminalFrame>
                ) : (
                  <div className="mt-5 space-y-5">
                    <p className="text-sm leading-relaxed text-ink-100">
                      <span className="mono block text-[11px] uppercase tracking-[0.14em] text-ink-300">Main quest</span>
                      {member.role}
                    </p>
                    <p className="leading-relaxed text-ink-100">
                      {member.summary} {member.humanDetail}
                    </p>
                    <SkillStars member={member} />
                    <p className="border-l-4 border-sunset-gold bg-night-800 p-4 text-sand-50">
                      <span className="mono block text-[11px] uppercase tracking-[0.14em] text-sunset-gold">
                        Special ability
                      </span>
                      {member.specialAbility}
                    </p>
                    {member.profileUrl ? (
                      <a href={member.profileUrl} target="_blank" rel="noreferrer" className="link-neon mono text-xs">
                        GitHub profile ↗
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
            </TabPanel>
          );
        })}
      </TabPanels>

      <div>
        <p className="kicker">Roster · use arrow keys</p>
        <TabList className="mt-4 grid grid-cols-4 gap-2 lg:grid-cols-2">
          {crew.map((member) => (
            <Tab
              key={member.slug}
              className="group relative aspect-square overflow-hidden border-2 border-white/15 data-[selected]:border-sunset-pink data-[selected]:shadow-[0_0_24px_-4px_var(--color-sunset-pink)]"
            >
              <Image
                src={member.squareUrl}
                alt=""
                fill
                sizes="(min-width: 1024px) 11rem, 22vw"
                className="object-cover opacity-60 transition-opacity group-hover:opacity-100 group-data-[selected]:opacity-100"
              />
              <span className="mono absolute inset-x-0 bottom-0 bg-night-900/85 px-1 py-1 text-[10px] uppercase tracking-[0.08em] text-sand-50">
                {member.name}
              </span>
            </Tab>
          ))}
        </TabList>
      </div>
    </TabGroup>
  );
}
