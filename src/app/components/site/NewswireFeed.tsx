"use client";

import { useState } from "react";
import type { PostMetadata } from "@/app/components/Blog/PostMetadata";
import { NewsCard } from "@/app/components/site/cards";
import { newswireFilters, type NewswireTag } from "@/app/components/site/site-data";

export default function NewswireFeed({ posts }: { posts: PostMetadata[] }) {
  const [filter, setFilter] = useState<NewswireTag>("all");
  const visible = filter === "all" ? posts : posts.filter((post) => post.tags.includes(filter));

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter stories by tag">
        {newswireFilters.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={filter === tag}
            onClick={() => setFilter(tag)}
            className={`mono border px-3 py-2 text-xs ${
              filter === tag
                ? "border-sunset-pink bg-sunset-pink font-bold text-night-900"
                : "border-white/20 text-ink-100 hover:border-neon-cyan"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
      <p className="mono mt-4 text-xs text-ink-300" aria-live="polite">
        {visible.length} {visible.length === 1 ? "story" : "stories"} on the wire
      </p>
      <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((post, index) => (
          <li key={post.slug}>
            <NewsCard post={post} priority={index < 2} />
          </li>
        ))}
      </ul>
    </>
  );
}
