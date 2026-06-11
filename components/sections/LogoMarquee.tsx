import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiTailwindcss,
  SiSupabase,
  SiN8N,
  SiWordpress,
  SiFlutter,
  SiGit,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";
import { Marquee } from "@/components/ui/Marquee";

// Real brand logos (Simple Icons, CC0) for the tech stack.
const logos: { label: string; Icon: IconType }[] = [
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "Python", Icon: SiPython },
  { label: "PyTorch", Icon: SiPytorch },
  { label: "Tailwind", Icon: SiTailwindcss },
  { label: "Supabase", Icon: SiSupabase },
  { label: "n8n", Icon: SiN8N },
  { label: "WordPress", Icon: SiWordpress },
  { label: "Flutter", Icon: SiFlutter },
  { label: "Git", Icon: SiGit },
  { label: "OpenAI", Icon: SiOpenai },
  { label: "Hugging Face", Icon: SiHuggingface },
];

export function LogoMarquee() {
  return (
    <section
      aria-label="Tools and technologies"
      className="border-y border-line py-10"
    >
      <Marquee durationSec={42}>
        {logos.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 text-fg/55 transition-colors hover:text-fg"
          >
            <Icon className="size-7" aria-hidden />
            <span className="whitespace-nowrap text-lg font-medium">{label}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
