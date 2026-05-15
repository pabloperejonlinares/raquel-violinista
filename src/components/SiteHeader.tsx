"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { Drawer, Link, useOverlayState } from "@heroui/react";

import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";
import { mainNavItems } from "@/lib/siteNav";

function navItemIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function SiteHeader() {
  const menuState = useOverlayState();
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-foreground flex min-w-0 items-center gap-3 no-underline hover:opacity-90"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-lg font-semibold text-white"
              aria-hidden
            >
              {siteBranding.mark}
            </span>
            <span className="min-w-0 text-left">
              <span className="font-heading text-foreground block text-lg font-semibold">
                {siteBranding.title}
              </span>
              <span className="text-sm text-zinc-500">{siteBranding.tagline}</span>
            </span>
          </Link>
          <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 text-sm text-zinc-600 md:flex lg:gap-8">
            <Link
              href={siteContact.phoneHref}
              className="text-foreground flex min-w-0 items-center gap-2 no-underline hover:text-violet-700"
            >
              <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden />
              <span className="truncate">{siteContact.phone}</span>
            </Link>
            <Link
              href={siteContact.emailHref}
              className="text-foreground flex min-w-0 items-center gap-2 no-underline hover:text-violet-700"
            >
              <MailIcon className="h-4 w-4 shrink-0" aria-hidden />
              <span className="truncate">{siteContact.email}</span>
            </Link>
          </div>
          <Drawer state={menuState}>
            <Drawer.Trigger
              aria-label="Abrir menú de navegación"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-zinc-900 transition-colors hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            >
              <span className="flex w-5 flex-col gap-1" aria-hidden>
                <span className="h-0.5 w-6 bg-current" />
                <span className="h-0.5 w-6 bg-current" />
                <span className="h-0.5 w-6 bg-current" />
              </span>
            </Drawer.Trigger>
            <Drawer.Backdrop isDismissable>
              <Drawer.Content className="max-w-sm" placement="right">
                <Drawer.Dialog>
                  <Drawer.Header className="flex items-center justify-between border-b border-zinc-200 px-1 py-0">
                    <Drawer.Heading className="font-heading px-2 text-lg font-semibold">Menú</Drawer.Heading>
                    <Drawer.CloseTrigger aria-label="Cerrar menú" className="shrink-0" />
                  </Drawer.Header>
                  <Drawer.Body className="px-0 py-0">
                    <nav className="flex flex-col" aria-label="Navegación principal">
                      {mainNavItems.map((item) => {
                        const active = navItemIsActive(pathname, item.href);
                        return (
                          <NextLink
                            key={item.href}
                            href={item.href}
                            onClick={() => menuState.close()}
                            className={[
                              "px-4 py-3.5 text-base no-underline transition-colors",
                              active
                                ? "font-medium text-violet-800 bg-violet-50/90"
                                : "text-zinc-800 hover:bg-zinc-50",
                            ].join(" ")}
                          >
                            {item.label}
                          </NextLink>
                        );
                      })}
                    </nav>
                  </Drawer.Body>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>
        <div className="flex flex-col gap-2 text-sm text-zinc-600 md:hidden">
          <Link
            href={siteContact.phoneHref}
            className="text-foreground flex items-center gap-2 no-underline hover:text-violet-700"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden />
            {siteContact.phone}
          </Link>
          <Link
            href={siteContact.emailHref}
            className="text-foreground flex min-w-0 items-center gap-2 no-underline hover:text-violet-700"
          >
            <MailIcon className="h-4 w-4 shrink-0" aria-hidden />
            <span className="break-all">{siteContact.email}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-4.38-2.4 12.035 12.035 0 0 1-2.4-4.38.75.75 0 0 1 .38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H3.75A2.25 2.25 0 0 0 1.5 4.5v1.5Z"
      />
    </svg>
  );
}

function MailIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.923l-7.5 4.375a2.25 2.25 0 0 1-1.8 0l-7.5-4.375A2.25 2.25 0 0 1 3.75 6.99V6.75" />
    </svg>
  );
}
