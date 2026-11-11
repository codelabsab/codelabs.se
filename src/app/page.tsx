import type { Metadata } from "next";
import HomePage from "@/app/components/site/home-page";
import { buildPageMetadata } from "@/app/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Platform engineering, SRE, DevOps and AI engineering consultancy in Stockholm",
  description:
    "Code Labs is a Swedish engineering consultancy in Stockholm focused on platform engineering, SRE and observability, DevOps, cloud infrastructure, internal tooling, and practical AI engineering.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
