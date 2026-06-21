export const mainNavItems = [
  { href: "/", label: "Inicio" },
  { href: "/bodas", label: "Bodas" },
  { href: "/hoteles-restaurantes", label: "Hoteles y Restaurantes" },
  { href: "/otros-eventos", label: "Otros Eventos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/galeria", label: "Galería" },
] as const;

export type MainNavItem = (typeof mainNavItems)[number];
