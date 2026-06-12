import type { MetadataRoute } from "next";

import { siteBranding } from "@/lib/siteBranding";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteBranding.title,
    short_name: siteBranding.title,
    description: `${siteBranding.tagline}. ${siteBranding.slogan}`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
    lang: "es",
  };
}
