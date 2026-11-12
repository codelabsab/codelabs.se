import CaseFiles from "@/app/components/site/home/CaseFiles";
import City from "@/app/components/site/home/City";
import CrewCode from "@/app/components/site/home/CrewCode";
import CrewTeaser from "@/app/components/site/home/CrewTeaser";
import FinalCta from "@/app/components/site/home/FinalCta";
import Hero from "@/app/components/site/home/Hero";
import HomePager, { type Stage } from "@/app/components/site/home/HomePager";
import Missions from "@/app/components/site/home/Missions";
import NewswireTeaser from "@/app/components/site/home/NewswireTeaser";
import OnCallTeaser from "@/app/components/site/home/OnCallTeaser";
import Runbook from "@/app/components/site/home/Runbook";
import TrustedBy from "@/app/components/site/home/TrustedBy";

// One entry per child of <HomePager>, in the same order. The id is the id of
// the section inside that stage, so /#services and friends keep working.
const stages: Stage[] = [
  { id: "top", label: "Start" },
  { id: "services", label: "Missions" },
  { id: "city", label: "The city" },
  { id: "selected-work", label: "Case files" },
  { id: "how-we-work", label: "Runbook" },
  { id: "crew-code", label: "Crew code" },
  { id: "crew", label: "Crew" },
  { id: "on-call", label: "On-call" },
  { id: "newswire", label: "Newswire" },
  { id: "join", label: "Join" },
];

export default function HomePage() {
  return (
    <HomePager stages={stages}>
      <div className="stage-fill">
        <Hero />
        <TrustedBy />
      </div>
      <Missions />
      <City />
      <CaseFiles />
      <Runbook />
      <CrewCode />
      <CrewTeaser />
      <OnCallTeaser />
      <NewswireTeaser />
      <div id="join" className="join-stage">
        <FinalCta />
      </div>
    </HomePager>
  );
}
