import type { Dictionary } from "@/i18n/dictionary";
import { ButtonLink } from "@/components/ui";
import { primaryContactUrl } from "@/content/social-links";

type HeroProps = {
  dictionary: Dictionary;
};

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className="hero spacing-inline-page" aria-labelledby="hero-title">
      <p className="hero-kicker">
        <span>{dictionary.brand.name}</span>
        <span aria-hidden="true">—</span>
        <span>{dictionary.brand.descriptor}</span>
      </p>

      <h1 className="hero-title" id="hero-title">
        <span className="hero-title-desktop">{dictionary.hero.headline}</span>
        <span className="hero-title-mobile">
          {dictionary.hero.mobileHeadlineLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < dictionary.hero.mobileHeadlineLines.length - 1 ? " " : null}
            </span>
          ))}
        </span>
      </h1>

      <div className="hero-footer">
        <div className="discipline-connection" aria-label={dictionary.hero.connectionLabel}>
          <span>{dictionary.hero.designDiscipline}</span>
          <span className="connection-track" aria-hidden="true">
            <span className="connection-signal" />
          </span>
          <span>{dictionary.hero.developmentDiscipline}</span>
        </div>

        <ButtonLink
          arrow
          className="hero-cta primary-cta"
          href={primaryContactUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          {dictionary.hero.primaryCta}
        </ButtonLink>
      </div>
    </section>
  );
}
