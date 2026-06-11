import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:-translate-y-0.5 hover:shadow-glow",
  secondary:
    "border border-fg/15 bg-transparent text-fg hover:bg-fg/5 hover:-translate-y-0.5",
  ghost: "bg-transparent text-fg hover:bg-fg/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<"a">, "className" | "children"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Polymorphic button: renders an anchor when `href` is set, otherwise a button. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest;
    const isInternal =
      (href.startsWith("/") || href.startsWith("#")) &&
      !("download" in anchorRest);
    if (!isInternal) {
      // External, mailto:, tel: — render a plain anchor.
      const isWeb = /^https?:\/\//.test(href);
      return (
        <a
          className={classes}
          {...anchorRest}
          href={href}
          {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} {...anchorRest} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
