import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { closing, site } from "@/content/site";

export function ClosingCta() {
  return (
    <section id="contact" className="container scroll-mt-24 py-20 sm:py-28">
      <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-huge border border-line bg-bg px-6 py-16 text-center shadow-soft sm:px-12 sm:py-20">
        {/* soft animated aurora background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-12 -top-12 h-72 w-72 rounded-full bg-zinc-400/15 blur-3xl [animation:smoke1_22s_ease-in-out_infinite]" />
          <div className="absolute -right-10 top-8 h-72 w-72 rounded-full bg-zinc-300/20 blur-3xl [animation:smoke2_26s_ease-in-out_infinite]" />
          <div className="absolute -bottom-14 left-1/3 h-64 w-64 rounded-full bg-zinc-400/12 blur-3xl [animation:smoke3_24s_ease-in-out_infinite]" />
        </div>

        {/* content */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          {site.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-1.5 text-eyebrow font-medium uppercase tracking-[0.08em] text-muted2">
              <span className="size-2 rounded-full bg-accent-gold" aria-hidden />
              {closing.badge}
            </span>
          )}
          <h2 className="text-balance font-display text-[2rem] font-bold leading-tight text-fg sm:text-h2">
            {closing.heading}
          </h2>
          <p className="max-w-prose text-muted">
            Tell me what you&apos;re building and I&apos;ll get back to you within
            1–2 business days.
          </p>
          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`} size="lg">
              Email me
            </Button>
            <Button href={site.resumeUrl} download size="lg" variant="secondary">
              Download Résumé
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
