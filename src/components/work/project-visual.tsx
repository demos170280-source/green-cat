import Image from "next/image";

import type { WorkProjectVisual } from "@/content/work/types";

type ProjectVisualProps = {
  imageAlts: readonly string[];
  linkLabel: string;
  priority?: boolean;
  projectUrl: string;
  visual: WorkProjectVisual;
};

export function ProjectVisual({
  imageAlts,
  linkLabel,
  priority = false,
  projectUrl,
  visual,
}: ProjectVisualProps) {
  const images = visual.type === "single" ? [visual.image] : visual.images;

  return (
    <div
      className="project-visual project-preview-frame"
      data-layout={visual.type}
    >
      <div className="project-visual-frame" data-layout={visual.type}>
        {images.map((image, index) => (
          <a
            key={image}
            className="project-visual-link"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${linkLabel} — ${imageAlts[index]}`}
          >
            <Image
              className="project-cover"
              src={image}
              alt={imageAlts[index]}
              fill
              priority={priority && index === 0}
              sizes={
                visual.type === "gallery"
                  ? "(max-width: 47.99rem) 50vw, (max-width: 63.99rem) 46vw, min(41.66vw, 41.66rem)"
                  : "(max-width: 47.99rem) calc(100vw - 2.5rem), (max-width: 63.99rem) 92vw, min(83.33vw, 83.33rem)"
              }
            />
          </a>
        ))}
      </div>
    </div>
  );
}
