import type { Metadata } from "next";

export const siteConfig = {
  name: "Code Labs",
  siteName: "Code Labs",
  url: "https://www.codelabs.se",
  locale: "en_SE",
  description:
    "Code Labs is a Swedish consultancy focused on platform engineering, DevOps, cloud infrastructure, internal tooling, reliability, and modern delivery work.",
  defaultOgImage: "/assets/entourage.jpeg",
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
