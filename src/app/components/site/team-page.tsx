import CharacterSelect from "@/app/components/site/CharacterSelect";
import { CharacterCard } from "@/app/components/site/cards";
import FinalCta from "@/app/components/site/home/FinalCta";
import { crew, crewClosingLine, factions } from "@/app/components/site/site-data";
import { LogRain, SectionHeading } from "@/app/components/site/ui";

export default function TeamPage() {
  return (
    <main>
      <section className="section section-glow !pb-16">
        <LogRain />
        <div className="site-container">
          <SectionHeading
            as="h1"
            kicker="Team · the people behind Code Labs"
            script="Select your"
            title="Character"
            description="A small team with different strengths: platform engineering, reliability, product breadth, and the human side that makes a consultancy sustainable over time."
          />
          <div className="mt-12 hidden md:block">
            <CharacterSelect />
          </div>
        </div>
      </section>

      {factions.map((faction, index) => {
        const members = crew.filter((member) => member.faction === faction.slug);
        return (
          <section key={faction.slug} className={`section ${index % 2 ? "section-night" : "section-dusk"} !py-16`}>
            <div className="site-container">
              <div className="reveal max-w-3xl">
                <p className="kicker">{faction.slug === "morale" ? "Bonus" : `Faction ${index + 1}`}</p>
                <h2 className="display mt-2 text-4xl sm:text-5xl">{faction.title}</h2>
                <p className="mt-4 leading-relaxed text-ink-100">{faction.description}</p>
              </div>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member) => (
                  <li key={member.slug}>
                    <CharacterCard member={member} detailed />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="section-night py-16 text-center">
        <p className="reveal site-container">
          <span className="ribbon text-2xl sm:text-4xl">{crewClosingLine}</span>
        </p>
      </section>

      <FinalCta title="There is a free slot on the roster." body="If the crew looks like people you would want to work with, say hello." />
    </main>
  );
}
