import type { HTMLAttributes } from "react";

import { classNames } from "./class-names";

type AccentSquareProps = Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export function AccentSquare({ className, ...props }: AccentSquareProps) {
  return (
    <span
      {...props}
      className={classNames("accent-square", className)}
      aria-hidden="true"
    />
  );
}
