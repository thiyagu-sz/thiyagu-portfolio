import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { projects, site } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="container scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Selected work"
        title="Recent Work"
        subtitle="A few projects that show how I combine AI and full-stack engineering to ship real products."
      />

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => {
          const external = /^https?:\/\//.test(p.href);
          return (
            <RevealItem key={p.title}>
              <a
                href={p.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group block overflow-hidden rounded-card border border-line bg-bg shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-light">
                  <Image
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-fg/0 transition-colors duration-300 group-hover:bg-fg/5" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-h4 font-semibold text-fg">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="size-5 shrink-0 text-muted2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
                  </div>
                  <p className="text-base text-muted">{p.blurb}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-fg">
                    {p.hrefLabel ?? "Live view"}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </div>
              </a>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={site.socials[0].href} variant="secondary">
          View GitHub
        </Button>
        <Button href={site.calUrl}>Get in touch</Button>
      </div>
    </section>
  );
}
