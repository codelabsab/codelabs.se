"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { MissionCard } from "@/app/components/site/cards";
import { missions } from "@/app/components/site/site-data";
import { toneStyles } from "@/app/components/site/design";
import { Stars } from "@/app/components/site/ui";

/**
 * Mission select: one mission on screen at a time. Left/right arrows switch
 * while the list has focus. Every panel stays in the DOM (hidden) so the
 * content of all five missions is still in the page for search engines.
 */
export default function MissionSelect() {
  return (
    <TabGroup className="grid grid-cols-1 gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
      <div className="min-w-0">
        <TabList className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" aria-label="Missions">
          {missions.map((mission, index) => (
            <Tab
              key={mission.id}
              className="group flex min-w-[13rem] shrink-0 flex-col items-start gap-1 border border-white/15 bg-night-800/70 px-4 py-3 text-left transition-colors hover:border-neon-cyan data-[selected]:border-sunset-pink data-[selected]:bg-sunset-pink/10 lg:min-w-0"
            >
              <span className={`mono text-[10px] uppercase tracking-[0.14em] ${toneStyles[mission.tone].text}`}>
                {mission.sideQuest ? "Side quest" : `Mission 0${index + 1}`}
              </span>
              <span className="display text-xl leading-tight group-data-[selected]:text-sunset-pink">
                {mission.missionTitle}
              </span>
              <span className="mono text-[11px] text-ink-300">{mission.title}</span>
              <Stars value={mission.severity} label={`Pager level ${mission.severity} of 5`} />
            </Tab>
          ))}
        </TabList>
        <p className="mono mt-3 hidden text-[11px] text-ink-300 lg:block" aria-hidden="true">
          <kbd className="border border-white/30 px-1">←</kbd> <kbd className="border border-white/30 px-1">→</kbd> switch mission
        </p>
      </div>
      <TabPanels className="min-w-0">
        {missions.map((mission) => (
          <TabPanel key={mission.id} unmount={false} className="fade-in">
            <MissionCard mission={mission} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
