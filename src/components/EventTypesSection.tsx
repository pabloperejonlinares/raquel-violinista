"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import { eventTypes } from "@/lib/eventTypes";
import { EventTypeIcon } from "./EventTypeCardIcons";

export function EventTypesSection() {
  return (
    <section className="bg-zinc-100/80 px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Tipos de eventos
        </h2>
        <ul className="mt-10 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((item) => (
            <li key={item.id}>
              <Card className="h-full overflow-hidden p-0 shadow-sm ring-1 ring-zinc-200/80">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/90 bg-white shadow-md">
                    <EventTypeIcon name={item.icon} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
