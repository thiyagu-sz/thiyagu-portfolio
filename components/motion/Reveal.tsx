"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  /** delay in seconds */
  delay?: number;
};

/** Single element that fades up when scrolled into view. Honors reduced motion. */
export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div {...(props as object)}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its <RevealItem> children into view. */
export function RevealGroup({ children, ...props }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div {...(props as object)}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={group}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Child of <RevealGroup>; fades up as part of the stagger. */
export function RevealItem({ children, ...props }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div {...(props as object)}>{children}</div>;
  return (
    <motion.div variants={fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
