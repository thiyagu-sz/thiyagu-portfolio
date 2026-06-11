import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-[var(--nav-h)]"
    >
      <HeroBackground />
      <div className="container relative z-10">
        <RevealGroup className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <RevealItem>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/70 px-4 py-1.5 text-eyebrow font-medium uppercase tracking-[0.08em] text-muted2 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent-gold" aria-hidden />
              {hero.eyebrow}
            </span>
          </RevealItem>

          <RevealItem>
            <h1 className="text-balance font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-fg sm:text-h1 lg:text-display">
              {hero.titleLines[0]}
              <br />
              <span className="text-muted2">{hero.titleLines[1]}</span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="max-w-prose text-base text-muted sm:text-lg">
              {hero.body}
            </p>
          </RevealItem>

          <RevealItem className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </RevealItem>
        </RevealGroup>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted2 transition-colors hover:text-fg sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.12em]">Scroll</span>
        <ChevronDown className="size-5 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
