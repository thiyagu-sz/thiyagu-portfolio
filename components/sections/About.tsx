import Image from "next/image";
import { Download } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { about, site } from "@/content/site";

export function About() {
  return (
    <section id="about-me" className="container scroll-mt-24 py-20 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Portrait */}
        <Reveal className="order-1 lg:order-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-huge bg-surface-light">
            <Image
              src={about.portrait}
              alt="Portrait of Thiyagu"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal className="flex flex-col gap-6">
          <span className="text-eyebrow font-medium uppercase tracking-[0.08em] text-muted2">
            Who I am
          </span>
          <h2 className="font-display text-[2rem] font-bold text-fg sm:text-h2">
            {about.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {about.bio}
          </p>

          <div className="flex flex-wrap gap-2">
            {about.skills.map((s) => (
              <Tag key={s} variant="outline">
                {s}
              </Tag>
            ))}
          </div>

          <div className="mt-2">
            <h3 className="mb-4 text-eyebrow font-medium uppercase tracking-[0.08em] text-muted2">
              Education &amp; Experience
            </h3>
            <ul className="flex flex-col divide-y divide-line">
              {about.experience.map((e, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-fg">{e.role}</p>
                    <p className="text-sm text-muted">{e.company}</p>
                  </div>
                  <span className="text-sm text-muted2">{e.dates}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button href={site.resumeUrl} className="self-start" download>
            <Download className="size-4" aria-hidden />
            Download Résumé
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
