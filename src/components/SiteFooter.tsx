"use client";

import { Link } from "@heroui/react";

import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 text-sm font-semibold text-white"
                aria-hidden
              >
                {siteBranding.mark}
              </span>
              <div>
                <p className="font-heading text-lg font-semibold text-white">
                  {siteBranding.title}
                </p>
                <p className="text-sm text-zinc-400">{siteBranding.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {siteBranding.slogan}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white">Contacto</h2>
            <ul className="mt-4 space-y-3 text-sm" role="list">
              <li>
                <Link
                  href={siteContact.phoneHref}
                  className="text-zinc-200 no-underline hover:text-violet-300"
                >
                  {siteContact.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={siteContact.emailHref}
                  className="text-zinc-200 break-all no-underline hover:text-violet-300"
                >
                  {siteContact.email}
                </Link>
              </li>
              <li className="text-zinc-400">{siteContact.location}</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white">Sígueme</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Frase sobre redes o vídeos. Placeholder.
            </p>
            <ul className="mt-4 flex list-none flex-wrap gap-3" role="list">
              <li>
                <Link
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 text-xs text-zinc-200 no-underline hover:border-violet-400"
                  aria-label="Facebook (enlace boceto)"
                >
                  f
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 text-xs text-zinc-200 no-underline hover:border-violet-400"
                  aria-label="Instagram (enlace boceto)"
                >
                  ig
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 text-xs text-zinc-200 no-underline hover:border-violet-400"
                  aria-label="YouTube (enlace boceto)"
                >
                  yt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <p>
            © {new Date().getFullYear()} {siteBranding.title}. Todos los derechos reservados.
          </p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 sm:mt-0">
            <Link href="#" className="text-zinc-500 no-underline hover:text-violet-300">
              Política de privacidad
            </Link>
            <Link href="#" className="text-zinc-500 no-underline hover:text-violet-300">
              Términos de servicio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
