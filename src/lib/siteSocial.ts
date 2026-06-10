import { siteContact } from "@/lib/siteContact";

export const instagramProfile = {
  id: "instagram",
  label: "Instagram",
  handle: "@raquelreina.violinista",
  href: "https://www.instagram.com/raquelreina.violinista/",
  ariaLabel: "Instagram: @raquelreina.violinista",
} as const;

export const socialLinks = [
  instagramProfile,
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@raquelreina.violinista",
    href: "https://www.tiktok.com/@raquelreina.violinista",
    ariaLabel: "TikTok: @raquelreina.violinista",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];

export function getPersonSameAsLinks() {
  return [...socialLinks.map((social) => social.href), siteContact.whatsappHref];
}
