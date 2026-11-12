import type { Metadata } from "next";

export const siteConfig = {
  name: "Code Labs",
  siteName: "Code Labs",
  url: "https://www.codelabs.se",
  locale: "en_SE",
  description:
    "Code Labs is a Swedish engineering consultancy in Stockholm focused on platform engineering, SRE and observability, DevOps, cloud infrastructure, internal tooling, and practical AI engineering.",
  // JPEG twin of og-default.webp, for scrapers that do not read WebP.
  defaultOgImage: "/assets/stockholm-oncall/og-default.jpg",
  email: "contact@codelabs.se",
  socialLinks: [
    "https://www.linkedin.com/company/code-labs-ab/",
    "https://www.instagram.com/codelabsab/",
    "https://github.com/codelabsab/",
  ],
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

export function absoluteUrl(path: string = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  type = "website",
  publishedTime,
  authors,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Serialize JSON-LD for an inline <script>. JSON.stringify alone does not
 * escape "<", so a title containing "</script>" would close the tag early.
 */
export function jsonLdScript(data: unknown): { __html: string } {
  return {
    __html: JSON.stringify(data)
      .replace(/</g, "\\u003c")
      .replace(/>/g, "\\u003e")
      .replace(/&/g, "\\u0026")
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029"),
  };
}
