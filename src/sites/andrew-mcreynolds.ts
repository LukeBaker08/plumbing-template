// PITCH MOCKUP — not published. Content is intentionally generic:
// no invented years-trading, ratings, licensing/insurance status, or
// suburb-level response times. Confirm real details with the business
// before this is used for anything beyond an internal demo, and swap
// in a real hero photo before it goes any further.
import { Wrench, Droplets, Flame, ShowerHead, Bath, ClipboardCheck, MapPin, Clock } from "lucide-react";

import type { SiteConfig } from "./types";

export const andrewMcreynolds: SiteConfig = {
  id: "andrew-mcreynolds",
  business: {
    name: "Andrew McReynolds Plumbing",
    shortName: "Andrew McReynolds",
    phone: "0402 921 111",
    phoneHref: "tel:+61402921111",
  },
  hero: {
    eyebrow: "Plumber · ACT & surrounding NSW",
    heading: ["Plumbing,", "sorted."],
    subheading:
      "Straightforward plumbing services with clear pricing and a fast response — from everyday repairs to bigger renovation jobs.",
  },
  theme: {
    primary: "oklch(0.62 0.16 250)", // blue
    accent: "oklch(0.5 0.16 240)",
  },
  trust: [
    { k: "Local", v: "ACT-based tradesperson" },
    { k: "Upfront", v: "Transparent pricing" },
    { k: "Prompt", v: "Fast callbacks" },
    { k: "Quality", v: "Careful workmanship" },
  ],
  services: {
    eyebrow: "What I do",
    heading: "From everyday fixes to full renovations.",
    items: [
      { icon: Droplets, title: "Blocked Drains", body: "Diagnosis and clearing for slow or blocked drains, with a clear explanation before any work starts." },
      { icon: Flame, title: "Hot Water Systems", body: "Repairs, installs and replacements for gas and electric systems." },
      { icon: Wrench, title: "Burst Pipes", body: "Fast response to locate and repair pipe bursts and leaks." },
      { icon: ShowerHead, title: "Leaking Taps & Toilets", body: "Repair or replacement to stop water waste." },
      { icon: Bath, title: "Bathroom Renovations", body: "Plumbing for bathroom updates, from a single fixture to a full renovation." },
      { icon: ClipboardCheck, title: "Maintenance Checks", body: "Inspections to catch small issues before they become expensive ones." },
    ],
  },
  about: {
    eyebrow: "About",
    heading: ["Andrew McReynolds.", "Straightforward plumbing, done right."],
    paragraphs: [
      "Plumbing services for the ACT and surrounding NSW, with a focus on clear communication and tidy work.",
      "Every job starts with a proper look at the problem and a clear price before anything begins.",
    ],
    badges: [
      { icon: Wrench, label: "Hands-on tradesperson" },
      { icon: MapPin, label: "Local to the area" },
      { icon: Clock, label: "Prompt service" },
    ],
  },
  coverage: {
    eyebrow: "Service area",
    heading: "Where I work.",
    areas: [{ name: "ACT & surrounding NSW", time: "Contact to confirm availability" }],
  },
  faq: {
    eyebrow: "Common questions",
    heading: "Questions? Just ask.",
    items: [
      { q: "Do you provide upfront pricing?", a: "Yes — the job is assessed and explained first, with a clear price given before work starts." },
      { q: "What areas do you service?", a: "The ACT and surrounding NSW. Get in touch to confirm coverage for your location." },
      { q: "How do I get a quote?", a: "Call or message with a description of the job and photos if you have them, and you'll get a response with next steps." },
      { q: "What payment methods are accepted?", a: "Get in touch to confirm current payment options." },
    ],
  },
  finalCta: {
    eyebrow: "Need a plumber?",
    heading: ["Get in touch.", "Let's sort it."],
    subtext: "Contact Andrew McReynolds Plumbing to discuss your job.",
  },
  footer: {
    copyrightName: "Andrew McReynolds Plumbing",
    tagline: "Serving ACT & NSW",
  },
  seo: {
    title: "Andrew McReynolds Plumbing — ACT & NSW",
    description:
      "Plumbing services across the ACT and surrounding NSW. Upfront pricing and clear communication. Call 0402 921 111.",
    ogTitle: "Andrew McReynolds Plumbing",
    ogDescription: "Plumbing services across the ACT and surrounding NSW.",
    jsonLd: {
      telephone: "+61402921111",
      areaServed: ["Australian Capital Territory", "New South Wales"],
      addressRegion: "ACT",
      addressCountry: "AU",
    },
  },
};
