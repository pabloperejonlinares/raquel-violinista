import GalerySection from "@/components/GalerySection";
import { SitePageLayout } from "@/components/SitePageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería | Raquel Reina Violinista",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GaleriaPage() {
  return (
    <SitePageLayout>
      <GalerySection />
    </SitePageLayout>
  );
}
