"use client";

import { usePathname } from "next/navigation";

import { UtilityPage } from "@/components/legal/utility-page";
import { en } from "@/content/dictionaries/en";
import { ru } from "@/content/dictionaries/ru";
import { isLocale } from "@/i18n/config";

export function LocalizedNotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale = isLocale(segment) ? segment : "ru";
  const dictionary = locale === "en" ? en : ru;

  return (
    <UtilityPage
      code="404"
      dictionary={dictionary}
      locale={locale}
      title={dictionary.utilityPages.notFound.title}
    />
  );
}
