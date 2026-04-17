import Image from "next/image";
import Link from "next/link";
import type { PostMetadata } from "@/app/components/Blog/PostMetadata";
import {
  benefitThemes,
  clientLogos,
  contactEmail,
  contactHref,
} from "@/app/components/site/site-data";
import {
  accentStyles,
  getToneByIndex,
  type AccentTone,
} from "@/app/components/site/design";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: AccentTone;
  className?: string;
};

function toneIconClasses(tone: AccentTone) {
  return accentStyles[tone].icon;
}

function tonePillClasses(tone: AccentTone) {
  return accentStyles[tone].pill;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "blue",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const toneStyle = accentStyles[tone];

  return (
    <div className={`max-w-4xl ${alignment} ${className}`.trim()}>
      <p className={`site-kicker ${toneStyle.eyebrow}`}>{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.02] text-[var(--color-ink-900)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-ink-700)]">
        {description}
      </p>
    </div>
  );
}

export function LogoCloud() {
  return (
    <section aria-label="Selected client environments" className="bg-transparent">
      <div className="site-container py-6">
        <div className="site-card-tint flex flex-col gap-6 border-[rgba(37,99,235,0.08)] p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div className="max-w-2xl">
            <p className="site-kicker">Trusted in real delivery environments</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
              Code Labs has worked in product and platform environments where
              cloud operations, delivery pipelines, modernization, internal
              tooling, and reliability all matter in day-to-day engineering.
            </p>
          </div>
          <div className="flex max-w-3xl flex-wrap items-center gap-x-10 gap-y-6 opacity-80">
            {clientLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className={`w-auto grayscale ${logo.className ?? "h-5"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsShowcase() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.98fr_1.02fr]">
      <article className="site-card-dark stripe-sheen overflow-hidden p-8 text-white md:p-10">
        <p className="site-kicker text-[var(--color-brand-sky)]">Offer snapshot</p>
        <h3 className="mt-4 max-w-xl font-display text-4xl leading-tight text-white">
          Built for engineers who want both meaningful work and a life that holds
          together.
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
          The offer is designed to feel sustainable over time: security,
          flexibility, learning support, and the kind of everyday structure that
          makes consulting viable for the long run.
        </p>
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
          <div className="rounded-[20px] border border-white/10 bg-white/6 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
              Wellness
            </p>
            <p className="mt-3 font-display text-4xl text-white">SEK 7,000</p>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              Annual wellness allowance together with support for sports and
              endurance goals outside work.
            </p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-white/6 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
              Learning
            </p>
            <p className="mt-3 font-display text-4xl text-white">Ongoing</p>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              Certifications, upskilling, internal projects, and shared learning
              stay part of how the company wants people to grow.
            </p>
          </div>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2">
        {benefitThemes.map((theme, index) => {
          const tone = getToneByIndex(index, ["blue", "mint", "violet"]);
          const toneStyle = accentStyles[tone];
          const spanClass =
            benefitThemes.length % 2 === 1 && index === benefitThemes.length - 1
              ? "md:col-span-2"
              : "";

          return (
            <article
              key={theme.title}
              className={`site-card-tint ${toneStyle.card} ${toneStyle.border} ${spanClass} border p-7`}
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${toneIconClasses(tone)}`}>
                <span className="text-sm font-semibold">0{index + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl leading-tight text-[var(--color-ink-900)]">
                {theme.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                {theme.intro}
              </p>
              <ul className="mt-5 space-y-3 border-t border-[rgba(226,232,240,0.8)] pt-5">
                {theme.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-[var(--color-ink-700)]"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${toneIconClasses(tone)}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function ProofPostsGrid({
  posts,
  title = "From life at Code Labs",
  description = "A few recent signals that the company invests in learning, team energy, and internal momentum outside pure delivery work.",
}: {
  posts: PostMetadata[];
  title?: string;
  description?: string;
}) {
  return (
    <div className="site-card border-[rgba(91,91,214,0.12)] p-8 sm:p-10">
      <div className="flex flex-col gap-4 border-b border-[var(--color-line)] pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="site-kicker text-[var(--color-brand-coral)]">Blog + Code Labs by</p>
          <h3 className="mt-3 max-w-2xl font-display text-3xl text-[var(--color-ink-900)] sm:text-4xl">
            {title}
          </h3>
          <p className="mt-3 text-base leading-7 text-[var(--color-ink-700)]">
            {description}
          </p>
        </div>
        <Link
          href="/blog"
          className="site-button-secondary inline-flex items-center justify-center px-5 py-3 text-sm font-medium"
        >
          Visit the blog
        </Link>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {posts.map((post, index) => {
          const tone = getToneByIndex(index, ["coral", "blue", "violet"]);
          const toneStyle = accentStyles[tone];

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group site-card-tint ${toneStyle.card} ${toneStyle.border} overflow-hidden border transition`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.og_image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0)_35%,rgba(11,18,32,0.42)_100%)]" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`site-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${tonePillClasses(tone)}`}>
                    {post.date}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-ink-500)]">
                    {post.author}
                  </span>
                </div>
                <h4 className="mt-4 text-balance font-display text-2xl leading-tight text-[var(--color-ink-900)]">
                  {post.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                  {post.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function ContactCallout({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section id="contact" className="pb-24 pt-10 sm:pb-32">
      <div className="site-container">
        <div className="site-card-dark stripe-sheen overflow-hidden px-8 py-12 text-white sm:px-12 sm:py-16">
          <div className="site-orb-blue -right-10 top-8 h-36 w-36" />
          <div className="site-orb-coral bottom-0 right-20 h-28 w-28" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="relative max-w-3xl">
              <p className="site-kicker text-[var(--color-brand-sky)]">Contact</p>
              <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-tight text-white sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                {description}
              </p>
            </div>
            <div className="relative rounded-[20px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-300">
                Reach out directly
              </p>
              <a
                href={contactHref}
                className="site-button-secondary mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[var(--color-ink-900)]"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
