import Image from "next/image";
import Link from "next/link";
import {
  careerAreas,
  careerReasons,
  contactHref,
  growthSupport,
  workScenarios,
} from "@/app/components/site/site-data";
import {
  BenefitsShowcase,
  ContactCallout,
  SectionHeading,
} from "@/app/components/site/shared-sections";
import {
  accentStyles,
  getToneByIndex,
} from "@/app/components/site/design";

export default function CareersPage() {
  return (
    <main className="site-shell overflow-hidden">
      <section className="hero-surface relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="site-orb-blue left-[-4rem] top-8 h-40 w-40" />
        <div className="site-orb-violet right-[-5rem] top-16 h-44 w-44" />
        <div className="site-container grid gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3">
              <span className="site-pill border-[rgba(37,99,235,0.18)] bg-[rgba(255,255,255,0.82)] px-4 py-2 text-sm font-medium text-[var(--color-ink-800)]">
                Careers at Code Labs
              </span>
              <span className="site-pill border-[rgba(20,184,166,0.16)] bg-[rgba(20,184,166,0.08)] px-4 py-2 text-sm font-medium text-[var(--color-brand-mint)]">
                Broader engineering path
              </span>
            </div>
            <p className="site-kicker mt-8">Careers at Code Labs</p>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[0.94] text-[var(--color-ink-900)] sm:text-7xl">
              A consulting career for engineers who want more range.
            </h1>
            <p className="mt-8 text-xl leading-9 text-[var(--color-ink-700)]">
              Code Labs is for people who want broader technical exposure,
              hands-on work, and a company that still feels close. You get more
              contexts, more teams, and more ways to grow without losing the
              support, learning, and shared structure that make a consultancy
              worth joining.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={contactHref}
                className="site-button-primary inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium"
              >
                Start the conversation
              </a>
              <Link
                href="/#selected-work"
                className="site-button-secondary inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium"
              >
                See the work shape
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="site-card overflow-hidden p-3">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[12px]">
                <Image
                  src="/assets/blogg/kubecon26/nvidia_kubecon.webp"
                  alt="Code Labs team at KubeCon"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
            <div className="site-card-dark stripe-sheen p-7 text-white">
              <p className="site-kicker text-[var(--color-brand-sky)]">What changes</p>
              <p className="mt-4 font-display text-3xl leading-tight text-white">
                More environments. More technical pattern recognition. More ways
                to grow than one internal context can usually provide.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                The company around it is what makes that sustainable over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <SectionHeading
              eyebrow="Why join Code Labs"
              title="Why people join."
              description="A few straightforward reasons this place suits engineers who want to keep growing."
              tone="blue"
            />
          </div>
          <div className="space-y-5">
            {careerReasons.map((item, index) => {
              const tone = getToneByIndex(index, ["blue", "mint", "violet"]);
              const toneStyle = accentStyles[tone];
              return (
                <article
                  key={item.title}
                  className={`site-card-tint ${toneStyle.card} ${toneStyle.border} border p-6`}
                >
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${toneStyle.icon}`}>
                    <span className="text-sm font-semibold">0{index + 1}</span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-ink-700)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-violet border-y border-[var(--color-line)] py-24 sm:py-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why consulting can be a strong career path"
            title="Why consulting works well for the right kind of engineer."
            description="It is not about product companies being wrong. It is about seeing more, learning faster, and still belonging to a real company while you do it."
            tone="violet"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="site-card-tint border-[rgba(91,91,214,0.14)] bg-[linear-gradient(180deg,rgba(247,244,255,0.9)_0%,rgba(255,255,255,0.98)_100%)] p-8">
              <p className="site-kicker text-[var(--color-brand-violet)]">In short</p>
              <p className="mt-5 font-display text-4xl leading-tight text-[var(--color-ink-900)]">
                You grow by seeing more than one stack, one architecture, and
                one engineering culture.
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--color-ink-700)]">
                Consulting here is about compounding real engineering experience:
                different domains, different delivery habits, different setups,
                and different ways teams succeed or fail in practice.
              </p>
            </article>
            <div className="grid gap-4">
              {[
                "Different stacks and architectures keep your technical instincts sharper.",
                "Different teams and constraints teach adaptability much faster.",
                "A strong company around the consulting work keeps that breadth from feeling fragmented.",
              ].map((item, index) => {
                const tone = getToneByIndex(index, ["violet", "blue", "mint"]);
                const toneStyle = accentStyles[tone];

                return (
                  <article
                    key={item}
                    className={`site-card-tint ${toneStyle.card} ${toneStyle.border} border p-6`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${toneStyle.icon}`}>
                        0{index + 1}
                      </div>
                      <p className="text-sm leading-7 text-[var(--color-ink-700)]">
                        {item}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-white py-24 sm:py-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="What you might work on"
            title="What you might actually work on."
            description="The kinds of assignments and technical problems Code Labs already gets close to."
            tone="mint"
          />
          <div className="mt-14 grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
            <div className="space-y-4">
              {workScenarios.slice(0, 3).map((scenario, index) => {
                const tone = getToneByIndex(index);
                const toneStyle = accentStyles[tone];
                return (
                  <article
                    key={scenario.title}
                    className={`site-card-tint ${toneStyle.card} ${toneStyle.border} border p-6`}
                  >
                    <h2 className="font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                      {scenario.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                      {scenario.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {scenario.examples.map((example) => (
                        <span
                          key={example}
                          className={`site-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${toneStyle.pillSoft}`}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="site-card border-[rgba(20,184,166,0.12)] p-8">
              <p className="site-kicker text-[var(--color-brand-mint)]">More examples</p>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {careerAreas.map((area, index) => {
                  const tone = getToneByIndex(index, ["blue", "mint", "violet", "coral"]);
                  const toneStyle = accentStyles[tone];

                  return (
                    <article
                      key={area.title}
                      className="border-t border-[var(--color-line)] pt-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${toneStyle.icon}`}>
                          0{index + 1}
                        </span>
                        <h3 className="font-display text-2xl leading-tight text-[var(--color-ink-900)]">
                          {area.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                        {area.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-mint border-y border-[var(--color-line)] py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="How we work together"
              title="Support is part of the job here."
              description="Onboarding, goals, learning, and internal momentum are all there to make sure people are actually supported."
              tone="coral"
            />
          </div>
          <div className="space-y-5">
            {growthSupport.map((item, index) => {
              const tone = getToneByIndex(index, ["coral", "mint", "blue"]);
              const toneStyle = accentStyles[tone];

              return (
                <article
                  key={item.title}
                  className={`site-card ${toneStyle.border} border p-6`}
                >
                  <div className="grid gap-5 md:grid-cols-[56px_1fr]">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${toneStyle.icon}`}>
                      0{index + 1}
                    </div>
                    <div>
                      <h2 className="font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-white py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="site-card overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px]">
                <Image
                  src="/assets/blogg/codelabsby-kami-paer-pingpong.webp"
                  alt="Code Labs team activity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 26vw"
                />
              </div>
            </div>
            <div className="site-card overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px]">
                <Image
                  src="/assets/blogg/kubecon26/evening_drink.webp"
                  alt="Code Labs after conference sessions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 26vw"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="It's not only work"
              title="There is life around the work too."
              description="Code Labs takes engineering seriously, but there is also room for lunches, meetups, conference trips, internal ideas, sports support, and shared time together."
              tone="coral"
            />
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-ink-700)]">
              That is not a replacement for substance. It is part of why the
              company feels worth joining in the first place. Most people want
              both: good technical work and people they would actually enjoy
              spending time with.
            </p>
          </div>
        </div>
      </section>

      <section className="section-blue border-y border-[var(--color-line)] py-24 sm:py-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="What we offer"
            title="What we offer."
            description="A setup for work, family life, health, learning, and long-term growth."
            tone="blue"
          />
          <div className="mt-14">
            <BenefitsShowcase />
          </div>
        </div>
      </section>

      <ContactCallout
        title="If you want broader engineering growth without becoming disconnected from a real team, write to us."
        description="This is a good fit if you want more technical range, more learning, and a company that still feels close. If that sounds like what you are looking for, start with an email."
      />
    </main>
  );
}
