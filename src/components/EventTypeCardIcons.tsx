import type { ReactNode } from "react";
import type { EventTypeItem } from "@/lib/eventTypes";

const iconMap: Record<EventTypeItem["icon"], (props: { className?: string }) => ReactNode> = {
  heart: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  briefcase: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-1.5L18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L6.5 12H5a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm-2 6H6v1h12V8H8a2 2 0 0 0-2-2z" />
    </svg>
  ),
  notes: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3v9.28c-.47-.17-.98-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
    </svg>
  ),
  users: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
  glass: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 2l1.2 4h9.6L18 2H6zm.9 6-1.33 4.04A1 1 0 0 0 6.5 12h.55l.95 5H6v2h12v-2h-2l.95-5h.5a1 1 0 0 0 .95-1.3L16.1 8H6.9z" />
    </svg>
  ),
  star: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
};

export function EventTypeIcon({ name }: Readonly<{ name: EventTypeItem["icon"] }>) {
  const Cmp = iconMap[name];
  return <Cmp className="h-5 w-5 text-violet-600" />;
}
