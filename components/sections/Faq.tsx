import Image from "next/image";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { faqs, site } from "@/content/site";

export function Faq() {
  return (
    <section className="container py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Side: heading + image + CTA */}
        <Reveal className="flex flex-col gap-6">
          <span className="text-eyebrow font-medium uppercase tracking-[0.08em] text-muted2">
            FAQ
          </span>
          <h2 className="font-display text-[2rem] font-bold text-fg sm:text-h2">
            Answers
          </h2>
          <p className="text-base text-muted">
            Everything you might want to know before reaching out. Still curious?
            Let&apos;s talk.
          </p>
          <div className="relative hidden aspect-[4/3] w-full overflow-hidden rounded-huge bg-surface-dark lg:block">
            <Image
              src="/placeholders/feature.svg"
              alt=""
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <Button href={site.calUrl} variant="secondary" className="self-start">
            Get in touch
          </Button>
        </Reveal>

        {/* Accordion */}
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
