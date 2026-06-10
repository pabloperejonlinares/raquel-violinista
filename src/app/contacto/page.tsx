import { ContactSection } from "@/components/ContactSection";
import { InstagramSection } from "@/components/InstagramSection";
import { JsonLd } from "@/components/JsonLd";
import { SitePageLayout } from "@/components/SitePageLayout";
import { getInstagramSeoPhrase } from "@/lib/instagramSectionContent";
import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";
import { instagramProfile } from "@/lib/siteSocial";
import { getPageMetadata } from "@/lib/siteMetadata";
import { getContactStructuredData } from "@/lib/siteStructuredData";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata({
  title: "Contacto",
  description: `Contacta con ${siteBranding.title} para bodas, hoteles, restaurantes y eventos en ${siteContact.location}. Teléfono, WhatsApp y email. ${getInstagramSeoPhrase()} (${instagramProfile.handle}).`,
  path: "/contacto",
  image: "/IMG_4126.JPEG",
  imageAlt: "Raquel Reina con el violín en un entorno natural",
});

export default function ContactoPage() {
  return (
    <SitePageLayout>
      <JsonLd data={getContactStructuredData()} />
      <ContactSection />
      <InstagramSection variant="contacto" />
    </SitePageLayout>
  );
}
