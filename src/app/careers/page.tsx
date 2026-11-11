import type { Metadata } from "next";
import CareersPage from "@/app/components/site/careers-page";
import { buildPageMetadata } from "@/app/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Careers at Code Labs in Stockholm for SRE, platform, DevOps and AI engineers who want broader technical exposure, hands-on work, and a company that still feels close.",
  path: "/careers",
});

export default function Career() {
  return <CareersPage />;
}
