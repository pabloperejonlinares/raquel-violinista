export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://raquelreinaviolinista.com";

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
