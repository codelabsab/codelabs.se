import { consultingAdvantages, howWeWorkPrinciples } from "@/app/components/site/site-data";
import { getToneByIndex, toneStyles, toneVar } from "@/app/components/site/design";
import { SectionHeading } from "@/app/components/site/ui";

export default function CrewCode() {
  return (
    <section className="section section-glow">
      <div className="site-container">
        <SectionHeading
          kicker="Principles"
          script="The"
          title="Crew code"
          description="Four rules we actually work by, and why consulting gives you XP from many maps."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWorkPrinciples.map((principle, index) => {
            const tone = getToneByIndex(index);
            return (
              <li key={principle.title} className="card card-hover reveal flex min-h-[20rem] flex-col p-6" style={toneVar(tone)}>
                <p className={`display text-7xl ${toneStyles[tone].text}`} aria-hidden="true">
                  {["I", "II", "III", "IV"][index]}
                </p>
                <h3 className="display mt-auto text-3xl">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-100">{principle.description}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {consultingAdvantages.map((item) => (
            <article key={item.title} className="reveal border-l-4 border-sunset-gold bg-night-800/70 p-6">
              <p className="mono text-[11px] uppercase tracking-[0.14em] text-sunset-gold">+XP · many maps</p>
              <h3 className="mt-2 text-xl font-extrabold text-sand-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-100">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
