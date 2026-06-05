import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/bodas",
    "/hoteles-restaurantes",
    "/otros-eventos",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
