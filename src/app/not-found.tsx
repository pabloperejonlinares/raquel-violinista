import NextLink from "next/link";

import { SitePageLayout } from "@/components/SitePageLayout";

export default function NotFound() {
  return (
    <SitePageLayout>
      <section className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-sm font-medium text-violet-700">404</p>
        <h1 className="font-heading mt-2 text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Página no encontrada
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
          La página que buscas no existe o ha sido movida. Puedes volver al inicio
          o contactar conmigo para tu evento.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <NextLink
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
          >
            Ir al inicio
          </NextLink>
          <NextLink
            href="/contacto"
            className="inline-flex items-center justify-center rounded-lg border border-violet-200 bg-white px-5 py-2.5 text-sm font-medium text-violet-800 no-underline transition-colors hover:bg-violet-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
          >
            Contacto
          </NextLink>
        </div>
      </section>
    </SitePageLayout>
  );
}
