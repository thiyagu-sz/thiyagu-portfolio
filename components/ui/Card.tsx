import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentProps<"div"> & {
  /** Add hover lift + glow (for interactive cards). */
  hover?: boolean;
};

export function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-bg shadow-soft",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}
