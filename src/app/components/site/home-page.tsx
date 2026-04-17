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
import {
  accentStyles,
  getToneByIndex,
} from "@/app/components/site/design";

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
    <main className="site-shell overflow-hidden">
      <section className="hero-surface relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="site-orb-blue left-[-5rem] top-10 h-44 w-44" />
        <div className="site-orb-violet right-[-4rem] top-16 h-40 w-40" />
        <div className="site-orb-coral bottom-10 left-[42%] h-28 w-28" />
        <div className="site-container grid gap-14 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:py-28">
          <div className="relative max-w-3xl">
            <div className="flex flex-wrap gap-3">
              <span className="site-pill border-[rgba(37,99,235,0.18)] bg-[rgba(255,255,255,0.82)] px-4 py-2 text-sm font-medium text-[var(--color-ink-800)]">
                Engineering consultancy, Stockholm
              </span>
              <span className="site-pill border-[rgba(249,115,96,0.16)] bg-[rgba(249,115,96,0.08)] px-4 py-2 text-sm font-medium text-[var(--color-brand-coral)]">
                Serious work, human tone
              </span>
            </div>
            <p className="site-kicker mt-8">Code Labs</p>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[0.92] text-[var(--color-ink-900)] sm:text-7xl">
              Build real things.
              <br />
              Join new teams.
              <br />
              Keep growing.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--color-ink-700)]">
              Code Labs is a Swedish consultancy for engineers who want more than
              one long stay in the same environment. The work is grounded in
              platform engineering, DevOps, cloud infrastructure, reliability,
              internal tooling, and modern delivery work that matters in
              production.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#selected-work"
                className="site-button-primary inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium"
              >
                See what you could work on
              </Link>
              <a
                href={contactHref}
                className="site-button-secondary inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium"
              >
                Talk to us
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {([
                { label: "Platform engineering", tone: "blue" },
                { label: "AI delivery", tone: "violet" },
                { label: "Developer tooling", tone: "mint" },
                { label: "Cloud operations", tone: "blue" },
                { label: "Team scaling", tone: "coral" },
              ] as const).map((item) => {
                const toneStyle = accentStyles[item.tone];
                return (
                  <span
                    key={item.label}
                    className={`site-pill px-4 py-2 text-sm font-medium ${toneStyle.pill}`}
                  >
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="relative grid gap-6">
            <div className="grid gap-6 sm:grid-cols-[1.08fr_0.92fr]">
              <div className="site-card overflow-hidden p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[12px]">
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
                <article className="site-card p-7">
                  <p className="site-kicker text-[var(--color-brand-blue)]">Why join</p>
                  <p className="mt-4 text-base leading-8 text-[var(--color-ink-700)]">
                    To work across different technical environments without
                    losing the support, identity, and energy of a real company.
                  </p>
                </article>
                <article className="site-card-dark stripe-sheen p-7 text-white">
                  <p className="site-kicker text-[var(--color-brand-sky)]">What you get</p>
                  <p className="mt-4 text-base leading-8 text-slate-200">
                    Broader engineering experience than one stack, one product,
                    and one internal culture can usually offer.
                  </p>
                </article>
              </div>
            </div>

            <div className="site-card-tint border-[rgba(91,91,214,0.12)] bg-[linear-gradient(180deg,rgba(247,244,255,0.78)_0%,rgba(255,255,255,0.98)_100%)] p-8">
              <p className="site-kicker text-[var(--color-brand-violet)]">In one line</p>
              <p className="mt-4 font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                Join a place where you keep seeing new things, not the same
                setup for five more years.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-ink-700)]">
                It is not about chasing change for its own sake. It is about
                building a wider, stronger engineering career while still
                belonging to one team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-white py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeading
              eyebrow="What you could actually work on"
              title="What this can look like in practice."
              description="These are the kinds of assignments and technical situations Code Labs already works in."
              tone="blue"
            />
          </div>
          <div className="space-y-4">
            {workScenarios.map((scenario, index) => {
              const tone = getToneByIndex(index);
              const toneStyle = accentStyles[tone];

              return (
                <article
                  key={scenario.title}
                  className={`site-card-tint ${toneStyle.card} ${toneStyle.border} border p-6`}
                >
                  <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold ${toneStyle.icon}`}
                    >
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
                          <span
                            key={example}
                            className={`site-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${toneStyle.pillSoft}`}
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-blue border-y border-[var(--color-line)] py-16">
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="site-kicker">Where we have worked</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[var(--color-ink-900)]">
                Across gaming, retail, media, e-commerce, and larger engineering
                organizations.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-ink-700)]">
                Code Labs has worked in environments where build pipelines, cloud
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

      <section className="section-dark py-24 text-white sm:py-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why consulting"
            title="A strong consulting path can make you broader without making you shallow."
            description="Staying too long in one product environment can narrow your exposure while technology and practices keep evolving elsewhere. Consulting gives you more teams, more tools, and more ways of working to learn from."
            tone="mint"
            className="max-w-4xl [&_h2]:text-white [&_p:last-child]:text-slate-200"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="rounded-[24px] border border-white/10 bg-white/6 p-8 shadow-[0_24px_50px_rgba(2,6,23,0.26)]">
              <p className="site-kicker text-[var(--color-brand-sky)]">Why it adds up</p>
              <blockquote className="mt-5 font-display text-4xl leading-tight text-white">
                You are not only changing clients.
                <br />
                You are compounding engineering experience faster.
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                The difference is exposure: different architectures, different
                delivery models, different expectations, and different technical
                constraints. That tends to make people more adaptable and more
                capable over time.
              </p>
            </article>
            <div className="space-y-4">
              {consultingAdvantages.map((item, index) => {
                const tone = getToneByIndex(index, ["mint", "violet"]);
                const toneStyle = accentStyles[tone];

                return (
                  <article
                    key={item.title}
                    className={`rounded-[20px] border border-white/10 bg-white/8 p-6 ${toneStyle.border}`}
                  >
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${toneStyle.icon}`}>
                      <span className="text-sm font-semibold text-white/90">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 font-display text-3xl text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-violet border-y border-[var(--color-line)] py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="A clear mix of work."
              description="Broad enough to offer real variety, but focused enough that you understand what kind of company you are joining."
              tone="violet"
            />
          </div>
          <div className="space-y-6">
            {servicePillars.map((pillar, index) => {
              const tone = getToneByIndex(index);
              const toneStyle = accentStyles[tone];

              return (
                <article
                  key={pillar.title}
                  className="site-card border-l-4 p-6"
                  style={{ borderLeftColor: toneStyle.accent }}
                >
                  <div className="grid gap-4 md:grid-cols-[70px_1fr]">
                    <div className={`text-sm font-semibold uppercase tracking-[0.22em] ${toneStyle.eyebrow}`}>
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
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-white py-24 sm:py-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="Environments"
            title="Different domains, different engineering situations, different ways to grow."
            description="It is not just a list of logos. It is the kind of range that changes how quickly someone learns and how adaptable they become."
            tone="mint"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {environments.map((environment, index) => {
              const tone = getToneByIndex(index, ["blue", "mint", "violet"]);
              const toneStyle = accentStyles[tone];

              return (
                <article
                  key={environment.title}
                  className={`site-card-tint ${toneStyle.card} ${toneStyle.border} border p-7`}
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
                          className={`site-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${toneStyle.pillSoft}`}
                        >
                          {context}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="selected-work"
        className="section-blue border-y border-[var(--color-line)] py-24 sm:py-32"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="Selected work"
            title="A few good examples of the kind of work we get close to."
            description="Not full case studies. Just enough to make the work feel real."
            tone="blue"
          />
          <div className="mt-14 space-y-8">
            {selectedWork.map((item, index) => {
              const tone = getToneByIndex(index);
              const toneStyle = accentStyles[tone];

              return (
                <article
                  key={item.title}
                  className={`site-card border ${toneStyle.border} p-8`}
                >
                  <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
                    <div>
                      <span
                        className={`site-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${toneStyle.pill}`}
                      >
                        {item.eyebrow}
                      </span>
                      <h3 className="mt-5 font-display text-4xl leading-tight text-[var(--color-ink-900)]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="grid gap-4 text-sm leading-7 text-[var(--color-ink-700)] md:grid-cols-2">
                      <p>
                        <span className="font-semibold text-[var(--color-ink-900)]">
                          Context:
                        </span>{" "}
                        {item.context}
                      </p>
                      <p>
                        <span className="font-semibold text-[var(--color-ink-900)]">
                          Challenge:
                        </span>{" "}
                        {item.challenge}
                      </p>
                      <p>
                        <span className="font-semibold text-[var(--color-ink-900)]">
                          Code Labs helped with:
                        </span>{" "}
                        {item.contribution}
                      </p>
                      <p>
                        <span className="font-semibold text-[var(--color-ink-900)]">
                          What it means if you join:
                        </span>{" "}
                        {item.candidateAngle}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="section-white py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="How we work"
              title="A consultancy that still feels like a company."
              description="The work matters, and the company around it should matter too."
              tone="coral"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {howWeWorkPrinciples.map((principle, index) => {
              const tone = getToneByIndex(index, ["coral", "blue", "mint", "violet"]);
              const toneStyle = accentStyles[tone];

              return (
                <article
                  key={principle.title}
                  className={`site-card-tint ${toneStyle.card} ${toneStyle.border} border p-6`}
                >
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${toneStyle.icon}`}>
                    <span className="text-sm font-semibold">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl text-[var(--color-ink-900)]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-mint border-y border-[var(--color-line)] py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Life at Code Labs"
                title="Good work, good people, and a life around it."
                description="Conference trips, recruiting lunches, activities, meals, meetups, and shared projects all help answer the same question: would it feel good to belong here?"
                tone="coral"
              />
              <div className="mt-10 space-y-5">
                {lifeSignals.map((signal, index) => {
                  const tone = getToneByIndex(index, ["coral", "mint", "blue"]);
                  const toneStyle = accentStyles[tone];

                  return (
                    <article
                      key={signal.title}
                      className={`site-card-tint ${toneStyle.card} ${toneStyle.border} border p-6`}
                    >
                      <h3 className="font-display text-2xl text-[var(--color-ink-900)]">
                        {signal.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                        {signal.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="site-card overflow-hidden p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[14px]">
                    <Image
                      src="/assets/blogg/kubecon26/love_paer_tommy.webp"
                      alt="Code Labs at KubeCon Europe 2026"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 34vw"
                    />
                  </div>
                </div>
                <div className="grid gap-6">
                  <div className="site-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[14px]">
                      <Image
                        src="/assets/blogg/codelabsby-kami-paer-pingpong.webp"
                        alt="Code Labs team activity"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 24vw"
                      />
                    </div>
                  </div>
                  <div className="site-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[14px]">
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
              </div>
              <article className="site-card-dark stripe-sheen p-7 text-white">
                <p className="site-kicker text-[var(--color-brand-sky)]">
                  Blog and Code Labs by
                </p>
                <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight text-white">
                  This is where you get a feel for the company between
                  assignments.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  You can see conference trips, monthly Code Labs by activities,
                  team dinners, meetups, and the kind of shared energy that makes
                  consulting here feel like belonging to an actual company.
                </p>
                <Link
                  href="/blog"
                  className="site-button-secondary mt-6 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[var(--color-ink-900)]"
                >
                  Read the latest posts
                </Link>
              </article>
            </div>
          </div>
          <div className="mt-10">
            <ProofPostsGrid
              posts={lifePosts}
              title="A few recent glimpses of life at Code Labs"
              description="Conference notes, monthly Code Labs by activities, meals, trips, and shared moments make the company easier to picture."
            />
          </div>
        </div>
      </section>

      <section className="section-white py-24 sm:py-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="What we offer"
            title="A setup built for the long run."
            description="The offer is meant to support work, wellbeing, family life, learning, and flexibility."
            tone="mint"
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
