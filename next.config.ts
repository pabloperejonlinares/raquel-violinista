import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/hoteles",
        destination: "/hoteles-restaurantes",
        permanent: true,
      },
      {
        source: "/restaurantes",
        destination: "/hoteles-restaurantes",
        permanent: true,
      },
      {
        source: "/raquel-violinista.JPEG",
        destination: "/raquel-violinista.webp",
        permanent: true,
      },
      {
        source: "/raquel-violinista-bodas.jpg",
        destination: "/raquel-violinista-bodas.webp",
        permanent: true,
      },
      {
        source: "/raquel-violinista-eventos.jpg",
        destination: "/raquel-violinista-eventos.webp",
        permanent: true,
      },
      {
        source: "/raquel-violinista-hoteles-restaurantes.jpg",
        destination: "/raquel-violinista-hoteles-restaurantes.webp",
        permanent: true,
      },
      {
        source: "/IMG_4126.JPEG",
        destination: "/raquel-reina-contacto.webp",
        permanent: true,
      },
      {
        source: "/IMG_4117.JPEG",
        destination: "/raquel-violinista-extra.webp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
