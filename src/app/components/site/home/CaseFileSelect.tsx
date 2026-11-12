"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CaseFileCard } from "@/app/components/site/cards";
import { caseFiles } from "@/app/components/site/site-data";

/** File-drawer selector: one dossier open at a time, all kept in the DOM. */
export default function CaseFileSelect() {
  return (
    <TabGroup className="min-w-0">
      <TabList className="flex gap-1 overflow-x-auto" aria-label="Case files">
        {caseFiles.map((file) => (
          <Tab
            key={file.id}
            className="mono shrink-0 rounded-t-md border border-b-0 border-white/15 bg-night-800/60 px-4 py-3 text-left text-[11px] uppercase tracking-[0.12em] text-ink-100 hover:text-neon-cyan data-[selected]:border-sunset-gold data-[selected]:bg-night-700 data-[selected]:text-sunset-gold"
          >
            <span className="block font-bold">{file.id}</span>
            <span className="block normal-case tracking-normal text-ink-300">{file.eyebrow}</span>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {caseFiles.map((file) => (
          <TabPanel key={file.id} unmount={false} className="fade-in">
            <CaseFileCard file={file} />
          </TabPanel>
        ))}
      </TabPanels>
      <p className="mono mt-3 hidden text-[11px] text-ink-300 lg:block" aria-hidden="true">
        <kbd className="border border-white/30 px-1">←</kbd> <kbd className="border border-white/30 px-1">→</kbd> switch file
      </p>
    </TabGroup>
  );
}
