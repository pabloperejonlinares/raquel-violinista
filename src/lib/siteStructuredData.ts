import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";
import { getPersonSameAsLinks } from "@/lib/siteSocial";
import { absoluteUrl } from "@/lib/siteUrl";

export function getHomeStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteBranding.title,
      url: absoluteUrl("/"),
      description: `${siteBranding.tagline}. ${siteBranding.slogan}`,
      inLanguage: "es-ES",
      publisher: {
        "@type": "Organization",
        name: siteBranding.title,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/raquel-reina-logo-mark-512.webp"),
          width: 512,
          height: 512,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Raquel Reina",
      alternateName: siteBranding.title,
      url: absoluteUrl("/"),
      image: absoluteUrl("/raquel-violinista.webp"),
      jobTitle: "Violinista profesional",
      description: siteBranding.tagline,
      areaServed: {
        "@type": "City",
        name: siteContact.location,
      },
      sameAs: getPersonSameAsLinks(),
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteBranding.title,
      url: absoluteUrl("/"),
      image: absoluteUrl("/raquel-violinista.webp"),
      logo: absoluteUrl("/raquel-reina-logo-mark-512.webp"),
      description: `${siteBranding.tagline}. Amenización con violín en vivo para bodas, hoteles, restaurantes y eventos en Sevilla.`,
      areaServed: `${siteContact.location}, España`,
      telephone: siteContact.phone,
      email: siteContact.email,
      sameAs: getPersonSameAsLinks(),
    },
  ];
}

export function getContactStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: `Contacto | ${siteBranding.title}`,
      url: absoluteUrl("/contacto"),
      description: `Contacta con ${siteBranding.title} para eventos en ${siteContact.location}.`,
      mainEntity: {
        "@type": "Person",
        name: "Raquel Reina",
        telephone: siteContact.phone,
        email: siteContact.email,
        url: absoluteUrl("/"),
        sameAs: getPersonSameAsLinks(),
      },
    },
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
          name: "Contacto",
          item: absoluteUrl("/contacto"),
        },
      ],
    },
  ];
}
