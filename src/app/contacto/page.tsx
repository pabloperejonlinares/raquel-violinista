import { ContactSection } from "@/components/ContactSection";
import { JsonLd } from "@/components/JsonLd";
import { SitePageLayout } from "@/components/SitePageLayout";
import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";
import { getPageMetadata } from "@/lib/siteMetadata";
import { getContactStructuredData } from "@/lib/siteStructuredData";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata({
  title: "Contacto",
  description: `Contacta con ${siteBranding.title} para bodas, hoteles, restaurantes y eventos en ${siteContact.location}. Teléfono, WhatsApp, email y redes sociales.`,
  path: "/contacto",
  image: "/IMG_4126.JPEG",
  imageAlt: "Raquel Reina con el violín en un entorno natural",
});

export default function ContactoPage() {
  return (
    <SitePageLayout>
      <JsonLd data={getContactStructuredData()} />
      <ContactSection />
    </SitePageLayout>
  );
}
