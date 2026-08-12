import type { HTMLAttributes, ReactNode } from "react";

import { classNames } from "./class-names";

type MediaRatio = "landscape" | "editorial" | "square";

type MediaProps = HTMLAttributes<HTMLElement> & {
  caption?: ReactNode;
  frameClassName?: string;
  ratio?: MediaRatio;
};

export function Media({
  caption,
  children,
  className,
  frameClassName,
  ratio = "landscape",
  ...props
}: MediaProps) {
  return (
    <figure className={classNames("media", className)} {...props}>
      <div
        className={classNames(
          "media-frame",
          `media-frame-${ratio}`,
          frameClassName,
        )}
      >
        {children}
      </div>
      {caption ? <figcaption className="media-caption">{caption}</figcaption> : null}
    </figure>
  );
}
