"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ShapesBackground } from "@/components/ui/shape-landing-hero";
import { site, hero } from "@/content/site";

/**
 * /futuristic hero — uses the geometric ShapesBackground as the top background,
 * with our own identity content + a scanned, parallax/tilt portrait layered on top.
 * Lightweight (Framer Motion only, no WebGPU/Three). Honors prefers-reduced-motion.
 */

const ACCENT_RGB = "244,114,182"; // rose-400, to sit in the shapes' palette

export function FuturisticHero() {
  const reduce = useReducedMotion();

  // portrait parallax / tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const rotateY = useTransform(sx, [-1, 1], [8, -8]);
  const rotateX = useTransform(sy, [-1, 1], [-8, 8]);
  const tx = useTransform(sx, [-1, 1], [-14, 14]);
  const ty = useTransform(sy, [-1, 1], [-14, 14]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, mx, my]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const letters = site.name.split("");

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-white">
      {/* geometric shapes as the top background */}
      <ShapesBackground />

      <Link
        href="/"
        className="absolute left-6 top-6 z-20 text-sm font-medium text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
      >
        ← Back to portfolio
      </Link>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-content grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-eyebrow font-medium uppercase tracking-[0.18em] text-white/70"
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: `rgb(${ACCENT_RGB})` }}
              aria-hidden
            />
            {hero.eyebrow}
          </motion.span>

          <h1 className="font-display text-[3.5rem] font-bold leading-[0.95] tracking-tight sm:text-[5rem] lg:text-[6.5rem]">
            <span className="sr-only">{site.name}</span>
            <motion.span variants={container} aria-hidden className="flex">
              {letters.map((c, i) => (
                <motion.span
                  key={i}
                  variants={item}
                  className="inline-block bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
                >
                  {c}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p variants={item} className="max-w-md text-lg text-white/50">
            Building intelligent products at the edge of AI and the web.
          </motion.p>

          <motion.div variants={item} className="mt-2 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-base font-medium text-[#030303] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
            >
              Enter portfolio
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scanned portrait */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          style={{ rotateX, rotateY, x: tx, y: ty, transformPerspective: 1000 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm [transform-style:preserve-3d]"
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-xl2 border border-white/10"
            style={{ boxShadow: `0 0 60px -10px rgba(${ACCENT_RGB},0.45)` }}
          >
            <Image
              src="/portrait.jpg"
              alt="Portrait of Thiyagu"
              fill
              sizes="(max-width: 1024px) 90vw, 36vw"
              className="object-cover opacity-90"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            {!reduce && (
              <motion.div
                aria-hidden
                className="absolute inset-x-0 h-16"
                style={{
                  background: `linear-gradient(180deg, transparent, rgba(${ACCENT_RGB},0.35), transparent)`,
                  boxShadow: `0 0 18px rgba(${ACCENT_RGB},0.6)`,
                }}
                initial={{ top: "-10%" }}
                animate={{ top: ["-10%", "100%"] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <span aria-hidden className="absolute left-3 top-3 size-5 border-l-2 border-t-2 border-white/40" />
            <span aria-hidden className="absolute right-3 top-3 size-5 border-r-2 border-t-2 border-white/40" />
            <span aria-hidden className="absolute bottom-3 left-3 size-5 border-b-2 border-l-2 border-white/40" />
            <span aria-hidden className="absolute bottom-3 right-3 size-5 border-b-2 border-r-2 border-white/40" />
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="size-5 animate-bounce" />
      </motion.div>
    </main>
  );
}
