export type SocialLink = {
  label: "Telegram" | "MAX" | "VK";
  href: string;
};

export type FooterContactLink = SocialLink | {
  label: "EMAIL";
  href: string;
};

export const primaryContactUrl =
  "https://e.mail.ru/compose?to=demos80@list.ru";

export const socialLinks = [
  {
    label: "Telegram",
    href: "https://t.me/@DmitryCoolll",
  },
  {
    label: "MAX",
    href: "https://max.ru/u/f9LHodD0cOJVX-qEAhlI8vQqIaYhPsSEStWASsUbChFjrrEDqr9eyEajkgw",
  },
  {
    label: "VK",
    href: "https://vk.ru/dkulyukin",
  },
] as const satisfies readonly SocialLink[];

export const footerContactLinks = [
  {
    label: "EMAIL",
    href: primaryContactUrl,
  },
  ...socialLinks,
] as const satisfies readonly FooterContactLink[];
