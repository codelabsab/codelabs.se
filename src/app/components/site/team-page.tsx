import Image from "next/image";
import { teamGroups } from "@/app/components/site/site-data";

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-[var(--color-ink-0)]">
      <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_70%,#f1f4f7_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[22rem] bg-[radial-gradient(circle_at_top_left,rgba(71,165,250,0.14),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(0,100,224,0.12),transparent_28%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="max-w-3xl">
              <p className="stripe-kicker">
                Team
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--color-ink-900)] sm:text-5xl">
                The point is not the profiles.
                <br />
                The point is the kind of company this team creates.
              </h1>
              <p className="mt-5 text-lg leading-8 text-[var(--color-ink-700)]">
                Code Labs should feel like a small but technically credible
                company where different strengths actually complement each other:
                platform engineering, reliability, product breadth, recruiting,
                and the human side that makes consulting feel sustainable.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "What exists here",
                  text: "Platform, DevOps, cloud, reliability, internal tools, product breadth, and AI rollout thinking in one company.",
                },
                {
                  title: "Why it matters",
                  text: "A good consultancy gets stronger when different types of engineers and people functions actually reinforce each other.",
                },
                {
                  title: "What that means for hires",
                  text: "You join a company where the work is serious, the support is real, and the people around you are part of the reason to stay.",
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className={`stripe-card-soft p-6 ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <p className="stripe-kicker">
                    {item.title}
                  </p>
                  <p className="mt-3 max-w-[30rem] text-base leading-8 text-[var(--color-ink-700)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-10">
            {teamGroups.map((group) => (
              <section key={group.title} className="stripe-card p-8">
                <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
                  <div>
                    <p className="stripe-kicker">
                      Strength area
                    </p>
                    <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-ink-900)]">
                      {group.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[var(--color-ink-700)]">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                    {group.members.map((member) => (
                      <article key={member.name} className="stripe-card-soft overflow-hidden">
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1280px) 50vw, 20vw"
                          />
                        </div>
                        <div className="p-6">
                          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
                            {member.role}
                          </p>
                          <h3 className="mt-3 font-display text-2xl leading-tight text-[var(--color-ink-900)]">
                            {member.name}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                            {member.summary}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="stripe-kicker">
              Also part of everyday life
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-ink-900)] sm:text-5xl">
              Serious engineering does not need to feel sterile.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-ink-700)]">
              Mimmi and Penny are not here as full-value consultant cards. They
              are here because they say something true about Code Labs: everyday
              company life matters too, and warmth is part of the culture people
              experience when they spend time here.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--color-ink-700)]">
              The team story should end there, not with a catalog feeling, but
              with a better sense of what kind of company this group is trying to
              build together.
            </p>
          </div>
          <div className="stripe-card-soft relative overflow-hidden">
            <Image
              src="/assets/team/mimmi-penny.jpg"
              alt="Mimmi and Penny at Code Labs"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
