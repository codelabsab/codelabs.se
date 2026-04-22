import type { Metadata } from "next";
import TeamPage from "@/app/components/site/team-page";
import { buildPageMetadata } from "@/app/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Team",
  description:
    "Meet the Code Labs team across platform engineering, reliability, product work, recruiting, and the human side that makes the consultancy feel sustainable over time.",
  path: "/team",
  image: "/assets/team/mimmi-penny.jpg",
});

export default function TeamRoute() {
  return <TeamPage />;
}
