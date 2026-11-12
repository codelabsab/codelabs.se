import CaseFileSelect from "@/app/components/site/home/CaseFileSelect";
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
        <div className="reveal mt-12 min-w-0">
          <CaseFileSelect />
        </div>
      </div>
    </section>
  );
}
