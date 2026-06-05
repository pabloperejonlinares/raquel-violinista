export type EventTypeItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  icon: "heart" | "briefcase" | "notes" | "users" | "glass" | "star";
};

export const eventTypes: EventTypeItem[] = [
  {
    id: "1",
    title: "Bodas",
    description: "Ceremonias sacras y civiles, cóctel y banquete con repertorio adaptado.",
    image: "/raquel-violinista-bodas.jpg",
    imageAlt:
      "Raquel Reina violinista amenizando una boda con música en vivo en Sevilla",
    href: "/bodas",
    icon: "heart",
  },
  {
    id: "2",
    title: "Hoteles y Restaurantes",
    description: "Galas, cenas especiales y eventos en hoteles y restaurantes de Sevilla.",
    image: "/raquel-violinista-hoteles-restaurantes.jpg",
    imageAlt:
      "Raquel Reina violinista en un hotel o restaurante de Sevilla con música en vivo",
    href: "/hoteles-restaurantes",
    icon: "briefcase",
  },
  {
    id: "3",
    title: "Otros Eventos",
    description: "Eventos privados, corporativos e inauguraciones en Sevilla.",
    image: "/raquel-violinista-eventos.jpg",
    imageAlt:
      "Raquel Reina violinista en un evento especial con música en vivo en Sevilla",
    href: "/otros-eventos",
    icon: "notes",
  },
];
