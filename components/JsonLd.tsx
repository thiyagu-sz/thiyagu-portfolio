/**
 * Structured data (JSON-LD): Person + WebSite + ProfilePage.
 * Helps search engines build a knowledge entity for "Thiyagu" and can surface
 * richer results. Rendered once from app/layout.tsx.
 * Validate at https://validator.schema.org/
 */

const SITE = "https://thiyagu-portfolio.me";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        name: "Thiyagu",
        url: SITE,
        image: `${SITE}/about.jpg`,
        jobTitle: "AI Engineer & Full-Stack Developer",
        description:
          "AI engineer shipping production SaaS and AI/ML systems — LLMs, RAG, and computer vision.",
        email: "mailto:thiyaguai2004@gmail.com",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "VIT Vellore",
        },
        knowsAbout: [
          "Artificial Intelligence",
          "Large Language Models",
          "Retrieval-Augmented Generation",
          "Computer Vision",
          "YOLOv8",
          "React",
          "Next.js",
          "SaaS Architecture",
          "n8n Automation",
        ],
        sameAs: [
          "https://github.com/thiyagu-sz",
          "https://www.linkedin.com/in/thiyaguai",
          "https://www.instagram.com/thiyagu_ig/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Thiyagu — AI Engineer & Full-Stack SaaS Builder",
        publisher: { "@id": `${SITE}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE}/#profilepage`,
        url: SITE,
        about: { "@id": `${SITE}/#person` },
        isPartOf: { "@id": `${SITE}/#website` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
