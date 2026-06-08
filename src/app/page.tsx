import { AboutSection } from "@/components/AboutSection";
import { EventTypesSection } from "@/components/EventTypesSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SitePageLayout } from "@/components/SitePageLayout";
import { siteBranding } from "@/lib/siteBranding";
import { getPageMetadata } from "@/lib/siteMetadata";
import { getHomeStructuredData } from "@/lib/siteStructuredData";

import type { Metadata } from "next";

const homeDescription = `${siteBranding.title}: ${siteBranding.tagline}. Amenización con música en vivo para bodas, hoteles, restaurantes y eventos corporativos o privados.`;

export const metadata: Metadata = getPageMetadata({
  title: siteBranding.tagline,
  description: homeDescription,
  path: "/",
});

export default function Home() {
  return (
    <SitePageLayout>
      <JsonLd data={getHomeStructuredData()} />
      <Hero />
      <EventTypesSection />
      <AboutSection />
    </SitePageLayout>
  );
}
