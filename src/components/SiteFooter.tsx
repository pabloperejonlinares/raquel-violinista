"use client";

import { Link } from "@heroui/react";
import NextLink from "next/link";

import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";
import { instagramLinkRel } from "@/lib/instagramSectionContent";
import { mainNavItems } from "@/lib/siteNav";
import { instagramProfile, socialLinks } from "@/lib/siteSocial";

const socialIconMap = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
} as const;

const socialButtonClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-600 text-zinc-200 no-underline hover:border-violet-400 hover:text-violet-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
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
            <h2 className="font-heading text-lg font-semibold text-white">Servicios</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNavItems
                .filter((item) => item.href !== "/")
                .map((item) => (
                  <li key={item.href}>
                    <NextLink
                      href={item.href}
                      className="text-zinc-200 no-underline hover:text-violet-300"
                    >
                      {item.label}
                    </NextLink>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-white">Contacto</h2>
            <ul className="mt-4 space-y-3 text-sm">
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
              Vídeos y fotos de actuaciones en{" "}
              <Link
                href={instagramProfile.href}
                target="_blank"
                rel={instagramLinkRel}
                className="text-zinc-300 no-underline hover:text-violet-300"
              >
                Instagram
              </Link>
              .
            </p>
            <ul className="mt-4 flex list-none flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.id];
                return (
                  <li key={social.id}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel={social.id === "instagram" ? instagramLinkRel : "noopener noreferrer"}
                      className={socialButtonClass}
                      aria-label={social.ariaLabel}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href={siteContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialButtonClass}
                  aria-label="WhatsApp: escribir al 691 196 341"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <p>
            © {new Date().getFullYear()} {siteBranding.title}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
