import MissionSelect from "@/app/components/site/home/MissionSelect";
import { motto } from "@/app/components/site/site-data";
import { LogRain, SectionHeading } from "@/app/components/site/ui";

export default function Missions() {
  return (
    <section id="services" className="section section-glow halftone-top">
      <LogRain />
      <div className="site-container">
        <SectionHeading
          kicker="What we do · mission select"
          script="Choose your"
          title="Mission"
          description="Platform engineering, DevOps, SRE and practical AI rollout. Every mission below is a kind of engagement we actually take on, with the stack you would work in and what you would get better at."
        />
        <div className="reveal mt-12 min-w-0">
          <MissionSelect />
        </div>
        <p className="reveal mt-12 text-center">
          <span className="ribbon text-2xl sm:text-4xl">{motto}</span>
        </p>
      </div>
    </section>
  );
}
