export const locales = ["en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const requestedLanguages = acceptLanguage
    .toLowerCase()
    .split(",")
    .map((entry) => entry.trim().split(";")[0]);

  for (const language of requestedLanguages) {
    const locale = locales.find(
      (candidate) =>
        language === candidate || language.startsWith(`${candidate}-`),
    );

    if (locale) {
      return locale;
    }
  }

  return defaultLocale;
}
