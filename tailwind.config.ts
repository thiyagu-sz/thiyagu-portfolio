import type { Config } from "tailwindcss";

/**
 * Centralized design system.
 * Feel/scale derived from the reference layout (portfolite) but all values are our own
 * tokens. Adjust here only — components consume these via Tailwind utilities.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        bg: "#FFFFFF",
        fg: "#0A0A0A",
        surface: {
          dark: "#0D0D0D",
          dark2: "#0F0F0F",
          light: "#F5F5F5",
        },
        // Muted text tiers chosen to pass WCAG AA on white (>= 4.5:1).
        muted: "#525252", // ~8:1  — body muted
        muted2: "#737373", // ~4.7:1 — secondary/meta
        line: "#E5E5E5", // hairline borders
        accent: {
          // Single brand accent (configurable). Default = near-black monochrome.
          DEFAULT: "#0A0A0A",
          gold: "#FFD700", // used ONLY for non-text rating stars
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.8125rem", { lineHeight: "1", letterSpacing: "0.08em" }],
        h4: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h3: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["4rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display: ["5.75rem", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "640px",
        frame: "1600px",
      },
      borderRadius: {
        card: "1.125rem", // 18px
        xl2: "1.25rem", // 20px
        huge: "3rem", // 48px
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06)",
        card: "0 2px 8px rgba(0,0,0,.04), 0 12px 32px rgba(0,0,0,.06)",
        glow: "0 0 0 1px rgba(0,0,0,.04), 0 10px 40px -8px rgba(0,0,0,.18)",
        lg: "16px 24px 40px -12px rgba(0,0,0,.25)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 30s) linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
