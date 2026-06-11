import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { process, site } from "@/content/site";

export function Process() {
  return (
    <section className="bg-surface-light py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.heading}
          subtitle="A simple, transparent way of working that keeps momentum from first call to launch."
        />

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {process.steps.map((step) => (
            <RevealItem key={step.number}>
              <Card className="flex h-full flex-col gap-4 p-8">
                <span className="font-display text-5xl font-bold text-line">
                  {step.number}
                </span>
                <h3 className="font-display text-h4 font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="text-base text-muted">{step.description}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 flex justify-center">
          <Button href={site.calUrl}>Start a project</Button>
        </div>
      </div>
    </section>
  );
}
