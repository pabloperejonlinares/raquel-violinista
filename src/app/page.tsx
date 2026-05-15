import { AboutSection } from "@/components/AboutSection";
import { EventTypesSection } from "@/components/EventTypesSection";
import { Hero } from "@/components/Hero";
import { SitePageLayout } from "@/components/SitePageLayout";

export default function Home() {
  return (
    <SitePageLayout>
      <Hero />
      <EventTypesSection />
      <AboutSection />
    </SitePageLayout>
  );
}
