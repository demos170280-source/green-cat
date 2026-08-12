import { notFound } from "next/navigation";

import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Pricing } from "@/components/pricing/pricing";
import { Services } from "@/components/services/services";
import { Studio } from "@/components/studio/studio";
import { StudioProcess } from "@/components/studio/studio-process";
import { SelectedWork } from "@/components/work/selected-work";
import { getWorkProjects } from "@/content/work/projects";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const projects = getWorkProjects(locale);

  return (
    <div className="site-shell">
      <ScrollReveal />
      <SiteNavigation dictionary={dictionary} locale={locale} />
      <main id="main-content">
        <Hero dictionary={dictionary} />
        <SelectedWork dictionary={dictionary} projects={projects} />
        <Services dictionary={dictionary} />
        <StudioProcess dictionary={dictionary} />
        <Studio dictionary={dictionary} />
        <Pricing dictionary={dictionary} />
        <Contact dictionary={dictionary} locale={locale} />
      </main>
      <Footer dictionary={dictionary} locale={locale} />
    </div>
  );
}
