import { SitePageLayout } from "@/components/SitePageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoteles y Restaurantes — en preparación",
  description: "Música para hoteles y restaurantes. Sección en preparación.",
};

export default function HotelesPage() {
  return (
    <SitePageLayout>
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-zinc-900">Hoteles y Restaurantes</h1>
        <p className="mt-4 text-pretty text-zinc-600">
          Página dedicada a música en hoteles y restaurantes. Estamos preparando el contenido.
        </p>
      </section>
    </SitePageLayout>
  );
}
