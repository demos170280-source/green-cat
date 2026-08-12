import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { classNames } from "./class-names";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "sm" | "md" | "lg";

type ButtonStyleProps = {
  arrow?: boolean;
  fullWidth?: boolean;
  mobileFullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps;
type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonStyleProps & {
    href: string;
  };

function getButtonClassName({
  className,
  fullWidth,
  mobileFullWidth,
  size = "md",
  variant = "primary",
}: ButtonStyleProps & { className?: string }) {
  return classNames(
    "button",
    `button-${variant}`,
    size !== "md" && `button-${size}`,
    fullWidth && "button-full",
    mobileFullWidth && "button-mobile-full",
    className,
  );
}

function ButtonContent({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className="button-arrow" aria-hidden="true">
          ↗
        </span>
      ) : null}
    </>
  );
}

export function Button({
  arrow,
  children,
  className,
  fullWidth,
  mobileFullWidth,
  size,
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName({
        className,
        fullWidth,
        mobileFullWidth,
        size,
        variant,
      })}
      type={type}
      {...props}
    >
      <ButtonContent arrow={arrow}>{children}</ButtonContent>
    </button>
  );
}

export function ButtonLink({
  arrow,
  children,
  className,
  fullWidth,
  mobileFullWidth,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={getButtonClassName({
        className,
        fullWidth,
        mobileFullWidth,
        size,
        variant,
      })}
      {...props}
    >
      <ButtonContent arrow={arrow}>{children}</ButtonContent>
    </a>
  );
}
