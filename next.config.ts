import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
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
    ];
  },
};

export default nextConfig;
