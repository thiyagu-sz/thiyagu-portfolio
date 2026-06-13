import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: "Thiyagu — AI-Enabled Developer & Full-Stack Engineer",
    template: "%s · Thiyagu",
  },
  description:
    "Thiyagu is an AI-enabled developer pursuing a Master's in AI at VIT Vellore — building SaaS web apps, AI/ML systems, and client websites end to end.",
  keywords: [
    "Thiyagu",
    "AI Developer",
    "Full-Stack Developer",
    "SaaS",
    "React",
    "Supabase",
    "Machine Learning",
    "n8n",
    "VIT Vellore",
  ],
  openGraph: {
    title: "Thiyagu — AI-Enabled Developer & Full-Stack Engineer",
    description:
      "Building SaaS web apps and AI/ML systems end to end — from architecture to deployment.",
    type: "website",
    url: "https://thiyagu-portfolio.me",
  },
  robots: { index: true, follow: true },
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
        <Analytics />
      </body>
    </html>
  );
}
