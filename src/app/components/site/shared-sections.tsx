import Image from "next/image";
import Link from "next/link";
import type { PostMetadata } from "@/app/components/Blog/PostMetadata";
import {
  benefitThemes,
  clientLogos,
  contactEmail,
  contactHref,
} from "@/app/components/site/site-data";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-4xl ${alignment} ${className}`.trim()}>
      <p className="stripe-kicker">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[1.02] text-[var(--color-ink-900)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-[var(--color-ink-700)]">
        {description}
      </p>
    </div>
  );
}

export function LogoCloud() {
  return (
    <section
      aria-label="Selected client environments"
      className="bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
        <div className="stripe-card-soft flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-ink-600)]">
            Code Labs has worked across client environments where cloud platforms,
            build pipelines, modernization, reliability, and internal engineering
            all matter in practice.
          </p>
          <div className="flex max-w-3xl flex-wrap items-center gap-x-10 gap-y-5 opacity-75">
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
    <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <article className="stripe-card-dark stripe-sheen overflow-hidden p-8 text-white">
        <p className="stripe-kicker text-[var(--color-accent-soft)]">
          Offer snapshot
        </p>
        <h3 className="mt-4 font-display text-4xl leading-tight">
          Built for people who want both strong work and a life that holds
          together.
        </h3>
        <p className="mt-5 text-base leading-8 text-white/78">
          The offer should feel like a real long-term setup: security, everyday
          support, flexibility, and room to keep developing rather than a single
          compensation gimmick.
        </p>
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
          <div className="rounded-[20px] bg-white/6 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-white/56">
              Wellness
            </p>
            <p className="mt-3 font-display text-4xl">SEK 7,000</p>
            <p className="mt-2 text-sm leading-7 text-white/72">
              Annual wellness allowance together with support for sports and
              endurance goals outside work.
            </p>
          </div>
          <div className="rounded-[20px] bg-white/6 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-white/56">
              Learning
            </p>
            <p className="mt-3 font-display text-4xl">Ongoing</p>
            <p className="mt-2 text-sm leading-7 text-white/72">
              Certifications, upskilling, internal projects, and shared learning
              are part of how the company wants people to grow.
            </p>
          </div>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {benefitThemes.map((theme) => (
          <article
            key={theme.title}
            className="stripe-card p-7"
          >
            <h3 className="font-display text-3xl leading-tight text-[var(--color-ink-900)]">
              {theme.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
              {theme.intro}
            </p>
            <ul className="mt-5 space-y-3 border-t border-[var(--color-line)] pt-5">
              {theme.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-[var(--color-ink-700)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export function BenefitsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`grid gap-4 ${
        compact ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4"
      }`}
    >
      {benefitThemes.flatMap((theme) =>
        theme.items.map((item) => (
        <article
          key={`${theme.title}-${item}`}
          className="stripe-card-soft p-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {theme.title}
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
            {item}
          </p>
        </article>
        )),
      )}
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
    <div className="stripe-card p-8">
      <div className="flex flex-col gap-3 border-b border-[var(--color-line)] pb-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Blog + Code Labs by
          </p>
          <h3 className="mt-3 font-display text-3xl text-[var(--color-ink-900)]">
            {title}
          </h3>
          <p className="mt-3 text-base leading-7 text-[var(--color-ink-700)]">
            {description}
          </p>
        </div>
        <Link
          href="/blog"
          className="stripe-button-secondary inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition"
        >
          Visit the blog
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group stripe-card-soft overflow-hidden transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={post.og_image}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {post.date}
              </p>
              <h4 className="mt-3 font-display text-2xl leading-tight text-[var(--color-ink-900)]">
                {post.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-700)]">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="stripe-card-dark stripe-sheen overflow-hidden px-8 py-12 text-white sm:px-12 sm:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                Contact
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/78">
                {description}
              </p>
            </div>
            <div className="rounded-[24px] border border-white/12 bg-white/6 p-6 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                Reach out directly
              </p>
              <a
                href={contactHref}
                className="stripe-button-secondary mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition hover:bg-white"
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
