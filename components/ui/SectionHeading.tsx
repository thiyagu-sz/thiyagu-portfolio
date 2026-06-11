import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-eyebrow font-medium uppercase tracking-[0.08em] text-muted2">
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "text-balance font-display font-bold text-fg",
          Tag === "h2"
            ? "text-[2rem] sm:text-h2"
            : "text-[1.75rem] sm:text-h3",
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="max-w-prose text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
