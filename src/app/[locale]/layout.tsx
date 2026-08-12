import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales } from "@/i18n/config";

import "@/styles/global.css";
import "@/styles/design-system.css";
import "@/styles/navigation.css";
import "@/styles/hero.css";
import "@/styles/work.css";
import "@/styles/services.css";
import "@/styles/studio.css";
import "@/styles/studio-section.css";
import "@/styles/contact.css";
import "@/styles/footer.css";
import "@/styles/motion.css";
import "@/styles/utility-pages.css";

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = await getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),

    title: dictionary.metadata.title,
    description: dictionary.metadata.description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ru: "/ru",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}