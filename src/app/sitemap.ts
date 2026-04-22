import type { MetadataRoute } from "next";
import getPostMetadata from "@/app/components/Blog/getPostMetadata";
import { siteConfig } from "@/app/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/blog",
    "/careers",
    "/team",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const postEntries = getPostMetadata().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
