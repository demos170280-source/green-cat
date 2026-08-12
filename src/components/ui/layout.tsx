import type { HTMLAttributes } from "react";

import { classNames } from "./class-names";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean;
};

export function Container({ className, narrow = false, ...props }: ContainerProps) {
  return (
    <div
      className={classNames(
        "layout-container",
        narrow && "layout-container-narrow",
        className,
      )}
      {...props}
    />
  );
}

export function Grid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={classNames("layout-grid", className)} {...props} />;
}
