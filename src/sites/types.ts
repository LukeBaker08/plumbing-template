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
    image: string;
    imageAlt: string;
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
      aggregateRating: { value: string; count: string };
    };
  };
};
