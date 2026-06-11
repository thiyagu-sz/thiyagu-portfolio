import Link from "next/link";
import { navLinks, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-prose">
            <Link href="#hero" className="text-lg font-bold tracking-tight">
              {site.name}
              <span className="text-muted2">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted">{site.role}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-eyebrow font-medium uppercase tracking-[0.08em] text-muted2">
              Elsewhere
            </span>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
