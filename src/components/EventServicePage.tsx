import { Card, Link } from "@heroui/react";
import Image from "next/image";
import NextLink from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { InstagramSection } from "@/components/InstagramSection";
import { MapPinIcon } from "@/components/SocialIcons";
import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";
import type { ServicePageConfig } from "@/lib/servicePages";
import { getPersonSameAsLinks } from "@/lib/siteSocial";
import { absoluteUrl } from "@/lib/siteUrl";
import { Fragment } from "react/jsx-runtime";

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2";

type EventServicePageProps = Readonly<{
  page: ServicePageConfig;
}>;

export function EventServicePage({ page }: EventServicePageProps) {
  const pageUrl = absoluteUrl(page.path);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.h1,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.metadataDescription,
      url: pageUrl,
      image: absoluteUrl(page.heroImage),
      provider: {
        "@type": "Person",
        name: siteBranding.title,
        sameAs: getPersonSameAsLinks(),
        areaServed: {
          "@type": "City",
          name: siteContact.location,
        },
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: `${siteContact.location}, España`,
      },
      serviceType: "Amenización musical con violín en vivo",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="relative isolate min-h-[40vh] w-full overflow-hidden md:min-h-[48vh] lg:mx-auto lg:max-w-6xl lg:min-h-[52vh] lg:rounded-2xl">
        <Image
          src={page.heroImage}
          alt={page.heroImageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 72rem"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/45 to-zinc-950/20"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[40vh] flex-col justify-end p-5 pb-8 md:min-h-[48vh] md:p-10 lg:min-h-[52vh]">
          <nav aria-label="Ruta de navegación" className="mb-4 text-sm text-white/75">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <NextLink href="/" className="text-white/80 no-underline hover:text-white">
                  Inicio
                </NextLink>
              </li>
              <li aria-hidden className="text-white/50">
                /
              </li>
              <li className="text-white" aria-current="page">
                {page.h1}
              </li>
            </ol>
          </nav>
          <h1 className="font-heading max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            {page.h1}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-12">
            <div>
              <div className="space-y-10">
                {page.sections.map((section) => (
                  <article key={section.title}>
                    <h2 className="font-heading text-xl font-bold text-zinc-900 sm:text-2xl">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {section.paragraphs.map((paragraph) => (
                        <Fragment key={paragraph.text.slice(0, 40)}>
                        {paragraph.subtitle ? (
                          <h3 key={paragraph.subtitle} className="font-heading text-lg font-semibold text-zinc-900 sm:text-xl">
                            {paragraph.subtitle}
                          </h3>
                        ) : null}
                        <p key={paragraph.text.slice(0, 40)}>{paragraph.text}</p>
                        </Fragment>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <ul className="mt-10 space-y-3">
                {page.features.map((feature) => (
                  <li key={feature.title}>
                    <Card
                      className={`${feature.tone} border-0 p-4 ring-1 ring-violet-100/80 shadow-none`}
                    >
                      <h3 className="text-base font-medium text-zinc-900">{feature.title}</h3>
                      <p className="mt-1 text-sm text-zinc-600">{feature.text}</p>
                    </Card>
                  </li>
                ))}
              </ul>

              {page.faqs.length > 0 ? (
                <div className="mt-12">
                  <h2 className="font-heading text-xl font-semibold text-zinc-900 sm:text-2xl">
                    Preguntas frecuentes
                  </h2>
                  <dl className="mt-6 space-y-6">
                    {page.faqs.map((faq) => (
                      <div key={faq.question}>
                        <dt className="text-base font-medium text-zinc-900">{faq.question}</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                          {faq.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-8">
              <Card className="border-0 bg-violet-50 p-5 ring-1 ring-violet-100/80 shadow-none">
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"
                    aria-hidden
                  >
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-zinc-900">
                      Zona de actuación
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {siteBranding.title} ameniza eventos en{" "}
                      <strong className="font-medium text-zinc-900">{siteContact.location}</strong>{" "}
                      y alrededores. Consulta también desplazamientos a otras provincias.
                    </p>
                    <p className="mt-3 text-base font-medium text-zinc-900">
                      {siteContact.location}, España
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-0 bg-white p-5 ring-1 ring-zinc-200/80 shadow-sm">
                <h2 className="font-heading text-lg font-semibold text-zinc-900">
                  ¿Organizas un evento?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Cuéntame la fecha, el lugar y el tipo de celebración. Te responderé con
                  disponibilidad y presupuesto sin compromiso.
                </p>
                <div className="mt-4">
                  <Link href="/contacto" className={primaryButtonClass}>
                    Solicitar información
                  </Link>
                </div>
              </Card>

              {page.relatedLinks.length > 0 ? (
                <Card className="border-0 bg-zinc-50 p-5 ring-1 ring-zinc-200/80 shadow-none">
                  <h2 className="font-heading text-base font-semibold text-zinc-900">
                    También te puede interesar
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {page.relatedLinks.map((link) => (
                      <li key={link.href}>
                        <NextLink
                          href={link.href}
                          className="text-violet-800 no-underline hover:text-violet-950 hover:underline"
                        >
                          {link.label}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </Card>
              ) : null}
            </aside>
          </div>
        </div>
      </section>
      <InstagramSection variant={page.instagramVariant} />
    </>
  );
}
