import { SitePageLayout } from "@/components/SitePageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bodas — en preparación",
  description: "Música para tu boda. Sección en preparación.",
};

export default function BodasPage() {
  return (
    <SitePageLayout>
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-zinc-900">Bodas</h1>
        <p className="mt-4 text-pretty text-zinc-600">
          Aquí reuniremos toda la información y propuestas para bodas. Pronto podrás verla completa.
        </p>
      </section>
    </SitePageLayout>
  );
}
