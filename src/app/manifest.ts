import type { MetadataRoute } from "next";

import { siteBranding } from "@/lib/siteBranding";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteBranding.title,
    short_name: "Raquel Reina",
    description: `${siteBranding.tagline}. ${siteBranding.slogan}`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "es",
    icons: [
      {
        src: "/raquel-reina-logo-mark-192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/raquel-reina-logo-mark-512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
