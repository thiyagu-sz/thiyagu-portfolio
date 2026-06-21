/**
 * Single source of truth for all site content — real data for Thiyagu.
 * Items still marked `TODO` (testimonials) are placeholders to fill in later;
 * do not invent reviews or numbers.
 */
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Database,
  Workflow,
  BrainCircuit,
  Cpu,
  Globe,
  Smartphone,
  Layers,
  GitBranch,
  Bot,
  Code2,
} from "lucide-react";

export const site = {
  name: "Thiyagu",
  role: "AI Engineer · Builder",
  email: "thiyaguai2004@gmail.com",
  // No calendar link yet — CTAs open email. Swap for a Cal.com URL later.
  calUrl: "mailto:thiyaguai2004@gmail.com",
  resumeUrl: "/Thiyagu-Resume.pdf",
  available: true,
  socials: [
    { label: "GitHub", href: "https://github.com/thiyagu-sz" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thiyaguai",
    },
    { label: "Instagram", href: "https://www.instagram.com/thiyagu_ig/" },
  ],
};

export type NavLink = { label: string; href: string };
export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about-me" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "AI Engineer · Builder · VIT Vellore",
  titleLines: ["I turn ideas into", "real AI products."],
  body: "I'm Thiyagu — an AI engineer and builder pursuing my Masters in Artificial Intelligence at VIT Vellore. Since my college days I've independently designed and shipped production SaaS and AI systems used by real people — from LLM and computer-vision features to full-stack apps and cloud deployment.",
  primaryCta: { label: "Explore my work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

export type Skill = { label: string; icon: LucideIcon };
export const marqueeSkills: Skill[] = [
  { label: "React", icon: Atom },
  { label: "Supabase", icon: Database },
  { label: "n8n", icon: Workflow },
  { label: "LLM Systems", icon: BrainCircuit },
  { label: "Machine Learning", icon: Cpu },
  { label: "WordPress", icon: Globe },
  { label: "Flutter", icon: Smartphone },
  { label: "Full-Stack", icon: Layers },
  { label: "Git", icon: GitBranch },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href: string;
  hrefLabel?: string;
  image: string;
};
export const projects: Project[] = [
  {
    title: "QuickNotes",
    blurb:
      "A production-grade SaaS that converts study materials into structured notes and auto-generated practice tests with context-aware AI. Grew to 40,000+ visits and 70+ active users in beta — bootstrapped, with zero paid ads.",
    tags: ["SaaS", "AI / RAG", "React"],
    href: "https://www.quicknotess.space/",
    image: "/projects/quicknotes.png",
  },
  {
    title: "Academic OS (Acadexa)",
    blurb:
      "A modern SaaS-style academic command center that unifies attendance tracking, grade analytics, assignment management, and placement prep in one dashboard. Adds GPA/CGPA forecasting, attendance prediction, an academic health score, and personalized insights — a prototype focused on frontend architecture and data visualization.",
    tags: ["SaaS", "Analytics", "Dashboard"],
    href: "https://acadexa-omega.vercel.app/",
    image: "/projects/acdOS.png",
  },
  {
    title: "InnovateMate",
    blurb:
      "A collaboration platform connecting students, founders, mentors, and sponsors so startups and academic projects can find the teammates and resources they need to succeed.",
    tags: ["Platform", "Full-Stack", "Scrum"],
    href: "https://github.com/thiyagu-sz/innovationmate_scrumModel",
    hrefLabel: "View on GitHub",
    image: "/projects/innovatemate.png",
  },
  {
    title: "AdenHQ — AI Agents Platform",
    blurb:
      "An open-source AI agents platform for intelligent automation and agent-based workflows. I contribute regularly via PRs — feature improvements, logic enhancements, bug fixes, and new agent functionality.",
    tags: ["Open Source", "AI Agents", "Automation"],
    href: "https://adenhq.com/",
    image: "/projects/adenhq.png",
  },
  {
    title: "AI Snake Detection & Alert System",
    blurb:
      "Real-time snake detection from CCTV or uploaded video using computer vision and ML. Classifies species, captures snapshots, logs events, and sends instant SMS/email alerts through a dashboard.",
    tags: ["Computer Vision", "ML", "Alerts"],
    href: "https://thiyagu-portfolio.me/snake-dection",
    image: "/projects/snake.png",
  },
  {
    title: "Parsons Services",
    blurb:
      "A professional website for an air-conditioning and refrigeration company, showcasing their full range of installation, configuration, repair, and maintenance services with a clean, modern presence.",
    tags: ["Client", "WordPress", "Business"],
    href: "https://parsonsservices.store/",
    image: "/projects/parsons.png",
  },
  {
    title: "Vickneshwaran Parthiban — Portfolio",
    blurb:
      "A professional portfolio for a teacher and Tamil language specialist, highlighting his publications, conference talks, cultural work, and leadership — giving him a strong online identity.",
    tags: ["Client", "Portfolio", "Web"],
    href: "https://vickneshwaranparthiban.online/",
    image: "/projects/vickneshwaran.png",
  },
];

export const about = {
  heading: "About Me",
  bio: "I'm an AI engineer and builder pursuing my Masters in Artificial Intelligence at VIT Vellore. I've been building since my college days — independently designing and shipping production SaaS and AI systems used by real people, owning the full lifecycle from model and LLM integration, RAG, and computer vision to APIs and cloud deployment. I founded and grew QuickNotes to 40,000+ visits, built a real-time snake-detection system, and contribute to AdenHQ, an open-source AI agents platform. I'm most interested in where AI, automation, and SaaS meet real product value.",
  skills: [
    "Python",
    "React.js",
    "Node.js",
    "Supabase",
    "LLMs & RAG",
    "Computer Vision",
    "YOLOv8",
    "PyTorch",
    "n8n",
    "Generative AI",
    "WordPress",
    "AWS / Vercel",
  ],
  experience: [
    {
      role: "Independent AI & Full-Stack Developer",
      company: "Self-directed · Remote",
      dates: "Jan 2023 – Present",
    },
    {
      role: "Masters — Artificial Intelligence & ML",
      company: "VIT Vellore",
      dates: "2025 – 2027 (expected)",
    },
    {
      role: "BCA — Computer Applications",
      company: "VIT Vellore",
      dates: "2022 – 2025",
    },
  ],
  portrait: "/about.jpg",
};

export type Step = { number: string; title: string; description: string };
export const process = {
  eyebrow: "How I work",
  heading: "Process",
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "We align on the problem, users, and success metrics — then scope an MVP that proves value quickly.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "I design the system and ship in tight iterations — AI features, full-stack code, and a polished, accessible UI.",
    },
    {
      number: "03",
      title: "Ship",
      description:
        "We launch on production infra, measure real usage, and iterate on what moves the needle.",
    },
  ] as Step[],
};

