import type { Metadata } from "next";
import TeamPage from "@/app/components/site/team-page";
import { buildPageMetadata } from "@/app/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Team",
  description:
    "Meet the Code Labs team in Stockholm: platform, SRE, DevOps, AI and full-stack engineers, plus the recruiting and people side that makes the consultancy sustainable over time.",
  path: "/team",
});

export default function TeamRoute() {
  return <TeamPage />;
}
