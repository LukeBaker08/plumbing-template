import type { LucideIcon } from "lucide-react";

export type SiteConfig = {
  id: string;
  business: {
    name: string;
    shortName: string;
    phone: string;
    phoneHref: string;
  };
  hero: {
    eyebrow: string;
    heading: [string, string];
    subheading: string;
    // Omit until a real photo is available — the hero renders a generic
    // placeholder instead of a stand-in photo of a different business.
    image?: string;
    imageAlt?: string;
    // Small overlay badges on the hero photo (e.g. "24/7 emergency"). Only
    // include claims that are actually confirmed for this business.
    badges?: { icon: LucideIcon; label: string }[];
  };
  theme: {
    primary: string;
    accent: string;
  };
  trust: { k: string; v: string }[];
  services: {
    eyebrow: string;
    heading: string;
    items: { icon: LucideIcon; title: string; body: string }[];
  };
  about: {
    eyebrow: string;
    heading: [string, string];
    paragraphs: string[];
    badges: { icon: LucideIcon; label: string }[];
  };
  coverage: {
    eyebrow: string;
    heading: string;
    areas: { name: string; time: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    eyebrow: string;
    heading: [string, string];
    subtext: string;
  };
  footer: {
    copyrightName: string;
    tagline: string;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    jsonLd: {
      telephone: string;
      areaServed: string[];
      addressRegion: string;
      addressCountry: string;
      // Omit until a real, verified rating/review count is known.
      aggregateRating?: { value: string; count: string };
    };
  };
};
