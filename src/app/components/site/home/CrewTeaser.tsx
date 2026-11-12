import Link from "next/link";
import { CharacterCard } from "@/app/components/site/cards";
import { crew } from "@/app/components/site/site-data";
import { SectionHeading } from "@/app/components/site/ui";

export default function CrewTeaser() {
  return (
    <section className="section section-night halftone-top">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Team · character select" script="Meet the" title="Crew" />
          <Link href="/team" className="btn-hud reveal">
            Select your character
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {crew
            .filter((member) => !member.secret)
            .map((member) => (
              <CharacterCard key={member.slug} member={member} />
            ))}
        </div>
      </div>
    </section>
  );
}
