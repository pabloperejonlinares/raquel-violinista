import { Text } from "@heroui/react";
import Image from "next/image";

import { siteBranding } from "@/lib/siteBranding";

const HERO_SRC = "/raquel-violinista.webp";

export function Hero() {
  return (
    <section className="relative isolate min-h-[50vh] w-full overflow-hidden md:min-h-[60vh] lg:mx-auto lg:max-w-6xl lg:min-h-[72vh] lg:rounded-2xl">
      <Image
        src={HERO_SRC}
        alt="Raquel Reina Violinista con el violín en exteriores, junto al agua"
        fill
        className="object-cover object-[center_20%] lg:object-top"
        priority
        loading="eager"
        sizes="(max-width: 1024px) 100vw, 72rem"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/40 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[50vh] flex-col justify-end p-5 pb-10 md:min-h-[60vh] md:p-10 lg:min-h-[72vh]">
        <h1 className="font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl md:max-w-2xl md:text-4xl">
          {siteBranding.tagline}
        </h1>
        <Text
          size="sm"
          className="mt-3 max-w-xl text-sm leading-relaxed text-white/90! sm:text-base"
        >
          {siteBranding.slogan}
        </Text>
      </div>
    </section>
  );
}
