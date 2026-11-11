import type { Metadata, Viewport } from "next";
import { Anton, JetBrains_Mono, Manrope, Yellowtail } from "next/font/google";
import "./globals.css";
import OpsHud from "@/app/components/site/chrome/OpsHud";
import Footer from "@/app/components/site/chrome/Footer";
import Overlays from "@/app/components/site/chrome/Overlays";
import { missions } from "@/app/components/site/site-data";
import { absoluteUrl, siteConfig } from "@/app/seo";

const defaultTitle = "Code Labs | Platform engineering, SRE, DevOps and AI engineering consultancy in Stockholm";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "%s | Code Labs",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0714",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      logo: absoluteUrl("/assets/logo/codelabs.svg"),
      sameAs: [...siteConfig.socialLinks],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.siteName,
      url: siteConfig.url,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    ...missions.map((mission) => ({
      "@type": "Service",
      "@id": `${siteConfig.url}/#service-${mission.id}`,
      name: mission.title,
      serviceType: mission.title,
      description: mission.briefing,
      areaServed: "Stockholm, Sweden",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
    })),
  ],
};

// Subset choice: å/ä/ö/é are all in `latin`, which covers every name and post
// on the site. Adding `latin-ext` made next/font preload a second file per
// family and pushed mobile LCP past budget (Lighthouse 87 on /blog), so it is
// left out; characters beyond Latin-1 fall back to the system font.
// The mono and script fonts are not preloaded: they never render the LCP element.
const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const script = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yellowtail",
  display: "swap",
  preload: false,
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const mono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${script.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <OpsHud />
        <div id="main" className="pt-16">
          {children}
        </div>
        <Footer />
        <Overlays />
      </body>
    </html>
  );
}
