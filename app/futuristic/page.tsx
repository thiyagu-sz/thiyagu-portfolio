import type { Metadata } from "next";
import { FuturisticHero } from "@/components/futuristic/FuturisticHero";

export const metadata: Metadata = {
  title: "Futuristic",
  description:
    "An experimental futuristic hero — animated scan, tech grid, and glow.",
};

export default function FuturisticPage() {
  return <FuturisticHero />;
}
