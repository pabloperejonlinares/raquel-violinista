const phone = "+34 691 196 341";
const email = "raquelreinaviolinista@gmail.com";

export const siteContact = {
  phone,
  phoneHref: `tel:${phone.replaceAll(/\s/g, "")}`,
  email,
  emailHref: `mailto:${email}`,
  location: "Sevilla, España",
} as const;
