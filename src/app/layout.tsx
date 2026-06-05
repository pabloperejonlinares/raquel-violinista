import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import {
  defaultOgImage,
  defaultOgImageAlt,
  sharedTwitter,
} from "@/lib/siteMetadata";
import { siteBranding } from "@/lib/siteBranding";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://raquelreinaviolinista.com"),
  title: {
    default: siteBranding.title,
    template: `%s | ${siteBranding.title}`,
  },
  description: `${siteBranding.title}: ${siteBranding.tagline}. Amenización con música en vivo para bodas, hoteles, restaurantes y eventos corporativos o privados. Música para eventos en Sevilla con repertorio a medida.`,
  openGraph: {
    locale: "es_ES",
    type: "website",
    siteName: siteBranding.title,
    images: [{ url: defaultOgImage, alt: defaultOgImageAlt }],
  },
  twitter: sharedTwitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-dvh font-sans flex flex-col text-zinc-900">{children}</body>
    </html>
  );
}
