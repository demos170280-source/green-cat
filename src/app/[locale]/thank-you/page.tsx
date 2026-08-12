import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { UtilityPage } from "@/components/legal/utility-page";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type ThankYouRouteProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: ThankYouRouteProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = await getDictionary(locale);

  return {
    title: `${dictionary.utilityPages.thankYou.eyebrow} — Green Cat`,
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouPage({ params }: ThankYouRouteProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const content = dictionary.utilityPages.thankYou;

  return (
    <UtilityPage
      description={content.description}
      dictionary={dictionary}
      eyebrow={content.eyebrow}
      locale={locale}
      title={content.title}
    />
  );
}
