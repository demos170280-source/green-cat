import type { Dictionary } from "@/i18n/dictionary";
import type { WorkProjectTeaser } from "@/content/work/types";
import { AccentSquare } from "@/components/ui";

import { ProjectTeaser } from "./project-teaser";

type SelectedWorkProps = {
  dictionary: Dictionary;
  projects: readonly WorkProjectTeaser[];
};

export function SelectedWork({ dictionary, projects }: SelectedWorkProps) {
  return (
    <section
      className="selected-work spacing-section"
      id="work"
      aria-labelledby="work-title"
    >
      <header className="work-heading spacing-inline-page spacing-section-heading">
        <p className="work-kicker">{dictionary.work.kicker}</p>
        <h2 id="work-title">
          {dictionary.work.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="work-introduction">{dictionary.work.introduction}</p>
        <AccentSquare className="work-accent-square" />
      </header>

      <ol className="project-list spacing-inline-page">
        {projects.map((project) => (
          <ProjectTeaser
            key={project.id}
            project={project}
            projectLinkLabel={dictionary.work.projectLinkLabel}
            disciplinesLabel={dictionary.work.disciplinesLabel}
          />
        ))}
      </ol>
    </section>
  );
}
