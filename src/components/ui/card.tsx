import type { HTMLAttributes } from "react";

import { classNames } from "./class-names";

type CardVariant = "editorial" | "surface" | "inverse";
type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div";
  padding?: CardPadding;
  variant?: CardVariant;
};

export function Card({
  as: Element = "article",
  className,
  padding = "none",
  variant = "editorial",
  ...props
}: CardProps) {
  return (
    <Element
      className={classNames(
        "card",
        variant !== "editorial" && `card-${variant}`,
        padding !== "none" && `card-padding-${padding}`,
        className,
      )}
      {...props}
    />
  );
}
