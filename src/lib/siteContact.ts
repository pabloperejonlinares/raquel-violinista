const phone = "+34 691 196 341";
const email = "raquelreinaviolinista@gmail.com";
const phoneDigits = phone.replaceAll(/\s/g, "");

export const siteContact = {
  phone,
  phoneHref: `tel:${phoneDigits}`,
  whatsappHref: `https://wa.me/${phoneDigits.replace("+", "")}`,
  email,
  emailHref: `mailto:${email}`,
  location: "Sevilla",
} as const;
