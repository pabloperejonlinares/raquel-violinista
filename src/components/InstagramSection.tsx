import NextLink from "next/link";

import { InstagramIcon } from "@/components/SocialIcons";
import {
  instagramLinkRel,
  instagramSectionContent,
  type InstagramSectionVariant,
} from "@/lib/instagramSectionContent";
import { instagramProfile } from "@/lib/siteSocial";

const instagramButtonClass =
  "inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-6 py-3 text-sm font-semibold text-white no-underline shadow-md shadow-violet-900/10 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:w-auto";

type InstagramSectionProps = Readonly<{
  variant?: InstagramSectionVariant;
}>;

export function InstagramSection({ variant = "home" }: InstagramSectionProps) {
  const content = instagramSectionContent[variant];
  const headingId = `instagram-heading-${variant}`;

  return (
    <section
      className="px-4 py-10 md:px-6 md:py-12"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200/80 bg-violet-50/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div className="flex items-start gap-3.5">
            <span
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"
              aria-hidden
            >
              <InstagramIcon className="h-4 w-4" />
            </span>
            <div>
              <h2
                id={headingId}
                className="font-heading text-lg font-semibold text-zinc-900 sm:text-xl"
              >
                {content.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                {content.description}
              </p>
            </div>
          </div>
          <NextLink
            href={instagramProfile.href}
            target="_blank"
            rel={instagramLinkRel}
            aria-label={instagramProfile.ariaLabel}
            className={instagramButtonClass}
          >
            <InstagramIcon className="h-5 w-5" />
            Ver en Instagram
          </NextLink>
        </div>
      </div>
    </section>
  );
}
