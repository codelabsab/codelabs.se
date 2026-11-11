import { CaseFileCard } from "@/app/components/site/cards";
import { caseFiles } from "@/app/components/site/site-data";
import { LogRain, SectionHeading } from "@/app/components/site/ui";

export default function CaseFiles() {
  return (
    <section id="selected-work" className="section section-night halftone-top">
      <LogRain />
      <div className="site-container">
        <SectionHeading
          kicker="Selected work · postmortem format"
          title="Case files"
          description="Written the way we write postmortems: blameless, concrete, and honest about what stays confidential. No invented numbers."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseFiles.map((file) => (
            <CaseFileCard key={file.id} file={file} />
          ))}
        </div>
      </div>
    </section>
  );
}
