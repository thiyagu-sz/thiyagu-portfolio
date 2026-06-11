import Image from "next/image";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/content/site";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-4",
            i < rating ? "fill-accent-gold text-accent-gold" : "text-line",
          )}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="mx-auto flex max-w-2xl flex-col gap-6 p-8 text-center sm:p-10">
      <Stars rating={t.rating} />
      <blockquote className="text-balance text-lg leading-relaxed text-fg sm:text-xl">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center justify-center gap-3">
        <span className="relative size-11 overflow-hidden rounded-full bg-surface-light">
          <Image src={t.avatar} alt="" fill sizes="44px" className="object-cover" />
        </span>
        <div className="text-left">
          <p className="font-medium text-fg">
            {t.name}
            {t.todo && (
              <span className="ml-2 text-xs font-medium uppercase tracking-wide text-muted2">
                TODO
              </span>
            )}
          </p>
          <p className="text-sm text-muted">{t.role}</p>
        </div>
      </div>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface-light py-20 scroll-mt-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Kind words"
          title="Client Reviews"
          subtitle="Real feedback will live here. The cards below are placeholders for you to fill in."
        />

        <div className="mt-12">
          <Carousel
            ariaLabel="Client reviews"
            slides={testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
