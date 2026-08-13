import type { Dictionary } from "@/i18n/dictionary";
import { AccentSquare } from "@/components/ui";

type ServicesProps = {
  dictionary: Dictionary;
};

export function Services({ dictionary }: ServicesProps) {
  return (
    <section
      className="services spacing-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services-inner spacing-inline-page">
        <header className="services-heading spacing-section-heading">
          <p className="services-kicker">
            <AccentSquare className="services-accent-square" />
            {dictionary.services.label}
          </p>
          <h2 id="services-title">{dictionary.services.title}</h2>
        </header>

        <ol className="services-list">
          {dictionary.services.items.map((service) => (
            <li className="service-card" key={service.number}>
              <header className="service-card-heading">
                <span className="service-number">{service.number}</span>
                <h3>
                  {service.title.split(" ").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
              </header>

              <ul className="service-details">
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
