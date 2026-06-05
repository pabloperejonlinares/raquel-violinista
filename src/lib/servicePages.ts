import { siteBranding } from "@/lib/siteBranding";
import { siteContact } from "@/lib/siteContact";

export type ServiceFeature = {
  title: string;
  text: string;
  tone: "bg-violet-50" | "bg-rose-50" | "bg-fuchsia-50";
};

export type ServiceSection = {
  title: string;
  paragraphs: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePageConfig = {
  slug: string;
  path: string;
  metadataTitle: string;
  metadataDescription: string;
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  features: ServiceFeature[];
  faqs: ServiceFaq[];
  relatedLinks: { href: string; label: string }[];
};

const locationPhrase = `en ${siteContact.location} y alrededores`;

export const servicePages = {
  bodas: {
    slug: "bodas",
    path: "/bodas",
    metadataTitle: "Violinista para bodas en Sevilla",
    metadataDescription: `${siteBranding.title}: música de violín en vivo para bodas ${locationPhrase}. Ceremonias sacras y civiles con repertorio adaptado, cóctel y banquete nupcial.`,
    keywords: [
      "violinista bodas sevilla",
      "música boda sevilla",
      "violinista ceremonia boda",
      "música ceremonia civil sevilla",
      "música ceremonia religiosa boda",
      "violinista cóctel boda",
    ],
    heroImage: "/raquel-violinista-bodas.jpg",
    heroImageAlt:
      "Raquel Reina violinista amenizando una boda con música en vivo en Sevilla",
    h1: "Música de violín para bodas en Sevilla",
    intro: `Tu boda merece una banda sonora tan especial como el día. Como violinista profesional ${locationPhrase}, acompaño cada instante con sensibilidad, elegancia y un repertorio pensado para emocionar a vosotros y a vuestros invitados.`,
    sections: [
      {
        title: "Ceremonias sacras y civiles",
        paragraphs: [
          `Amenizo bodas sacras y civiles con un repertorio cuidadosamente adaptado a cada tipo de ceremonia. En una boda religiosa, el violín aporta solemnidad y calma con piezas clásicas, himnos y melodías que respetan el carácter del momento. En una ceremonia civil, la música puede ser más íntima y personal, con canciones románticas, bandas sonoras y temas que hablan de vuestra historia.`,
          `Antes del gran día, hablamos de vuestras preferencias musicales, el orden de la ceremonia y los momentos clave —entrada, interludios, firma o intercambio de anillos y salida— para que cada nota encaje a la perfección.`,
        ],
      },
      {
        title: "Cóctel y banquete de la boda",
        paragraphs: [
          `Si lo deseáis, también puedo continuar la actuación en el cóctel y/o en el banquete de la misma boda. Es una forma maravillosa de mantener la magia musical desde la ceremonia hasta la celebración, creando una atmósfera coherente y llena de emoción.`,
          `En el cóctel, el repertorio suele ser más animado y social; en el banquete, puede acompañar la entrada al salón, momentos especiales o simplemente ambientar la cena con melodías reconocibles que invitan a sonreír y compartir recuerdos.`,
        ],
      },
      {
        title: "Un repertorio que emociona",
        paragraphs: [
          `Desde clásicos atemporales y grandes bandas sonoras hasta éxitos de artistas como Christina Perri, Ed Sheeran, Frank Sinatra, ABBA o Coldplay. Cada interpretación está pensada para despertar emoción y hacer de vuestra boda un recuerdo imborrable.`,
        ],
      },
    ],
    features: [
      {
        title: "Ceremonia a medida",
        text: "Repertorio distinto para bodas sacras y civiles, adaptado a cada rito y momento.",
        tone: "bg-violet-50",
      },
      {
        title: "Cóctel y banquete",
        text: "Posibilidad de ampliar la actuación al cóctel y/o banquete de la misma boda.",
        tone: "bg-rose-50",
      },
      {
        title: "Elegancia en directo",
        text: "Música en vivo que eleva la atmósfera con cercanía y profesionalidad.",
        tone: "bg-fuchsia-50",
      },
    ],
    faqs: [
      {
        question: "¿Tocas en bodas religiosas y civiles en Sevilla?",
        answer: `Sí. Amenizo bodas sacras y civiles en ${siteContact.location} y alrededores, con un repertorio adaptado a cada tipo de ceremonia.`,
      },
      {
        question: "¿Puedes tocar también en el cóctel o banquete?",
        answer:
          "Sí. Puedo continuar la actuación en el cóctel y/o en el banquete de la misma boda si lo deseáis, manteniendo una atmósfera musical coherente durante toda la celebración.",
      },
      {
        question: "¿Te desplazas fuera de Sevilla capital?",
        answer: `Actúo principalmente en ${siteContact.location} y provincia. Consulta también desplazamientos a otras provincias.`,
      },
    ],
    relatedLinks: [
      { href: "/hoteles-restaurantes", label: "Hoteles y restaurantes" },
      { href: "/otros-eventos", label: "Otros eventos" },
    ],
  },
  hotelesRestaurantes: {
    slug: "hoteles-restaurantes",
    path: "/hoteles-restaurantes",
    metadataTitle: "Violinista para hoteles y restaurantes en Sevilla",
    metadataDescription: `${siteBranding.title}: violín en vivo para hoteles y restaurantes ${locationPhrase}. Galas, cenas especiales, bodas en hotel y eventos corporativos con repertorio elegante.`,
    keywords: [
      "violinista hoteles sevilla",
      "violinista restaurantes sevilla",
      "música hotel sevilla",
      "música restaurante sevilla",
      "amenización musical hoteles restaurantes",
      "música en vivo sevilla",
    ],
    heroImage: "/raquel-violinista-hoteles-restaurantes.jpg",
    heroImageAlt:
      "Violinista amenizando un evento en un hotel o restaurante de Sevilla con música en vivo",
    h1: "Música en vivo para hoteles y restaurantes en Sevilla",
    intro: `Hoteles y restaurantes de ${siteContact.location} acogen momentos que merecen una ambientación musical refinada. El violín en directo aporta distinción, calidez y emoción a galas, cenas especiales, cócteles y celebraciones privadas, creando una experiencia memorable para tus invitados.`,
    sections: [
      {
        title: "Hoteles",
        paragraphs: [
          `Colaboro con hoteles y salones de celebraciones para amenizar bodas en hotel, aniversarios, cenas de gala, presentaciones de producto y encuentros empresariales. La música en vivo eleva la percepción del evento y transmite una imagen cuidada y sofisticada.`,
          `Cada propuesta se adapta al espacio, al horario y al tipo de público: desde un cóctel en el vestíbulo hasta una cena en salón privado, siempre con un repertorio elegante y reconocible.`,
        ],
      },
      {
        title: "Restaurantes",
        paragraphs: [
          `En restaurantes, el violín realza la velada sin competir con la conversación ni con la propuesta culinaria. Es ideal para cenas románticas, aniversarios, pedidas de mano, cumpleaños y celebraciones familiares en salones privados.`,
          `Trabajo contigo para diseñar actuaciones acordes al estilo del local, la duración de la cena y el tono de la celebración: desde melodías íntimas hasta temas alegres que todos reconocen.`,
        ],
      },
      {
        title: "Ambiente y repertorio",
        paragraphs: [
          `El violín combina a la perfección con entornos de calidad: aporta presencia y sutileza a la vez. El repertorio incluye clásicos, bandas sonoras y versiones de éxitos que invitan a sonreír, emocionarse y compartir recuerdos.`,
        ],
      },
    ],
    features: [
      {
        title: "Hoteles y salones",
        text: "Galas, cócteles, bodas en hotel y eventos corporativos con imagen premium.",
        tone: "bg-violet-50",
      },
      {
        title: "Restaurantes y cenas",
        text: "Ambiente íntimo y elegante para cenas especiales y celebraciones privadas.",
        tone: "bg-rose-50",
      },
      {
        title: "Profesionalidad",
        text: "Puntualidad, discreción y adaptación al protocolo de cada espacio.",
        tone: "bg-fuchsia-50",
      },
    ],
    faqs: [
      {
        question: "¿Amenizas tanto hoteles como restaurantes en Sevilla?",
        answer: `Sí. Actúo en hoteles, salones de celebraciones y restaurantes de ${siteContact.location} y alrededores, adaptando el repertorio a cada espacio y ocasión.`,
      },
      {
        question: "¿Qué tipo de eventos cubres en hoteles y restaurantes?",
        answer:
          "Galas, cócteles, bodas en hotel, cenas de empresa, presentaciones, aniversarios, pedidas de mano y celebraciones privadas en salones y restaurantes.",
      },
      {
        question: "¿Actúas en Sevilla capital y provincia?",
        answer: `Sí. Trabajo en ${siteContact.location} capital, provincia y alrededores. Consulta desplazamientos a otras zonas.`,
      },
    ],
    relatedLinks: [
      { href: "/bodas", label: "Música para bodas" },
      { href: "/otros-eventos", label: "Otros eventos" },
    ],
  },
  otrosEventos: {
    slug: "otros-eventos",
    path: "/otros-eventos",
    metadataTitle: "Violinista para eventos en Sevilla",
    metadataDescription: `${siteBranding.title}: violín en vivo para eventos privados y corporativos ${locationPhrase}. Cumpleaños, galas, inauguraciones y celebraciones con repertorio a medida.`,
    keywords: [
      "violinista eventos sevilla",
      "música eventos corporativos sevilla",
      "violinista cumpleaños sevilla",
      "música eventos privados sevilla",
      "amenización musical eventos",
    ],
    heroImage: "/raquel-violinista-eventos.jpg",
    heroImageAlt:
      "Raquel Reina violinista en un evento privado con música en vivo en Sevilla",
    h1: "Música de violín para eventos especiales en Sevilla",
    intro: `Cada celebración es única. Como violinista ${locationPhrase}, amenizo cumpleaños, aniversarios, galas, inauguraciones, eventos corporativos y encuentros privados con un repertorio pensado para conectar con quienes lo escuchan.`,
    sections: [
      {
        title: "Eventos privados",
        paragraphs: [
          `Cumpleaños, aniversarios, reuniones familiares o celebraciones íntimas: el violín en directo convierte cualquier espacio en un escenario lleno de emoción. La música se adapta al carácter del evento, ya sea íntimo y emotivo o alegre y festivo.`,
        ],
      },
      {
        title: "Eventos corporativos",
        paragraphs: [
          `Presentaciones de producto, cenas de empresa, ferias, congresos y actos institucionales se benefician de una ambientación musical profesional. El violín transmite distinción y cercanía a la vez, reforzando la imagen de tu marca o entidad.`,
        ],
      },
      {
        title: "Repertorio a medida",
        paragraphs: [
          `Antes de cada actuación, conozco el contexto del evento, el público y los momentos clave para proponer un repertorio acorde. Desde clásicos y bandas sonoras hasta versiones de éxitos actuales y atemporales.`,
        ],
      },
    ],
    features: [
      {
        title: "Versatilidad",
        text: "Desde encuentros íntimos hasta eventos con gran aforo.",
        tone: "bg-violet-50",
      },
      {
        title: "Personalización",
        text: "Repertorio y duración adaptados a cada ocasión y espacio.",
        tone: "bg-rose-50",
      },
      {
        title: "Emoción en directo",
        text: "La música en vivo crea recuerdos que perdurarán mucho después del evento.",
        tone: "bg-fuchsia-50",
      },
    ],
    faqs: [
      {
        question: "¿Qué tipos de eventos amenizas además de bodas?",
        answer:
          "Cumpleaños, aniversarios, galas, inauguraciones, ferias, presentaciones, cenas de empresa y celebraciones privadas en distintos espacios.",
      },
      {
        question: "¿Dónde actúas en Sevilla?",
        answer: `Principalmente en ${siteContact.location} capital, provincia y alrededores. Consulta disponibilidad para otras localidades.`,
      },
    ],
    relatedLinks: [
      { href: "/bodas", label: "Música para bodas" },
      { href: "/hoteles-restaurantes", label: "Hoteles y restaurantes" },
    ],
  },
} as const satisfies Record<string, ServicePageConfig>;

export type ServicePageKey = keyof typeof servicePages;

export function getServicePageMetadata(page: ServicePageConfig) {
  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    keywords: page.keywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url: page.path,
      type: "website" as const,
      locale: "es_ES",
      images: [{ url: page.heroImage, alt: page.heroImageAlt }],
    },
  };
}
