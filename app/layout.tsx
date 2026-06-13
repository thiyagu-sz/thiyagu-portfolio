import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thiyagu-portfolio.me"),
  title: {
    default: "Thiyagu — AI Engineer & Full-Stack SaaS Builder",
    template: "%s · Thiyagu",
  },
  description:
    "AI engineer (MSc AI @ VIT Vellore) shipping production SaaS and AI/ML systems — LLMs, RAG, and computer vision. Built QuickNotes to 40,000+ visits, bootstrapped.",
  keywords: [
    "Thiyagu",
    "AI Engineer",
    "Full-Stack Developer",
    "LLM developer",
    "RAG pipelines",
    "Computer Vision",
    "React",
    "Next.js",
    "SaaS",
    "Supabase",
    "n8n",
    "VIT Vellore",
  ],
  authors: [{ name: "Thiyagu", url: "https://thiyagu-portfolio.me" }],
  creator: "Thiyagu",
  applicationName: "Thiyagu — Portfolio",
  alternates: { canonical: "https://thiyagu-portfolio.me" },
  openGraph: {
    type: "website",
    siteName: "Thiyagu — Portfolio",
    title: "Thiyagu — AI Engineer & Full-Stack SaaS Builder",
    description:
      "Shipping real SaaS & AI/ML systems — QuickNotes (40k+ visits), real-time snake detection (YOLOv8), and more.",
    url: "https://thiyagu-portfolio.me",
    locale: "en_US",
    // og:image is generated automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiyagu — AI Engineer & Full-Stack SaaS Builder",
    description:
      "Shipping production AI & SaaS. QuickNotes → 40k+ visits, bootstrapped.",
    // twitter:image is generated automatically by app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
