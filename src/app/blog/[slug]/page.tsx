import type { Metadata } from "next";
import Markdown from 'markdown-to-jsx';
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import getPostMetadata, { getPostBySlug } from "@/app/components/Blog/getPostMetadata";
import { isValidElement, type ReactNode } from "react";
import { authorAvatar, Tags } from "@/app/components/site/cards";
import { TerminalFrame } from "@/app/components/site/ui";
import { absoluteUrl, buildPageMetadata, siteConfig, jsonLdScript } from "@/app/seo";

/** Fenced code blocks get a terminal-window frame; the tab shows the language. */
function CodeBlock({ children }: { children?: ReactNode }) {
    const className = isValidElement<{ className?: string }>(children) ? children.props.className ?? "" : "";
    const language = /lang(?:uage)?-([\w-]+)/.exec(className)?.[1] ?? "code";
    return (
        <TerminalFrame title={language} className="my-8">
            <pre>{children}</pre>
        </TerminalFrame>
    );
}

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

    const isCodeLabsBy = post.title.toLowerCase().includes("code labs by");
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
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLdScript(articleJsonLd)}
            />
            <article>
                <header className="section-glow border-b border-white/10">
                    <div className="site-container py-12 sm:py-16">
                        <Link href="/blog" className="link-neon mono text-xs uppercase tracking-[0.14em]">
                            ← Back to the Newswire
                        </Link>
                        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                            <div>
                                <p className="mono flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-300">
                                    <time dateTime={post.date} className="text-sunset-gold">{post.date}</time>
                                    <span>{post.kind === "tech" ? "Tech desk" : "Crew life"}</span>
                                    {isCodeLabsBy && <span>Code Labs by</span>}
                                </p>
                                <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-sand-50 sm:text-5xl">
                                    {post.title}
                                </h1>
                                <p className="lede mt-5 max-w-2xl">{post.description}</p>
                                <div className="mt-4">
                                    <Tags tags={post.tags} />
                                </div>
                                <div className="mt-8 flex items-center gap-3 text-sm text-ink-100">
                                    <Image
                                        src={authorAvatar(post.author)}
                                        width={40}
                                        height={40}
                                        alt=""
                                        className="h-10 w-10 rounded-full border border-sunset-pink/60 object-cover"
                                    />
                                    <div>
                                        <p className="font-bold text-sand-50">{post.author}</p>
                                        <p className="mono text-xs text-ink-300">Code Labs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-[5/4] overflow-hidden border border-white/15 bg-night-800">
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
                </header>

                {/* Readability beats theme here: plain dark surface, generous measure. */}
                <div className="bg-night-900 py-14 sm:py-20">
                    <div className="site-container">
                        <div className="prose prose-invert prose-night mx-auto">
                            <Markdown options={{ overrides: { pre: { component: CodeBlock } } }}>{post.content}</Markdown>
                        </div>
                        <p className="mx-auto mt-14 max-w-[68ch] border-t border-white/10 pt-6">
                            <Link href="/blog" className="btn-hud btn-sm">More from the Newswire</Link>
                        </p>
                    </div>
                </div>
            </article>
        </main>
    )
};

export default PostPage;
