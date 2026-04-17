import getPostMetadata from "@/app/components/Blog/getPostMetadata";
import Image from "next/image";
import Link from "next/link";
import { accentStyles, getToneByIndex } from "@/app/components/site/design";


export default function BlogInlagg() {
  const posts = getPostMetadata();

  return (
    <main className="site-shell overflow-hidden">
      <section className="hero-surface relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="site-orb-blue left-[-4rem] top-10 h-40 w-40" />
        <div className="site-orb-violet right-[-4rem] top-16 h-40 w-40" />
        <div className="site-container py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="site-pill border-[rgba(91,91,214,0.16)] bg-[rgba(255,255,255,0.78)] px-4 py-2 text-sm font-medium text-[var(--color-ink-800)]">
              Blog and Code Labs by
            </span>
            <h1 className="mt-6 text-balance font-display text-5xl leading-[0.95] text-[var(--color-ink-900)] sm:text-6xl">
              Notes from projects, conferences, team life, and the work around it.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--color-ink-700)]">
              Follow Code Labs adventures at and outside the workplace. The blog
              gives a clearer feel for the people, the pace, and the kind of
              energy behind the company.
            </p>
          </div>
        </div>
      </section>

      <section className="section-white py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => {
              const tone = getToneByIndex(index, ["blue", "violet", "coral", "mint"]);
              const toneStyle = accentStyles[tone];
              const authorSlug = post.author.split(" ")[0]?.toLowerCase();

              return (
                <article
                  key={post.slug}
                  className={`site-card-tint ${toneStyle.card} ${toneStyle.border} group overflow-hidden border transition`}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        src={post.og_image}
                        alt={post.title}
                        fill
                        priority={index < 3}
                        sizes="(max-width: 1280px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0)_34%,rgba(11,18,32,0.4)_100%)]" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <time
                          dateTime={post.date}
                          className={`site-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${toneStyle.pill}`}
                        >
                          {post.date}
                        </time>
                        <div className="flex items-center gap-2 text-sm text-[var(--color-ink-600)]">
                          <Image
                            src={`/assets/team/${authorSlug}.jpeg`}
                            width={24}
                            height={24}
                            priority={index < 3}
                            alt={`${post.author} profile photo`}
                            className="h-6 w-6 rounded-full border border-white/70 object-cover"
                          />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h2 className="mt-5 text-balance font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                        {post.description}
                      </p>
                      <span className={`mt-5 inline-flex text-sm font-medium ${toneStyle.link}`}>
                        Read article
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
