import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import getPostMetadata from "@/app/components/Blog/getPostMetadata";
import NewswireFeed from "@/app/components/site/NewswireFeed";
import { assetBase } from "@/app/components/site/site-data";
import { absoluteUrl, buildPageMetadata, siteConfig, jsonLdScript } from "@/app/seo";

const posts = getPostMetadata();

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Read Code Labs notes on Kubernetes, DevOps, AI and open source, plus conferences, hackathons, and team life at an engineering consultancy in Stockholm.",
  path: "/blog",
  image: posts[0]?.og_image ?? siteConfig.defaultOgImage,
});

export default function BlogInlagg() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog#blog`,
    name: "Code Labs Blog",
    description:
      "Notes from projects, conferences, team life, and the engineering work around it.",
    url: absoluteUrl("/blog"),
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: absoluteUrl(`/blog/${post.slug}`),
      image: absoluteUrl(post.og_image),
    })),
  };
  const latest = posts.slice(0, 8);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(blogJsonLd)}
      />
      <section className="relative isolate overflow-hidden">
        <Image
          src={`${assetBase}/newswire-header.webp`}
          alt="Illustration of a news studio with a wall of abstract dashboards."
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night-900 via-night-900/70 to-night-900/40" />
        <div className="site-container pb-12 pt-20 sm:pt-28">
          <p className="kicker">
            <span className="status-dot blink mr-2" style={{ "--dot": "var(--color-crit)" } as React.CSSProperties} />
            Live · The Code Labs blog
          </p>
          <p className="script mt-5 -rotate-2 text-4xl sm:text-5xl">Stockholm on-call</p>
          <h1 className="display mt-5 text-[clamp(3.6rem,12vw,9rem)] leading-[0.88]">Newswire</h1>
          <p className="lede mt-5 max-w-2xl">
            Notes from projects, conferences, team life, and the work around it. Tech posts from the desk, crew
            life from the feed.
          </p>
        </div>
        {/* Breaking-news ticker */}
        <div className="flex border-y border-white/15 bg-night-900/90">
          <span className="mono z-10 shrink-0 bg-crit px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-night-900">
            Latest
          </span>
          <div className="overflow-hidden motion-reduce:overflow-x-auto">
            <ul className="marquee ticker py-2.5">
              {[0, 1].map((copy) =>
                latest.map((post) => (
                  <li key={`${copy}-${post.slug}`} data-dup={copy ? "" : undefined} aria-hidden={copy ? true : undefined} className="mono shrink-0 px-6 text-xs text-sand-50">
                    <Link href={`/blog/${post.slug}`} tabIndex={copy ? -1 : undefined} className="hover:text-neon-cyan">
                      <span className="text-sunset-gold">{post.date}</span> {post.title}
                    </Link>
                  </li>
                )),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-night !pt-12">
        <div className="site-container">
          <h2 className="sr-only">All stories</h2>
          <NewswireFeed posts={posts} />
        </div>
      </section>
    </main>
  );
}
