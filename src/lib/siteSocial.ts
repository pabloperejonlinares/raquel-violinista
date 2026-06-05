export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@raquelreina.violinista",
    href: "https://www.instagram.com/raquelreina.violinista/",
    ariaLabel: "Instagram: @raquelreina.violinista",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@raquelreina.violinista",
    href: "https://www.tiktok.com/@raquelreina.violinista",
    ariaLabel: "TikTok: @raquelreina.violinista",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];
