import { runbook } from "@/app/components/site/site-data";
import { SectionHeading } from "@/app/components/site/ui";

export default function Runbook() {
  return (
    <section id="how-we-work" className="section section-dusk">
      <div className="site-container">
        <SectionHeading
          kicker="How an engagement works"
          title="Runbook"
          description="Five stages, drawn as the pipeline it is. Every stage has to go green before the next one starts."
        />
        <ol className="mt-14 grid gap-4 lg:grid-cols-5 lg:gap-0">
          {runbook.map((stage, index) => (
            <li key={stage.stage} className="reveal relative lg:pr-5">
              {/* connector */}
              <span
                aria-hidden="true"
                className="absolute left-[0.6rem] top-8 h-full w-px bg-ok/40 lg:left-8 lg:top-[0.6rem] lg:h-px lg:w-full"
              />
              <span className="relative flex items-center gap-3">
                <span className="status-dot h-5 w-5 border-4 border-night-800" aria-hidden="true" />
                <span className="mono bg-night-800 pr-3 text-[11px] uppercase tracking-[0.14em] text-ok">
                  stage {index + 1} · passed
                </span>
              </span>
              <div className="ml-8 mt-3 pb-6 lg:ml-0">
                <h3 className="display text-3xl">{stage.stage}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-100">{stage.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
