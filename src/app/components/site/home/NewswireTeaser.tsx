import Link from "next/link";
import getPostMetadata from "@/app/components/Blog/getPostMetadata";
import { NewsCard } from "@/app/components/site/cards";
import { SectionHeading } from "@/app/components/site/ui";

export default function NewswireTeaser() {
  const posts = getPostMetadata();
  const tech = posts.filter((post) => post.kind === "tech").slice(0, 2);
  const life = posts.filter((post) => post.kind === "life").slice(0, 2);
  return (
    <section id="newswire" className="section section-night">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Blog · tech posts and crew life"
            script="From the"
            title="Newswire"
            description="Conference notes, open source, hackathons and the dinners in between. Proof of life."
          />
          <Link href="/blog" className="btn-hud reveal">
            All stories
          </Link>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[tech[0], life[0], tech[1], life[1]].filter(Boolean).map((post) => (
            <li key={post.slug} className="reveal">
              <NewsCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
