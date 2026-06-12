import { Card, Link } from "@heroui/react";
import Image from "next/image";

import {
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";
import { socialLinks } from "@/lib/siteSocial";

const CONTACT_IMAGE = "/raquel-reina-contacto.webp";

const socialIconMap = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
} as const;

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-violet-200 bg-white px-4 py-2.5 text-sm font-medium text-violet-800 no-underline transition-colors hover:bg-violet-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2";

export function ContactSection() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-zinc-100 shadow-sm ring-1 ring-zinc-200/80 lg:sticky lg:top-8">
            <Image
              src={CONTACT_IMAGE}
              alt="Raquel Reina con el violín en un entorno natural"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <h1 className="font-heading text-3xl font-semibold text-zinc-900 sm:text-4xl">
              Contacto
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              ¿Tienes un evento en mente? Cuéntame qué necesitas y te responderé lo antes posible.
              Puedes llamarme, escribirme por WhatsApp o enviarme un correo.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <Card className="border-0 bg-violet-50 p-5 ring-1 ring-violet-100/80 shadow-none">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"
                      aria-hidden
                    >
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-base font-semibold text-zinc-900">Teléfono</h2>
                      <p className="mt-1 text-sm text-zinc-600">
                        Llámame directamente o escríbeme por WhatsApp para consultar disponibilidad
                        y presupuesto.
                      </p>
                      <p className="mt-3 text-lg font-medium text-zinc-900">{siteContact.phone}</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link href={siteContact.phoneHref} className={primaryButtonClass}>
                          <PhoneIcon className="h-4 w-4" />
                          Llamar
                        </Link>
                        <Link
                          href={siteContact.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={secondaryButtonClass}
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </li>

              <li>
                <Card className="border-0 bg-rose-50 p-5 ring-1 ring-rose-100/80 shadow-none">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"
                      aria-hidden
                    >
                      <MailIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-base font-semibold text-zinc-900">Correo electrónico</h2>
                      <p className="mt-1 text-sm text-zinc-600">
                        Si prefieres escribir con calma, envíame un email con los detalles de tu
                        evento: fecha, lugar y tipo de celebración.
                      </p>
                      <p className="mt-3 break-all text-base font-medium text-zinc-900">
                        {siteContact.email}
                      </p>
                      <div className="mt-4">
                        <Link href={siteContact.emailHref} className={primaryButtonClass}>
                          <MailIcon className="h-4 w-4" />
                          Enviar email
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </li>

              <li>
                <Card className="border-0 bg-fuchsia-50 p-5 ring-1 ring-fuchsia-100/80 shadow-none">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"
                      aria-hidden
                    >
                      <MapPinIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-zinc-900">Zona de actuación</h2>
                      <p className="mt-1 text-sm text-zinc-600">
                        {siteBranding.title} ameniza eventos en {siteContact.location} y alrededores.
                        Consulta también desplazamientos a otras provincias.
                      </p>
                      <p className="mt-3 text-base font-medium text-zinc-900">
                        {siteContact.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            </ul>

            <div className="mt-10">
              <h2 className="font-heading text-xl font-semibold text-zinc-900 sm:text-2xl">
                TikTok
              </h2>
              <p className="mt-2 text-sm text-zinc-600 sm:text-base">
                También comparto momentos de mis actuaciones en TikTok.
              </p>
              <ul className="mt-5 list-none">
                {socialLinks
                  .filter((social) => social.id !== "instagram")
                  .map((social) => {
                  const Icon = socialIconMap[social.id];
                  return (
                    <li key={social.id}>
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 no-underline transition-colors hover:border-violet-200 hover:bg-violet-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white transition-colors group-hover:bg-violet-700">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-zinc-900">
                            {social.label}
                          </span>
                          <span className="block truncate text-sm text-zinc-500">
                            {social.handle}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
