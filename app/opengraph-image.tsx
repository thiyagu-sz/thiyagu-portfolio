import { ImageResponse } from "next/og";

/**
 * Auto-generated Open Graph image (1200x630).
 * Next.js injects this as <meta property="og:image"> for the homepage.
 * No manual Canva asset needed — edit the JSX below to restyle.
 */

export const alt = "Thiyagu — AI Engineer & Full-Stack SaaS Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 80% -10%, #1f2937 0%, #0a0a0a 60%)",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#9ca3af",
          }}
        >
          AI Engineer · Builder · VIT Vellore
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1.02,
          }}
        >
          Thiyagu
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 46,
            fontWeight: 700,
            color: "#e5e7eb",
          }}
        >
          AI Engineer &amp; Full-Stack SaaS Builder
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#9ca3af",
            maxWidth: 980,
          }}
        >
          LLMs · RAG · Computer Vision — QuickNotes grew to 40,000+ visits,
          bootstrapped.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 28,
            color: "#6b7280",
          }}
        >
          thiyagu-portfolio.me
        </div>
      </div>
    ),
    { ...size }
  );
}
