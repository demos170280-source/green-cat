import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";

export const SITE_URL = (
  process.env.SITE_URL ?? "https://www.greencat.site"
).replace(/\/$/, "");

const siteName = "Green Cat";
const openGraphImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Green Cat — Design & Development Studio",
};

const localeSeo = {
  ru: {
    openGraphLocale: "ru_RU",
    alternateLocale: "en_US",
    keywords: [
      "Green Cat",
      "студия дизайна",
      "UX/UI дизайн",
      "frontend разработка",
      "Next.js разработка",
      "дизайн-системы",
    ],
  },
  en: {
    openGraphLocale: "en_US",
    alternateLocale: "ru_RU",
    keywords: [
      "Green Cat",
      "design studio",
      "UX/UI design",
      "frontend development",
      "Next.js development",
      "design systems",
    ],
  },
} as const satisfies Record<
  Locale,
  {
    openGraphLocale: string;
    alternateLocale: string;
    keywords: readonly string[];
  }
>;

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}

function localizedPath(locale: Locale, path: string) {
  const suffix = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `/${locale}${suffix}`;
}

export function createLocalizedMetadata({
  description,
  includeKeywords = false,
  locale,
  path = "/",
  robots,
  title,
}: {
  description: string;
  includeKeywords?: boolean;
  locale: Locale;
  path?: string;
  robots?: Metadata["robots"];
  title: string;
}): Metadata {
  const canonical = absoluteUrl(localizedPath(locale, path));
  const seo = localeSeo[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: includeKeywords ? [...seo.keywords] : undefined,
    alternates: {
      canonical,
      languages: {
        ru: absoluteUrl(localizedPath("ru", path)),
        en: absoluteUrl(localizedPath("en", path)),
        "x-default": absoluteUrl(localizedPath("ru", path)),
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName,
      locale: seo.openGraphLocale,
      alternateLocale: [seo.alternateLocale],
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage.url],
    },
    robots,
  };
}
