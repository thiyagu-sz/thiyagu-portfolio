import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TagProps = ComponentProps<"span"> & {
  variant?: "fill" | "outline";
};

export function Tag({ className, variant = "fill", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-muted",
        variant === "fill" ? "bg-surface-light" : "border border-line",
        className,
      )}
      {...props}
    />
  );
}
