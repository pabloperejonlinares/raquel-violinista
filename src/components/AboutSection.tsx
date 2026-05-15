"use client";

import { Card } from "@heroui/react";

const features = [
  {
    title: "Repertorio personalizado",
    text: "Música adaptada a cada evento y a cada pareja.",
    tone: "bg-violet-50" as const,
  },
  {
    title: "Elegancia y emoción",
    text: "El violín crea una atmósfera única y sofisticada.",
    tone: "bg-rose-50" as const,
  },
  {
    title: "Eventos inolvidables",
    text: "Actuaciones cuidadas para acompañar momentos especiales.",
    tone: "bg-fuchsia-50" as const,
  },
];

export function AboutSection() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16" id="sobre-mi">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:text-3xl">
              Sobre mí
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 sm:text-base text-justify">
              <p>
                La música ha sido siempre una parte esencial de mi vida, y a través del violín disfruto creando momentos únicos y emocionantes en bodas, hoteles, restaurantes y eventos especiales.
                Cada actuación está cuidada al detalle para aportar una atmósfera elegante, cercana y llena de sensibilidad.
              </p>
              <p>
                Mi repertorio combina música clásica con versiones actuales, adaptándome al estilo de cada celebración para que cada momento tenga una banda sonora especial y memorable.
              </p>
              <p>
                Detrás de cada interpretación hay pasión, dedicación y mucho cuidado por los detalles.
                Mi objetivo es que cada persona recuerde no solo la música, sino también la emoción que sintió al escucharla en directo.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f.title}>
                  <Card
                    className={`${f.tone} border-0 p-4 ring-1 ring-violet-100/80 shadow-none`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs text-white"
                        aria-hidden
                      >
                        i
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-zinc-900">
                          {f.title}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600">{f.text}</p>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
