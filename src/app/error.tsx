"use client";

import NextLink from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
        Algo ha ido mal
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
        Ha ocurrido un error inesperado. Puedes intentarlo de nuevo o volver al
        inicio.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
        >
          Reintentar
        </button>
        <NextLink
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-violet-200 bg-white px-5 py-2.5 text-sm font-medium text-violet-800 no-underline transition-colors hover:bg-violet-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
        >
          Ir al inicio
        </NextLink>
      </div>
    </div>
  );
}
