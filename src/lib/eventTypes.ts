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
    description: "Descripción corta (placeholder).",
    image: "/IMG_4126.JPEG",
    icon: "heart",
  },
  {
    id: "2",
    title: "Hoteles y Restaurantes",
    description: "Descripción corta (placeholder).",
    image: "/IMG_4117.JPEG",
    icon: "briefcase",
  },
  {
    id: "3",
    title: "Otros Eventos",
    description: "Descripción corta (placeholder).",
    image: "/IMG_4126.JPEG",
    icon: "notes",
  },
];
