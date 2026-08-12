import Link from "next/link";

import { ServicePageShell } from "@/components/layout/service-page-shell";
import { AccentSquare } from "@/components/ui";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

type LegalContent = Dictionary["utilityPages"]["privacy"];

type LegalPageProps = {
  content: LegalContent;
  dictionary: Dictionary;
  locale: Locale;
};

export function LegalPage({ content, dictionary, locale }: LegalPageProps) {
  const utility = dictionary.utilityPages;

  return (
    <ServicePageShell dictionary={dictionary} locale={locale}>
      <article className="legal-page spacing-inline-page">
        <header className="legal-page-header">
          <p className="utility-kicker">
            <AccentSquare className="utility-accent-square" />
            {utility.draftLabel}
          </p>
          <h1>{content.title}</h1>
          <p className="legal-page-lead">{content.description}</p>
          <p className="legal-draft-note">{utility.missingInformation}</p>
        </header>

        <div className="legal-copy">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <Link className="utility-home-link" href={`/${locale}`}>
          {utility.backHome} <span aria-hidden="true">→</span>
        </Link>
      </article>
    </ServicePageShell>
  );
}
