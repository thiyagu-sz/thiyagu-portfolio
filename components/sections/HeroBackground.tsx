/**
 * Light hero background — soft, animated pastel "gradient" made of drifting colour blobs
 * (indigo / violet / sky / rose) on the white page, plus a faint edge-masked grid.
 * Pure CSS (no JS/deps); the drift freezes under prefers-reduced-motion. Recolour or
 * dial down via the bg-* utilities / opacities below.
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* animated monochrome (black/gray) gradient blobs */}
      <div className="absolute left-[8%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-zinc-700/15 blur-3xl [animation:smoke1_22s_ease-in-out_infinite]" />
      <div className="absolute right-[6%] top-[16%] h-[28rem] w-[28rem] rounded-full bg-zinc-500/18 blur-3xl [animation:smoke2_26s_ease-in-out_infinite]" />
      <div className="absolute left-[32%] top-[42%] h-[26rem] w-[26rem] rounded-full bg-zinc-800/12 blur-3xl [animation:smoke3_24s_ease-in-out_infinite]" />
      <div className="absolute bottom-[4%] right-[24%] h-[24rem] w-[24rem] rounded-full bg-zinc-600/15 blur-3xl [animation:smoke1_28s_ease-in-out_infinite_reverse]" />

      {/* faint grid, faded out toward the center via mask */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,10,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,.05) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 60% at 50% 45%, transparent 35%, #000 80%)",
          maskImage:
            "radial-gradient(ellipse 65% 60% at 50% 45%, transparent 35%, #000 80%)",
        }}
      />

      {/* blend into the white page below */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
