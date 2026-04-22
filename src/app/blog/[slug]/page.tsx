import type { Metadata } from "next";
import Markdown from 'markdown-to-jsx';
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import getPostMetadata, { getPostBySlug } from "@/app/components/Blog/getPostMetadata";
import { absoluteUrl, buildPageMetadata, siteConfig } from "@/app/seo";

export async function generateStaticParams() {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return buildPageMetadata({
            title: "Blog",
            description: "Read Code Labs notes from projects and team life.",
            path: "/blog",
        });
    }

    return buildPageMetadata({
        title: post.title,
        description: post.description,
        path: `/blog/${post.slug}`,
        image: post.og_image,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
    });
}

const PostPage = async (props: { params: Promise<{ slug: string }> }) => {
    const params = await props.params;
    const slug = params.slug;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const authorSlug = post.author?.split(" ")[0]?.toLowerCase();
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": absoluteUrl(`/blog/${post.slug}#article`),
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        image: absoluteUrl(post.og_image),
        mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        author: {
            "@type": "Person",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/assets/logo/codelabs.svg"),
            },
        },
    };

    return (
        <main className="site-shell overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <section className="hero-surface relative overflow-hidden border-b border-[var(--color-line)]">
                <div className="site-orb-blue left-[-4rem] top-10 h-44 w-44" />
                <div className="site-orb-violet right-[-4rem] top-16 h-44 w-44" />
                <div className="site-container py-14 sm:py-20">
                    <Link
                        href="/blog"
                        className="site-link inline-flex text-sm font-medium"
                    >
                        Back to blog
                    </Link>
                    <div className="mt-8 grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
                        <div className="max-w-3xl">
                            <div className="flex flex-wrap items-center gap-3">
                                <time
                                    dateTime={post.date}
                                    className="site-pill border-[rgba(37,99,235,0.16)] bg-[rgba(255,255,255,0.78)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-blue)]"
                                >
                                    {post.date}
                                </time>
                                <span className="site-pill border-[rgba(91,91,214,0.14)] bg-[rgba(255,255,255,0.78)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-violet)]">
                                    Code Labs by
                                </span>
                            </div>
                            <h1 className="mt-6 text-balance font-display text-5xl leading-[0.94] text-[var(--color-ink-900)] sm:text-6xl">
                                {post.title}
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-ink-700)]">
                                {post.description}
                            </p>
                            <div className="mt-8 flex items-center gap-3 text-sm text-[var(--color-ink-600)]">
                                <Image
                                    src={`/assets/team/${authorSlug}.jpeg`}
                                    width={40}
                                    height={40}
                                    alt={`${post.author} profile photo`}
                                    className="h-10 w-10 rounded-full border border-white/70 object-cover"
                                />
                                <div>
                                    <p className="font-medium text-[var(--color-ink-900)]">{post.author}</p>
                                    <p>Code Labs</p>
                                </div>
                            </div>
                        </div>
                        <div className="site-card overflow-hidden p-3">
                            <div className="relative aspect-[5/4] overflow-hidden rounded-[14px]">
                                <Image
                                    src={post.og_image}
                                    alt={post.title}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 46vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-white py-16 sm:py-20">
                <div className="site-container">
                    <div className="site-card mx-auto max-w-5xl p-6 sm:p-8">
                        <article className="site-prose mx-auto">
                            <Markdown>{post.content}</Markdown>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default PostPage;
