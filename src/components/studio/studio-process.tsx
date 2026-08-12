import type { Dictionary } from "@/i18n/dictionary";
import { AccentSquare } from "@/components/ui";

type StudioProcessProps = {
  dictionary: Dictionary;
};

export function StudioProcess({ dictionary }: StudioProcessProps) {
  return (
    <section
      className="studio-process spacing-section"
      id="approach"
      aria-labelledby="studio-title"
    >
      <div className="studio-process-inner spacing-inline-page">
        <header className="studio-process-intro">
          <p className="studio-process-kicker">
            <AccentSquare className="studio-accent-square" />
            {dictionary.studio.label}
          </p>
          <h2 id="studio-title">
            {dictionary.studio.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="studio-process-description">
            {dictionary.studio.description}
          </p>
        </header>

        <ol className="process-list">
          {dictionary.studio.items.map((item) => (
            <li className="process-item" key={item.number}>
              <span className="process-number">{item.number}</span>
              <div className="process-copy">
                <h3>{item.title}</h3>
                <ul className="process-details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
