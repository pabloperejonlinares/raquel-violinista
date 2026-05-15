"use client";

import { Link } from "@heroui/react";

export function HelpFab() {
  return (
    <Link
      href="#"
      className="text-foreground fixed bottom-5 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white no-underline shadow-md sm:bottom-8 sm:right-6"
      aria-label="Ayuda o contacto (boceto; sin destino aún)"
    >
      <span className="text-base font-medium">?</span>
    </Link>
  );
}
