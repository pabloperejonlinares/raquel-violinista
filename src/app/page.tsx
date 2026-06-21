import { AboutSection } from "@/components/AboutSection";
import { EventTypesSection } from "@/components/EventTypesSection";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";
import { JsonLd } from "@/components/JsonLd";
import { SitePageLayout } from "@/components/SitePageLayout";
import { siteBranding } from "@/lib/siteBranding";
import { getInstagramSeoPhrase } from "@/lib/instagramSectionContent";
import { getPageMetadata } from "@/lib/siteMetadata";
import { instagramProfile } from "@/lib/siteSocial";
import { getHomeStructuredData } from "@/lib/siteStructuredData";

import type { Metadata } from "next";

const homeDescription = `${siteBranding.title}: ${siteBranding.tagline}. Amenización con música en vivo para bodas, hoteles, restaurantes y eventos corporativos o privados. ${getInstagramSeoPhrase()} (${instagramProfile.handle}).`;

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
      <InstagramSection variant="home" />
      <AboutSection />
    </SitePageLayout>
  );
}