export type Service = { title: string; description: string; icon: LucideIcon };
export const services = {
  eyebrow: "Focus areas",
  heading: "What I Do",
  intro:
    "I build digital products, AI-powered applications, and web platforms for my own projects as well as for clients and startups.",
  items: [
    {
      title: "SaaS Web Apps",
      description:
        "Designing and developing scalable web applications using React, Next.js, and modern full-stack technologies.",
      icon: Code2,
    },
    {
      title: "AI & ML Systems",
      description:
        "Building AI-driven solutions, intelligent automation, LLM-powered tools, RAG systems, and computer vision applications.",
      icon: Bot,
    },
    {
      title: "Automation (n8n)",
      description:
        "Creating automated workflows, integrations, and business processes that reduce manual effort and improve efficiency.",
      icon: Workflow,
    },
    {
      title: "Websites & Digital Platforms",
      description:
        "Developing modern websites, portfolios, business platforms, and WordPress solutions for individuals, professionals, and organizations.",
      icon: Globe,
    },
  ] as Service[],
  offerings: [
    "SaaS development",
    "AI integration",
    "Computer vision",
    "RAG pipelines",
    "n8n automation",
    "WordPress",
    "Deployment",
    "UI / UX",
  ],
  featureImage: "/whatido.jpg",
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  todo?: boolean;
};
// TODO: replace with real testimonials. Do not invent reviews.
export const testimonials: Testimonial[] = [
  {
    name: "Client Name — TODO",
    role: "Role, Company — TODO",
    quote: "A real client review will appear here. TODO: add your own.",
    rating: 5,
    avatar: "/placeholders/avatar.svg",
    todo: true,
  },
  {
    name: "Client Name — TODO",
    role: "Role, Company — TODO",
    quote: "A real client review will appear here. TODO: add your own.",
    rating: 5,
    avatar: "/placeholders/avatar.svg",
    todo: true,
  },
];

export type Stat = { value: number; suffix: string; label: string };
// Real metrics from the résumé.
export const stats: Stat[] = [
  { value: 70, suffix: "+", label: "Active beta users" },
  { value: 10, suffix: "+", label: "Projects shipped" },
];

export type Faq = { question: string; answer: string };
export const faqs: Faq[] = [
  {
    question: "What do you build?",
    answer:
      "SaaS web apps, AI/ML systems (computer vision, LLM/RAG features, automation), and custom client websites — usually end to end, from architecture to deployment.",
  },
  {
    question: "What's your stack?",
    answer:
      "React.js and modern full-stack on the front; Supabase, Node, and Python behind it; WordPress for client sites; and LLMs, RAG, n8n, Roboflow, and ML for the AI side.",
  },
  {
    question: "Are you available for freelance or full-time work?",
    answer:
      "Yes — I take on freelance projects and I'm open to roles. I'm currently pursuing my Master's in Artificial Intelligence at VIT Vellore while building for real clients.",
  },
  {
    question: "Do you contribute to open source?",
    answer:
      "Yes. I actively contribute to AdenHQ, an open-source AI agents platform, through regular pull requests — features, fixes, and agent functionality.",
  },
  {
    question: "How can I reach you?",
    answer:
      "Email me or connect on GitHub, LinkedIn, or Instagram — all linked in the footer. I usually reply within 1–2 business days.",
  },
];

export const closing = {
  badge: "Currently building",
  heading: "Have an idea worth building? Let's talk.",
  cta: { label: "Email me", href: "#" }, // uses site.calUrl at render
};
