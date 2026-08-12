import Link from "next/link";

import { ServicePageShell } from "@/components/layout/service-page-shell";
import { AccentSquare } from "@/components/ui";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

type UtilityPageProps = {
  code?: string;
  description?: string;
  dictionary: Dictionary;
  eyebrow?: string;
  locale: Locale;
  title: string;
};

export function UtilityPage({
  code,
  description,
  dictionary,
  eyebrow,
  locale,
  title,
}: UtilityPageProps) {
  return (
    <ServicePageShell dictionary={dictionary} locale={locale}>
      <section className="utility-page spacing-inline-page">
        <div className="utility-page-content">
          <AccentSquare className="utility-page-square" />
          {code ? <p className="utility-code">{code}</p> : null}
          {eyebrow ? <p className="utility-kicker">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {description ? <p className="utility-description">{description}</p> : null}
          <Link className="utility-home-link" href={`/${locale}`}>
            {dictionary.utilityPages.backHome}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </ServicePageShell>
  );
}
