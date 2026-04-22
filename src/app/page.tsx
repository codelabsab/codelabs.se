import type { Metadata } from "next";
import HomePage from "@/app/components/site/home-page";
import { buildPageMetadata } from "@/app/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Engineering consultancy in Stockholm",
  description:
    "Code Labs is a Swedish engineering consultancy in Stockholm focused on platform engineering, DevOps, cloud infrastructure, internal tooling, reliability, and modern delivery work.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
