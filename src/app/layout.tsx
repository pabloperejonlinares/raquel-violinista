import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { SpeculationRules } from "@/components/SpeculationRules";
import { siteBranding } from "@/lib/siteBranding";
import {
  defaultOgImage,
  defaultOgImageAlt,
  sharedRobots,
  sharedTwitter,
} from "@/lib/siteMetadata";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://raquelreinaviolinista.com",
  ),
  title: {
    default: siteBranding.title,
    template: `%s | ${siteBranding.title}`,
  },
  description: `${siteBranding.title}: ${siteBranding.tagline}. Amenización con música en vivo para bodas, hoteles, restaurantes y eventos corporativos o privados. Música para eventos en Sevilla con repertorio a medida.`,
  applicationName: siteBranding.title,
  authors: [{ name: "Raquel Reina" }],
  creator: "Raquel Reina",
  category: "music",
  robots: sharedRobots,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/raquel-reina-logo-mark-192.webp",
        type: "image/webp",
        sizes: "192x192",
      },
      {
        url: "/raquel-reina-logo-mark-512.webp",
        type: "image/webp",
        sizes: "512x512",
      },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-dvh font-sans flex flex-col text-zinc-900"
      >
        <SpeculationRules />
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
