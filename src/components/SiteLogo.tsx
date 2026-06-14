import Image from "next/image";

import { siteBranding } from "@/lib/siteBranding";

type SiteLogoProps = Readonly<{
  variant?: "full" | "mark";
  className?: string;
  priority?: boolean;
}>;

const logoDimensions = {
  full: { width: 400, height: 468 },
  mark: { width: 512, height: 512 },
} as const;

export function SiteLogo({
  variant = "full",
  className,
  priority = false,
}: SiteLogoProps) {
  const src =
    variant === "full" ? siteBranding.logoSrc : siteBranding.logoMarkSrc;
  const { width, height } = logoDimensions[variant];

  return (
    <Image
      src={src}
      alt={siteBranding.logoAlt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
