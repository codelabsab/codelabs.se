import Markdown from 'markdown-to-jsx';
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import getPostMetadata from "@/app/components/Blog/getPostMetadata";

const getPostContent = (slug: string) => { // src/_posts/2021-10-26-rust-ocpp.md
    const folder = "src/_posts";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    return matter(content)
}

export async function generateStaticParams() {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const PostPage = async (props: { params: Promise<{ slug: string }> }) => {
    const params = await props.params;
    const slug = params.slug;
    const post = getPostContent(slug);
    const authorSlug = post.data.author?.split(" ")[0]?.toLowerCase();

    return (
        <main className="site-shell overflow-hidden">
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
                                    dateTime={post.data.date}
                                    className="site-pill border-[rgba(37,99,235,0.16)] bg-[rgba(255,255,255,0.78)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-blue)]"
                                >
                                    {post.data.date}
                                </time>
                                <span className="site-pill border-[rgba(91,91,214,0.14)] bg-[rgba(255,255,255,0.78)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-violet)]">
                                    Code Labs by
                                </span>
                            </div>
                            <h1 className="mt-6 text-balance font-display text-5xl leading-[0.94] text-[var(--color-ink-900)] sm:text-6xl">
                                {post.data.title}
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-ink-700)]">
                                {post.data.description}
                            </p>
                            <div className="mt-8 flex items-center gap-3 text-sm text-[var(--color-ink-600)]">
                                <Image
                                    src={`/assets/team/${authorSlug}.jpeg`}
                                    width={40}
                                    height={40}
                                    alt={`${post.data.author} profile photo`}
                                    className="h-10 w-10 rounded-full border border-white/70 object-cover"
                                />
                                <div>
                                    <p className="font-medium text-[var(--color-ink-900)]">{post.data.author}</p>
                                    <p>Code Labs</p>
                                </div>
                            </div>
                        </div>
                        <div className="site-card overflow-hidden p-3">
                            <div className="relative aspect-[5/4] overflow-hidden rounded-[14px]">
                                <Image
                                    src={post.data.og_image}
                                    alt={post.data.title}
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
