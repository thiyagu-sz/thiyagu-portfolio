import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { services } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="container scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow={services.eyebrow}
        title={services.heading}
        subtitle={services.intro}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Service cards */}
        <RevealGroup className="grid gap-6 sm:grid-cols-2">
          {services.items.map((s) => {
            const Icon = s.icon;
            return (
              <RevealItem key={s.title}>
                <Card hover className="flex h-full flex-col gap-4 p-6">
                  <span className="grid size-11 place-items-center rounded-xl2 bg-surface-light text-fg">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-h4 font-semibold text-fg">
                    {s.title}
                  </h3>
                  <p className="text-base text-muted">{s.description}</p>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Feature image */}
        <Reveal className="overflow-hidden rounded-huge bg-surface-dark">
          <div className="relative aspect-[4/3] w-full lg:h-full">
            <Image
              src={services.featureImage}
              alt="A snapshot of recent work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-10">
        <Marquee durationSec={28}>
          {services.offerings.map((o) => (
            <Tag key={o} variant="outline" className="text-base">
              {o}
            </Tag>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
