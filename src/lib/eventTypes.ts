export type EventTypeItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Tailwind object-position classes, e.g. `object-[center_60%]` */
  imageObjectClass?: string;
  href: string;
  icon: "heart" | "briefcase" | "notes" | "users" | "glass" | "star";
};

export const eventTypes: EventTypeItem[] = [
  {
    id: "1",
    title: "Bodas",
    description: "Ceremonias sacras y civiles, cóctel y banquete con repertorio adaptado.",
    image: "/raquel-violinista-bodas.webp",
    imageAlt:
      "Raquel Reina violinista amenizando una boda con música en vivo en Sevilla",
    imageObjectClass: "object-[center_72%]",
    href: "/bodas",
    icon: "heart",
  },
  {
    id: "2",
    title: "Hoteles",
    description: "Galas, cócteles y eventos en hoteles y salones.",
    image: "/raquel-violinista-hoeteles.webp",
    imageAlt:
      "Raquel Reina violinista amenizando un evento en un hotel de Sevilla con música en vivo",
    href: "/hoteles",
    icon: "briefcase",
  },
  {
    id: "3",
    title: "Restaurantes",
    description: "Cenas especiales y celebraciones en restaurantes.",
    image: "/raquel-violinista-hoteles-restaurantes.webp",
    imageAlt:
      "Raquel Reina violinista amenizando una cena en un restaurante de Sevilla con música en vivo",
    href: "/restaurantes",
    icon: "glass",
  },
  {
    id: "4",
    title: "Otros Eventos",
    description: "Eventos privados, corporativos e inauguraciones en Sevilla.",
    image: "/raquel-violinista-eventos.webp",
    imageAlt:
      "Raquel Reina violinista en un evento especial con música en vivo en Sevilla",
    href: "/otros-eventos",
    icon: "notes",
  },
];
