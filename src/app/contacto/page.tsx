import { ContactSection } from "@/components/ContactSection";
import { SitePageLayout } from "@/components/SitePageLayout";
import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta con ${siteBranding.title} para bodas, hoteles, restaurantes y eventos en ${siteContact.location}. Teléfono, WhatsApp, email y redes sociales.`,
};

export default function ContactoPage() {
  return (
    <SitePageLayout>
      <ContactSection />
    </SitePageLayout>
  );
}
