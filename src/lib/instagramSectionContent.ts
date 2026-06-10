export type InstagramSectionVariant =
  | "home"
  | "bodas"
  | "hotelesRestaurantes"
  | "otrosEventos"
  | "contacto";

export const instagramLinkRel = "noopener noreferrer me";

const instagramSectionTitle =
  "Puedes ver contenido de mis eventos en Instagram";

export const instagramSectionContent = {
  home: {
    title: instagramSectionTitle,
    description:
      "En mi perfil comparto vídeos y fotos de bodas, hoteles y celebraciones. Es una buena forma de conocer mi trabajo.",
  },
  bodas: {
    title: instagramSectionTitle,
    description:
      "Hay vídeos y fotos de ceremonias, cócteles y banquetes en Sevilla. Así puedes ver y escuchar cómo suena el violín en una boda real.",
  },
  hotelesRestaurantes: {
    title: instagramSectionTitle,
    description:
      "Comparto vídeos y fotos de galas, cenas especiales y eventos amenizados con violín en hoteles y restaurantes de la zona.",
  },
  otrosEventos: {
    title: instagramSectionTitle,
    description:
      "Encontrarás vídeos y fotos de cumpleaños, galas, eventos corporativos y otras celebraciones amenizadas con violín en directo.",
  },
  contacto: {
    title: instagramSectionTitle,
    description:
      "Echa un vistazo a mi perfil. Así tendrás una idea clara de cómo suena una actuación en directo.",
  },
} as const satisfies Record<
  InstagramSectionVariant,
  { title: string; description: string }
>;

export function getInstagramSeoPhrase() {
  return "Vídeos y fotos de actuaciones en Instagram";
}
