import Image from "next/image";
import Link from "next/link";
import getPostMetadata from "@/app/components/Blog/getPostMetadata";
import type { PostMetadata } from "@/app/components/Blog/PostMetadata";
import {
  consultingAdvantages,
  contactHref,
  environments,
  howWeWorkPrinciples,
  lifeSignals,
  selectedWork,
  servicePillars,
  workScenarios,
} from "@/app/components/site/site-data";
import {
  BenefitsShowcase,
  ContactCallout,
  LogoCloud,
  ProofPostsGrid,
  SectionHeading,
} from "@/app/components/site/shared-sections";

function getLifePosts() {
  const preferredSlugs = [
    "code-labs-kubecon-amsterdam-2026",
    "code-labs-by-kami-1",
    "code-labs-by-marre-1",
  ];
  const posts = getPostMetadata();
  const selected = preferredSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is PostMetadata => Boolean(post));

  return selected.length === preferredSlugs.length ? selected : posts.slice(0, 3);
}

export default function HomePage() {
  const lifePosts = getLifePosts();

  return (
    <main className="overflow-hidden bg-[var(--color-ink-0)]">
      <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_72%,#f1f4f7_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(71,165,250,0.16),transparent_26%),radial-gradient(circle_at_72%_12%,rgba(0,100,224,0.12),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Code Labs
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.93] text-[var(--color-ink-900)] sm:text-7xl">
              Build real systems.
              <br />
              See more worlds.
              <br />
              Grow faster.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--color-ink-700)]">
              Code Labs is a Swedish consultancy for engineers who want more than
              one long stay in the same environment. We are mainly focused on
              platform engineering, DevOps, cloud infrastructure, reliability,
              internal tooling, and delivery work that matters in production, with
              selective full-stack and AI rollout work where it adds real value.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#selected-work"
                className="stripe-button-primary inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition"
              >
                See what you could work on
              </Link>
              <a
                href={contactHref}
                className="stripe-button-secondary inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition"
              >
                Talk to us
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Platform engineering",
                "CI/CD and developer tooling",
                "Kubernetes and cloud operations",
                "Observability and reliability",
                "Internal systems and integrations",
              ].map((item) => (
                <span
                  key={item}
                  className="stripe-chip px-4 py-2 text-sm shadow-[rgba(50,50,93,0.18)_0px_12px_24px_-18px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-[1.12fr_0.88fr]">
              <div className="stripe-card-soft relative overflow-hidden p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                  <Image
                    src="/assets/entourage.jpeg"
                    alt="Code Labs team gathering together"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </div>
              <div className="grid gap-6">
                <article className="stripe-card p-7">
                  <p className="stripe-kicker">
                    Why people join
                  </p>
                  <p className="mt-4 text-base leading-8 text-[var(--color-ink-700)]">
                    To work across different technical environments without losing
                    the support, identity, and energy of a real company.
                  </p>
                </article>
                <article className="stripe-card-dark stripe-sheen p-7 text-white">
                  <p className="stripe-kicker text-[var(--color-accent-soft)]">
                    Main offer
                  </p>
                  <p className="mt-4 text-base leading-8 text-white/78">
                    Broader engineering experience than one stack, one product,
                    and one internal culture can usually offer.
                  </p>
                </article>
              </div>
            </div>

            <div className="stripe-card-soft p-8">
              <p className="stripe-kicker">
                The memorable version
              </p>
              <p className="mt-4 font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                Join a place where you keep seeing new systems, not the same
                story for five more years.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-700)]">
                The point is not to chase novelty for its own sake. The point is
                to build a wider, stronger engineering career by working across
                real environments while still belonging to one team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="What you could actually work on"
              title="The work should feel concrete early, not hidden behind consultancy language."
              description="A strong recruiting site needs to tell candidates what this can mean in practice. These are the kinds of assignments and technical situations Code Labs already works in."
            />
          </div>
          <div className="space-y-4">
            {workScenarios.map((scenario, index) => (
              <article key={scenario.title} className="stripe-card p-6">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-[var(--color-accent-soft)] text-sm font-medium text-[var(--color-ink-900)]">
                    0{index + 1}
                  </div>
                  <div>
                    <h2 className="font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                      {scenario.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                      {scenario.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {scenario.examples.map((example) => (
                        <span key={example} className="stripe-chip px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-600)]">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#f7f8fa_100%)] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Proof belt
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-ink-900)]">
                Across gaming, retail, media, e-commerce, and larger engineering
                organizations.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-ink-700)]">
                Code Labs has worked in environments where build systems, cloud
                platforms, observability, modernization, and internal engineering
                all matter in practice.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <LogoCloud />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why consulting"
            title="A strong consulting path can make you broader without making you shallow."
            description="This is the core recruiting argument for Code Labs. Staying too long in one product environment can narrow your exposure while technology and practices keep evolving elsewhere. Consulting gives you more systems, more tools, and more engineering cultures to learn from."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="stripe-card-dark stripe-sheen p-8 text-white">
              <p className="stripe-kicker text-[var(--color-accent-soft)]">
                The real advantage
              </p>
              <blockquote className="mt-5 font-display text-4xl leading-tight">
                You are not only changing clients.
                <br />
                You are compounding engineering experience faster.
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78">
                The difference is exposure: different architectures, different
                delivery models, different expectations, and different technical
                constraints. That tends to make people more adaptable and more
                capable over time.
              </p>
            </article>
            <div className="space-y-4">
              {consultingAdvantages.map((item) => (
                <article key={item.title} className="stripe-card-soft p-6">
                  <h3 className="font-display text-3xl text-[var(--color-ink-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="Company capability presented as a system, not a pile of equal cards."
              description="Code Labs should feel broad enough to offer variety, but still coherent enough that candidates understand what kind of company they are joining."
            />
          </div>
          <div className="space-y-6">
            {servicePillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="grid gap-4 border-t border-[var(--color-line)] pt-6 md:grid-cols-[70px_1fr]"
              >
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                    {pillar.description}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-ink-600)]">
                    {pillar.candidateFocus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Environments"
            title="Different domains, different engineering situations, different ways to grow."
            description="The point is not only variety as a list of logos. It is the kind of range that changes how quickly someone learns and how adaptable they become."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {environments.map((environment) => (
              <article
                key={environment.title}
                className="rounded-[24px] border border-[var(--color-line)] bg-white p-7 shadow-[0_18px_42px_-24px_rgba(0,0,0,0.12)]"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-xl">
                    <h3 className="font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                      {environment.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-ink-700)]">
                      {environment.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:max-w-[14rem] lg:justify-end">
                    {environment.contexts.map((context) => (
                      <span
                        key={context}
                        className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-600)]"
                      >
                        {context}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="border-y border-[var(--color-line)] bg-[var(--color-surface)] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected work"
            title="Short proof moments that show what future hires can recognize."
            description="These are not full case studies. They are stronger, faster signals about what Code Labs gets close to and what kind of work someone could imagine themselves doing here."
          />
          <div className="mt-14 space-y-8">
            {selectedWork.map((item) => (
              <article key={item.title} className="stripe-card p-8">
                <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-4 font-display text-4xl leading-tight text-[var(--color-ink-900)]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="grid gap-4 text-sm leading-7 text-[var(--color-ink-700)] md:grid-cols-2">
                    <p>
                      <span className="font-medium text-[var(--color-ink-900)]">
                        Context:
                      </span>{" "}
                      {item.context}
                    </p>
                    <p>
                      <span className="font-medium text-[var(--color-ink-900)]">
                        Challenge:
                      </span>{" "}
                      {item.challenge}
                    </p>
                    <p>
                      <span className="font-medium text-[var(--color-ink-900)]">
                        Code Labs helped with:
                      </span>{" "}
                      {item.contribution}
                    </p>
                    <p>
                      <span className="font-medium text-[var(--color-ink-900)]">
                        Why this matters to hires:
                      </span>{" "}
                      {item.candidateAngle}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="A consultancy that still feels like a company."
              description="One of the most important parts of the recruiting story is that Code Labs should not feel like a place where people are only rented out. The work is real, and the company around it should be real too."
            />
          </div>
          <div className="space-y-5">
            {howWeWorkPrinciples.map((principle) => (
              <article key={principle.title} className="stripe-card p-6">
                <h3 className="font-display text-3xl text-[var(--color-ink-900)]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <SectionHeading
                eyebrow="Life at Code Labs"
                title="The company should feel active, warm, and a little hard to reduce to work alone."
                description="Conference trips, recruiting lunches, internal demos, sports, meals, meetups, and shared projects all help answer the same candidate question: would it feel good to belong here?"
              />
              <div className="mt-10 space-y-5">
                {lifeSignals.map((signal) => (
                  <article key={signal.title} className="stripe-card-soft p-6">
                    <h3 className="font-display text-2xl text-[var(--color-ink-900)]">
                      {signal.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                      {signal.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-[var(--color-line)]">
                  <Image
                    src="/assets/blogg/kubecon26/love_paer_tommy.webp"
                    alt="Code Labs at KubeCon Europe 2026"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 34vw"
                  />
                </div>
                <div className="grid gap-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[var(--color-line)]">
                    <Image
                      src="/assets/blogg/codelabsby-kami-paer-pingpong.webp"
                      alt="Code Labs team activity"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 24vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[var(--color-line)]">
                    <Image
                      src="/assets/blogg/pickleball-2.png"
                      alt="Code Labs by Marre pickleball activity"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 24vw"
                    />
                  </div>
                </div>
              </div>
              <article className="stripe-card-dark stripe-sheen p-7 text-white">
                <p className="stripe-kicker text-[var(--color-accent-soft)]">
                  Blog and Code Labs by
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">
                  This is where the company becomes visible between assignments.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  The blog is not filler. It is where candidates can see conference
                  trips, monthly Code Labs by activities, team dinners, meetups,
                  and the kind of shared energy that makes consulting here feel
                  like belonging to an actual company.
                </p>
                <Link
                  href="/blog"
                  className="stripe-button-secondary mt-6 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition hover:bg-white"
                >
                  Read the latest posts
                </Link>
              </article>
              <ProofPostsGrid
                posts={lifePosts}
                title="Proof that the company has a life between the projects"
                description="Conference notes, monthly Code Labs by activities, meals, trips, and shared moments give candidates a better feel for what Code Labs is actually like."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we offer"
            title="Benefits presented as a life setup, not a row of admin boxes."
            description="The offer should feel like something a thoughtful company has built around long-term work, wellbeing, family life, learning, and flexibility."
          />
          <div className="mt-14">
            <BenefitsShowcase />
          </div>
        </div>
      </section>

      <ContactCallout
        title="If you want broader engineering experience without losing team support, write to us."
        description="Code Labs is for people who want more technical range, stronger growth, and a company that still feels human. If that sounds like what you are missing, reach out directly."
      />
    </main>
  );
}
