import { Fragment } from "react";

import type { WorkProjectTeaser } from "@/content/work/types";

import { ProjectVisual } from "./project-visual";

type ProjectTeaserProps = {
  project: WorkProjectTeaser;
  projectLinkLabel: string;
  disciplinesLabel: string;
};

export function ProjectTeaser({
  project,
  projectLinkLabel,
  disciplinesLabel,
}: ProjectTeaserProps) {
  return (
    <li className="project-list-item">
      <article
        className="project-teaser spacing-section-item"
        aria-labelledby={`${project.id}-title`}
      >
        <header className="project-meta">
          <span>{project.sequence}</span>
          <span className="project-meta-divider" aria-hidden="true">
            /
          </span>
          <span>{project.category}</span>
        </header>

        <div className="project-copy">
          <h3 id={`${project.id}-title`}>
            {project.titleSegments
              ? project.titleSegments.map((segment, index) => (
                  <Fragment key={`${segment}-${index}`}>
                    <span className="project-title-segment">{segment}</span>
                    {index < project.titleSegments!.length - 1 ? <wbr /> : null}
                  </Fragment>
                ))
              : project.title}
          </h3>
          <p>{project.summary}</p>
          <ul className="project-disciplines" aria-label={disciplinesLabel}>
            {project.disciplines.map((discipline) => (
              <li key={discipline}>{discipline}</li>
            ))}
          </ul>
        </div>

        <ProjectVisual
          imageAlts={project.imageAlts}
          linkLabel={`${projectLinkLabel}: ${project.title}`}
          priority={project.sequence === "01"}
          projectUrl={project.url}
          visual={project.visual}
        />

        <a
          className="project-status"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${projectLinkLabel}: ${project.title}`}
        >
          <span className="project-status-signal" aria-hidden="true" />
          {projectLinkLabel}
          <span aria-hidden="true">↗</span>
        </a>
      </article>
    </li>
  );
}
