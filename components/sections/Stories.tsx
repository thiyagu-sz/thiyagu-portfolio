"use client";

import { Sparkles, Camera, Compass } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import {
  InteractiveSelector,
  type SelectorItem,
} from "@/components/ui/interactive-selector";

// TODO: rename each panel's title/description to match the actual photo.
const items: SelectorItem[] = [
  {
    title: "The Journey",
    description: "Where it started",
    image: "/stories/story-1.jpg",
    icon: Sparkles,
  },
  {
    title: "Building",
    description: "Learning by shipping",
    image: "/stories/story-2.jpg",
    icon: Camera,
  },
  {
    title: "Behind the build",
    description: "Moments along the way",
    image: "/stories/story-3.jpg",
    icon: Compass,
  },
];

export function Stories() {
  return (
    <section
      id="story"
      className="scroll-mt-24 bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="container flex flex-col items-center">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="text-eyebrow font-medium uppercase tracking-[0.08em] text-white/50">
            My story
          </span>
          <h2 className="font-display text-[2rem] font-bold text-white sm:text-h2">
            Behind the build
          </h2>
          <p className="max-w-prose text-white/60">
            A few moments from the journey — tap a panel to expand it.
          </p>
        </Reveal>

        <div className="mt-12 flex w-full justify-center">
          <InteractiveSelector items={items} />
        </div>
      </div>
    </section>
  );
}
