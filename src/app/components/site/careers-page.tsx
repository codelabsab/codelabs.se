import Image from "next/image";
import Link from "next/link";
import { PerkCard } from "@/app/components/site/cards";
import SkillTrees from "@/app/components/site/SkillTrees";
import { ToastLink } from "@/app/components/site/chrome/triggers";
import {
  assetBase,
  benefitThemes,
  careerReasons,
  consultingAdvantages,
  contactEmail,
  contactHref,
  growthSupport,
  perks,
  sideQuests,
  workScenarios,
} from "@/app/components/site/site-data";
import { getToneByIndex, toneStyles, toneVar } from "@/app/components/site/design";
import { LogRain, SectionHeading } from "@/app/components/site/ui";

const applyHref = `${contactHref}?subject=${encodeURIComponent("Joining the crew")}`;
const applyToast = { title: "Mission passed", sub: "Application sent? · Respect +" };

export default function CareersPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <Image
          src={`${assetBase}/careers-hero.webp`}
          alt="Illustration of the Code Labs crew walking toward the camera on Skeppsbron at golden hour."
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night-900 via-night-900/75 to-night-900/30" />
        <div className="site-container pb-16 pt-28 sm:pt-44">
          <p className="badge">
            <span className="status-dot blink" />
            Now hiring · Stockholm
          </p>
          <p className="script mt-6 -rotate-2 text-4xl sm:text-5xl">Careers at Code Labs</p>
          <h1 className="display mt-2 text-[clamp(3.6rem,12vw,9rem)] leading-[0.88]">
            Join the crew<span className="text-sunset-pink">.</span>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            A consulting career for engineers who want more range. Broader technical exposure, hands-on work, and a
            company that still feels close: more contexts, more teams, and more ways to grow, without losing the
            support and shared structure that make a consultancy worth joining.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ToastLink href={applyHref} toast={applyToast} className="btn-neon">
              Start the conversation
            </ToastLink>
            <a href="#skill-trees" className="btn-hud">
              Choose your class
            </a>
          </div>
        </div>
      </section>

      <section className="section section-glow halftone-top">
        <div className="site-container">
          <SectionHeading
            kicker="Why join Code Labs"
            script="Why this"
            title="City"
            description="A few straightforward reasons this place suits engineers who want to keep growing."
          />
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {careerReasons.map((reason, index) => {
              const tone = getToneByIndex(index);
              return (
                <li key={reason.title} className="card card-hover reveal p-6" style={toneVar(tone)}>
                  <p className={`display text-6xl ${toneStyles[tone].text}`} aria-hidden="true">
                    0{index + 1}
                  </p>
                  <h3 className="display mt-4 text-3xl">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-100">{reason.description}</p>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
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

      <section id="skill-trees" className="section section-dusk">
        <LogRain />
        <div className="site-container">
          <SectionHeading
            kicker="Career areas · choose your class"
            title="Skill trees"
            description="Six classes, each with the real tools and practices you can grow into. Nobody is locked to one tree."
          />
          <div className="reveal mt-12">
            <SkillTrees />
          </div>
        </div>
      </section>

      <section className="section section-night">
        <div className="site-container">
          <SectionHeading
            kicker="What you might work on"
            title="Active missions"
            description="The kinds of assignments and technical problems Code Labs already gets close to."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {workScenarios.map((scenario, index) => (
              <li key={scenario.title} className="card reveal p-6" style={toneVar(getToneByIndex(index))}>
                <h3 className="text-xl font-extrabold leading-snug text-sand-50">{scenario.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-100">{scenario.summary}</p>
                <p className="mt-4 flex flex-wrap gap-1.5">
                  {scenario.examples.map((example) => (
                    <span key={example} className="tag">
                      {example}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-glow halftone-top">
        <div className="site-container">
          <SectionHeading
            kicker="Benefits"
            title="Perks"
            description="The real package, with nothing dressed up. Every perk below is part of the offer."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <li key={perk.title}>
                <PerkCard perk={perk} />
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {benefitThemes.map((theme) => (
              <article key={theme.title} className="reveal border-t-2 border-neon-cyan bg-night-800/70 p-6">
                <h3 className="display text-2xl">{theme.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-100">{theme.intro}</p>
                <ul className="mt-4 space-y-2">
                  {theme.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-100">
                      <span className="mono text-ok" aria-hidden="true">
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dusk">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Growth with structure"
              title="Level up"
              description="Learning is part of the job here, not something you squeeze in around it."
            />
            <ul className="mt-8 space-y-4">
              {growthSupport.map((item) => (
                <li key={item.title} className="reveal border-l-2 border-ok pl-4">
                  <h3 className="font-extrabold text-sand-50">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-100">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading kicker="Conferences, hackathons, open source" title="Side quests" />
            <ul className="mt-8 space-y-4">
              {sideQuests.map((quest) => (
                <li key={quest.href} className="reveal">
                  <Link href={quest.href} className="card card-hover block p-5" style={toneVar("orange")}>
                    <p className="mono text-[11px] uppercase tracking-[0.14em] text-sunset-orange">{quest.kind}</p>
                    <h3 className="mt-1 text-lg font-extrabold text-sand-50">{quest.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-100">{quest.summary}</p>
                    <span className="link-neon mono mt-2 inline-block text-xs">Read the story</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-sunset relative isolate overflow-hidden py-24">
        <div className="site-container">
          <div className="reveal mx-auto max-w-3xl border border-white/15 bg-night-900/90 p-8 text-center sm:p-12">
            <p className="kicker">Open application</p>
            <h2 className="display mt-3 text-5xl sm:text-7xl">Press start</h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              No form, no screening quiz. Send a few lines about what you want to work on to{" "}
              <a href={contactHref} className="link-neon">
                {contactEmail}
              </a>{" "}
              and we take it from there.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ToastLink href={applyHref} toast={applyToast} className="btn-neon">
                Email the crew
              </ToastLink>
              <Link href="/team" className="btn-hud">
                Meet the crew first
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
