export type EventTypeItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: "heart" | "briefcase" | "notes" | "users" | "glass" | "star";
};

export const eventTypes: EventTypeItem[] = [
  {
    id: "1",
    title: "Bodas",
    description: "Amenización de ceremonias sacras o civiles, así como cóctel y banquete.",
    image: "/raquel-violinista-bodas.jpg",
    icon: "heart",
  },
  {
    id: "2",
    title: "Hoteles y Restaurantes",
    description: "Amenización de eventos en hoteles y restaurantes.",
    image: "/raquel-violinista-hoteles-restaurantes.jpg",
    icon: "briefcase",
  },
  {
    id: "3",
    title: "Otros Eventos",
    description: "Amenización de eventos privados y corporativos.",
    image: "/raquel-violinista-eventos.jpg",
    icon: "notes",
  },
];
