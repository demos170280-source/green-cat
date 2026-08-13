import { AccentSquare, ButtonLink } from "@/components/ui";
import { primaryContactUrl } from "@/content/social-links";
import type { Dictionary } from "@/i18n/dictionary";

type PricingProps = {
  dictionary: Dictionary;
};

export function Pricing({ dictionary }: PricingProps) {
  const { pricing } = dictionary;

  return (
    <section
      className="pricing spacing-section"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="pricing-inner spacing-inline-page">
        <header className="pricing-heading spacing-section-heading">
          <p className="pricing-kicker">
            <AccentSquare className="pricing-accent-square" />
            {pricing.label}
          </p>
          <h2 id="pricing-title">
            {pricing.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </header>

        <ol className="pricing-list">
          {pricing.packages.map((item) => (
            <li className="pricing-package" key={item.number}>
              <p className="pricing-package-meta">
                <span>{item.number}</span>
                <span aria-hidden="true">—</span>
                <span>{item.tier}</span>
              </p>
              <h3>
                {item.title.split(" ").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              <p className="pricing-price">{item.price}</p>
              <p className="pricing-description">{item.description}</p>

              <div className="pricing-includes">
                <p>{item.includesLabel}</p>
                <ul>
                  {item.includes.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>

              <p className="pricing-timeline">
                <span>{item.timelineLabel}</span>
                <strong>{item.timeline}</strong>
              </p>
            </li>
          ))}
        </ol>

        <footer className="pricing-footer">
          <p>{pricing.note}</p>
          <ButtonLink
            arrow
            className="pricing-cta primary-cta"
            href={primaryContactUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {pricing.cta}
          </ButtonLink>
        </footer>
      </div>
    </section>
  );
}
