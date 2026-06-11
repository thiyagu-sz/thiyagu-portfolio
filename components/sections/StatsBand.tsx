import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { stats } from "@/content/site";

export function StatsBand() {
  return (
    <section aria-label="By the numbers" className="bg-surface-dark py-16 text-bg sm:py-20">
      <div className="container">
        <RevealGroup className="grid gap-10 text-center sm:grid-cols-2">
          {stats.map((s) => (
            <RevealItem key={s.label} className="flex flex-col items-center gap-2">
              <span className="font-display text-5xl font-bold sm:text-6xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-sm text-white/60">{s.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
