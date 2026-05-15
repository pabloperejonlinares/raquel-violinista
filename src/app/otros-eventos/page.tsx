import { SitePageLayout } from "@/components/SitePageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otros eventos — en preparación",
  description: "Música para distintos tipos de eventos. Sección en preparación.",
};

export default function OtrosEventosPage() {
  return (
    <SitePageLayout>
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-zinc-900">Otros eventos</h1>
        <p className="mt-4 text-pretty text-zinc-600">
          Fiestas privadas, cenas de empresa y celebraciones. Esta sección se ampliará con ofertas y
          repertorios.
        </p>
      </section>
    </SitePageLayout>
  );
}
