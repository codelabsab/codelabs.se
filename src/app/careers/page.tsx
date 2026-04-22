import type { Metadata } from "next";
import CareersPage from "@/app/components/site/careers-page";
import { buildPageMetadata } from "@/app/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Explore careers at Code Labs for engineers who want broader technical exposure, hands-on work, and a company that still feels close.",
  path: "/careers",
  image: "/assets/blogg/kubecon26/nvidia_kubecon.webp",
});

export default function Career() {
  return <CareersPage />;
}
