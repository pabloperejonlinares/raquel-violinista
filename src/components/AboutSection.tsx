"use client";

import { Card } from "@heroui/react";
import Image from "next/image";

const ABOUT_IMAGE = "/IMG_4117.JPEG";

const features = [
  {
    title: "Punto destacado 1",
    text: "Texto breve de relleno. Sustituir con contenido final.",
    tone: "bg-violet-50" as const,
  },
  {
    title: "Punto destacado 2",
    text: "Texto breve de relleno. Sustituir con contenido final.",
    tone: "bg-rose-50" as const,
  },
  {
    title: "Punto destacado 3",
    text: "Texto breve de relleno. Sustituir con contenido final.",
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
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
              <p>
                Párrafo de ejemplo. Aquí irá un texto de presentación sobre la
                actividad, experiencia o formación. Este contenido es solo un
                boceto.
              </p>
              <p>
                Segundo párrafo: más contexto, estilo o tipo de repertorio.
                Cambiar al 100% en la versión final.
              </p>
              <p>
                Tercer párrafo: cierre o llamada a la acción suave, según
                definas el copy definitivo.
              </p>
            </div>
            <ul className="mt-8 space-y-3" role="list">
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
