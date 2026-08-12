import type { Locale } from "./config";
import type { Dictionary } from "./dictionary";

const dictionaries = {
  en: () => import("@/content/dictionaries/en").then((module) => module.en),
  ru: () => import("@/content/dictionaries/ru").then((module) => module.ru),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
