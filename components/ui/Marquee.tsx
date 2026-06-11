"use client";

import { useReducedMotion } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  durationSec?: number;
};

/**
 * Infinite horizontal auto-scroll. Pauses on hover.
 * Under prefers-reduced-motion it renders a static, centered, wrapping row.
 */
export function Marquee({ children, className, durationSec = 30 }: MarqueeProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-10 gap-y-4",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={cn("group mask-fade-x overflow-hidden", className)}>
      <div
        className="flex w-max gap-10 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${durationSec}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center gap-10">{children}</div>
        <div className="flex shrink-0 items-center gap-10" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
