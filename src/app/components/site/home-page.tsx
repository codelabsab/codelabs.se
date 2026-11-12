import CaseFiles from "@/app/components/site/home/CaseFiles";
import City from "@/app/components/site/home/City";
import CrewCode from "@/app/components/site/home/CrewCode";
import CrewTeaser from "@/app/components/site/home/CrewTeaser";
import FinalCta from "@/app/components/site/home/FinalCta";
import Hero from "@/app/components/site/home/Hero";
import Missions from "@/app/components/site/home/Missions";
import NewswireTeaser from "@/app/components/site/home/NewswireTeaser";
import OnCallTeaser from "@/app/components/site/home/OnCallTeaser";
import Runbook from "@/app/components/site/home/Runbook";
import StageNav from "@/app/components/site/home/StageNav";
import TrustedBy from "@/app/components/site/home/TrustedBy";

export default function HomePage() {
  return (
    <main>
      <StageNav />
      <Hero />
      <TrustedBy />
      <Missions />
      <City />
      <CaseFiles />
      <Runbook />
      <CrewCode />
      <CrewTeaser />
      <OnCallTeaser />
      <NewswireTeaser />
      <div id="join">
        <FinalCta />
      </div>
    </main>
  );
}
