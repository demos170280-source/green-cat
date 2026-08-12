import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/legal/legal-page";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type LegalRouteProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LegalRouteProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = await getDictionary(locale);

  return {
    title: `${dictionary.utilityPages.consent.title} — Green Cat`,
    description: dictionary.utilityPages.consent.description,
    robots: { index: false, follow: true },
  };
}

export default async function ConsentPage({ params }: LegalRouteProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return (
    <LegalPage
      content={dictionary.utilityPages.consent}
      dictionary={dictionary}
      locale={locale}
    />
  );
}
