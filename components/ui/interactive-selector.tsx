"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { type LucideIcon } from "lucide-react";

export type SelectorItem = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

/**
 * Interactive expanding-panel selector (adapted from the 21st.dev "interactive-selector").
 * Same animation — click/keyboard a panel to expand it (flex-grow) with a staggered
 * fade-in on mount. Typed, keyboard-accessible, responsive, lucide-react icons.
 */
export function InteractiveSelector({ items }: { items: SelectorItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animated, setAnimated] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    items.forEach((_, i) => {
      timers.push(setTimeout(() => setAnimated((prev) => [...prev, i]), 180 * i));
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, [items]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(index);
    } else if (e.key === "ArrowRight") {
      setActiveIndex((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowLeft") {
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
  };

  return (
    <div className="flex h-[340px] w-full max-w-[900px] items-stretch overflow-hidden sm:h-[420px]">
      {items.map((option, index) => {
        const isActive = activeIndex === index;
        const shown = animated.includes(index);
        const Icon = option.icon;
        return (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            aria-label={`${option.title} — ${option.description}`}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => onKeyDown(e, index)}
            className="relative flex cursor-pointer flex-col justify-end overflow-hidden border-2 transition-all duration-700 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181b]"
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: isActive ? "auto 100%" : "auto 120%",
              backgroundPosition: "center",
              backgroundColor: "#18181b",
              borderColor: isActive ? "#ffffff" : "#292929",
              opacity: shown ? 1 : 0,
              transform: shown ? "translateX(0)" : "translateX(-60px)",
              boxShadow: isActive
                ? "0 20px 60px rgba(0,0,0,0.5)"
                : "0 10px 30px rgba(0,0,0,0.3)",
              flex: isActive ? "7 1 0%" : "1 1 0%",
              minWidth: "48px",
              zIndex: isActive ? 10 : 1,
              willChange:
                "flex-grow, box-shadow, background-size, background-position",
            }}
          >
            {/* bottom gradient shadow */}
            <div
              className="pointer-events-none absolute inset-x-0 transition-all duration-700 ease-in-out"
              style={{
                bottom: isActive ? "0" : "-40px",
                height: "120px",
                boxShadow: isActive
                  ? "inset 0 -120px 120px -80px #000"
                  : "inset 0 -120px 0px -80px #000",
              }}
            />

            {/* label */}
            <div className="pointer-events-none absolute inset-x-0 bottom-5 z-[2] flex h-12 items-center gap-3 px-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#444] bg-black/60 shadow-[0_1px_4px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <Icon size={22} className="text-white" aria-hidden />
              </div>
              <div className="relative whitespace-pre text-white">
                <div
                  className="text-lg font-bold transition-all duration-700 ease-in-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(25px)",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="text-sm text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(25px)",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
