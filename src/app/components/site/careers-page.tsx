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

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-[var(--color-ink-0)]">
      <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_70%,#f1f4f7_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top_left,rgba(71,165,250,0.14),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(0,100,224,0.12),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Careers at Code Labs
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.94] text-[var(--color-ink-900)] sm:text-7xl">
              A consulting career for engineers who want more range.
            </h1>
            <p className="mt-8 text-xl leading-9 text-[var(--color-ink-700)]">
              Code Labs is for people who want broader technical exposure,
              hands-on work, and a company that still feels close. You get more
              contexts, more teams, and more ways to grow without losing the
              support, learning, and shared context that make a consultancy worth
              joining.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={contactHref}
                className="stripe-button-primary inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition"
              >
                Start the conversation
              </a>
              <Link
                href="/#selected-work"
                className="stripe-button-secondary inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition"
              >
                See the work shape
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="stripe-card-soft relative overflow-hidden p-3">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[8px]">
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
            <div className="stripe-card-dark stripe-sheen p-7 text-white">
              <p className="stripe-kicker text-[var(--color-accent-soft)]">
                What changes
              </p>
              <p className="mt-4 font-display text-3xl leading-tight">
                More environments. More technical pattern recognition. More ways
                to grow than one internal context can usually provide.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/78">
                The company around it is what makes that sustainable over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Why join Code Labs"
              title="Why people join."
              description="A few straightforward reasons this place suits engineers who want to keep growing."
            />
          </div>
          <div className="space-y-5">
            {careerReasons.map((item) => (
              <article key={item.title} className="stripe-card p-6">
                <h2 className="font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-ink-700)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why consulting can be a strong career path"
            title="Why consulting works well for the right kind of engineer."
            description="It is not about product companies being wrong. It is about seeing more, learning faster, and still belonging to a real company while you do it."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="stripe-card-soft p-8">
              <p className="stripe-kicker">In short</p>
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
              ].map((item, index) => (
                <article key={item} className="stripe-card-soft p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-[var(--color-accent-soft)] text-sm font-medium text-[var(--color-ink-900)]">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-7 text-[var(--color-ink-700)]">
                      {item}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you might work on"
            title="What you might actually work on."
            description="The kinds of assignments and technical problems Code Labs already gets close to."
          />
          <div className="mt-14 grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
            <div className="space-y-4">
              {workScenarios.slice(0, 3).map((scenario) => (
                <article key={scenario.title} className="stripe-card p-6">
                  <h2 className="font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                    {scenario.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                    {scenario.summary}
                  </p>
                </article>
              ))}
            </div>
            <div className="stripe-card-soft p-8">
              <p className="stripe-kicker">
                More examples
              </p>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {careerAreas.map((area) => (
                  <article
                    key={area.title}
                    className="border-t border-[var(--color-line)] pt-4"
                  >
                    <h3 className="font-display text-2xl leading-tight text-[var(--color-ink-900)]">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                      {area.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="How we work together"
              title="Support is part of the job here."
              description="Onboarding, goals, learning, and internal momentum are all there to make sure people are actually supported."
            />
          </div>
          <div className="space-y-5">
            {growthSupport.map((item, index) => (
              <article key={item.title} className="stripe-card p-6">
                <div className="grid gap-5 md:grid-cols-[56px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-[var(--color-accent-soft)] text-sm font-medium text-[var(--color-ink-900)]">
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] border border-[var(--color-line)]">
              <Image
                src="/assets/blogg/codelabsby-kami-paer-pingpong.webp"
                alt="Code Labs team activity"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 26vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] border border-[var(--color-line)]">
              <Image
                src="/assets/blogg/kubecon26/evening_drink.webp"
                alt="Code Labs after conference sessions"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 26vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="It's not only work"
              title="There is life around the work too."
              description="Code Labs takes engineering seriously, but there is also room for lunches, meetups, conference trips, internal ideas, sports support, and shared time together."
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

      <section className="border-y border-[var(--color-line)] bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we offer"
            title="What we offer."
            description="A setup for work, family life, health, learning, and long-term growth."
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
