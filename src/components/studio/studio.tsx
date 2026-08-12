import { AccentSquare } from "@/components/ui";
import type { Dictionary } from "@/i18n/dictionary";

type StudioProps = {
  dictionary: Dictionary;
};

export function Studio({ dictionary }: StudioProps) {
  return (
    <section
      className="studio-section spacing-section"
      id="studio"
      aria-labelledby="studio-profile-title"
    >
      <div className="studio-section-inner spacing-inline-page">
        <header className="studio-section-copy">
          <p className="studio-section-kicker">
            <AccentSquare className="studio-section-accent-square" />
            {dictionary.studioProfile.label}
          </p>

          <h2 id="studio-profile-title">
            {dictionary.studioProfile.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>

          <div className="studio-section-description">
            {dictionary.studioProfile.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <div className="studio-brand-visual" aria-hidden="true">
          <div className="studio-brand-grid">
            <span className="studio-brand-meta">GC / SYSTEM 01</span>
            <span className="studio-brand-signal" />
            <strong className="studio-brand-type">
              DESIGN
              <span>× CODE</span>
            </strong>

            <div className="studio-brand-component studio-brand-component-primary">
              <span className="studio-brand-component-label">01 / COMPONENT</span>
              <span className="studio-brand-line" />
              <span className="studio-brand-line studio-brand-line-short" />
              <span className="studio-brand-action">↗</span>
            </div>

            <div className="studio-brand-component studio-brand-component-accent">
              <span>TOKEN</span>
              <strong>#A7FF3F</strong>
            </div>

            <span className="studio-brand-caption">INTERFACE SYSTEM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
