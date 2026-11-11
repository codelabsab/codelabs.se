import { MissionCard } from "@/app/components/site/cards";
import { missions, motto } from "@/app/components/site/site-data";
import { LogRain, SectionHeading } from "@/app/components/site/ui";

export default function Missions() {
  const main = missions.filter((mission) => !mission.sideQuest);
  const side = missions.filter((mission) => mission.sideQuest);
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
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {main.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
        <div className="mt-6">
          {side.map((mission) => (
            <MissionCard key={mission.id} mission={mission} wide />
          ))}
        </div>
        <p className="reveal mt-12 text-center">
          <span className="ribbon text-2xl sm:text-4xl">{motto}</span>
        </p>
      </div>
    </section>
  );
}
