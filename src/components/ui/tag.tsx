import type { HTMLAttributes } from "react";

import { classNames } from "./class-names";

type TagVariant = "neutral" | "accent" | "inverse";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant;
};

export function Tag({ className, variant = "neutral", ...props }: TagProps) {
  return (
    <span
      className={classNames(
        "tag",
        variant !== "neutral" && `tag-${variant}`,
        className,
      )}
      {...props}
    />
  );
}
