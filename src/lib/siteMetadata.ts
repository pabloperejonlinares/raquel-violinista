import type { Metadata } from "next";

import { siteBranding } from "@/lib/siteBranding";

export const defaultOgImage = "/raquel-violinista.webp";

export const defaultOgImageAlt =
  "Raquel Reina Violinista con el violín en exteriores, junto al agua";

const sharedOpenGraph = {
  locale: "es_ES" as const,
  type: "website" as const,
  siteName: siteBranding.title,
};

export const sharedTwitter = {
  card: "summary_large_image" as const,
};

export const sharedRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
};

export function getPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  imageAlt = defaultOgImageAlt,
  keywords,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    robots: sharedRobots,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...sharedOpenGraph,
      title,
      description,
      url: path,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      ...sharedTwitter,
      title,
      description,
      images: [image],
    },
  };
}
