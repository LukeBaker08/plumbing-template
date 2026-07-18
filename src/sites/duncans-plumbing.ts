// PITCH MOCKUP — not published. Content is intentionally generic:
// no invented years-trading, ratings, licensing/insurance status, or
// suburb-level response times. Confirm real details with the business
// before this is used for anything beyond an internal demo, and swap
// in a real hero photo before it goes any further.
import { Wrench, Droplets, Flame, ShowerHead, Bath, ClipboardCheck, MapPin, Clock } from "lucide-react";

import type { SiteConfig } from "./types";

export const duncansPlumbing: SiteConfig = {
  id: "duncans-plumbing",
  business: {
    name: "Duncan's Plumbing",
    shortName: "Duncan's Plumbing",
    phone: "0413 545 678",
    phoneHref: "tel:+61413545678",
  },
  hero: {
    eyebrow: "Plumber · ACT & surrounding NSW",
    heading: ["Reliable plumbing,", "done well."],
    subheading:
      "Practical plumbing solutions with straight talk and fair pricing — from small repairs to full jobs.",
  },
  theme: {
    primary: "oklch(0.6 0.14 165)", // teal/green
    accent: "oklch(0.45 0.14 170)",
  },
  trust: [
    { k: "Local", v: "ACT-based" },
    { k: "Fair", v: "Honest pricing" },
    { k: "Reliable", v: "Shows up on time" },
    { k: "Careful", v: "Tidy work" },
  ],
  services: {
    eyebrow: "What we do",
    heading: "From small repairs to full jobs.",
    items: [
      { icon: Droplets, title: "Blocked Drains", body: "Diagnosis and clearing of slow or blocked drains, explained clearly before work starts." },
      { icon: Flame, title: "Hot Water Systems", body: "Repair, install or replace — gas and electric systems." },
      { icon: Wrench, title: "Burst Pipes", body: "Prompt response to locate and repair bursts and leaks." },
      { icon: ShowerHead, title: "Leaking Taps & Toilets", body: "Repair or replacement to stop water waste." },
      { icon: Bath, title: "Bathroom Renovations", body: "Plumbing for bathroom updates, coordinated end-to-end." },
      { icon: ClipboardCheck, title: "Maintenance Checks", body: "Regular checks to catch issues before they become costly." },
    ],
  },
  about: {
    eyebrow: "About",
    heading: ["Duncan's Plumbing.", "Practical, straight-talking service."],
    paragraphs: [
      "Plumbing work across the ACT and surrounding NSW, with an emphasis on doing the job properly the first time.",
      "A clear look at the problem and a fair price before any work begins.",
    ],
    badges: [
      { icon: Wrench, label: "Hands-on tradesperson" },
      { icon: MapPin, label: "Local to the area" },
      { icon: Clock, label: "Reliable scheduling" },
    ],
  },
  coverage: {
    eyebrow: "Service area",
    heading: "Where we work.",
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
    eyebrow: "Need it fixed?",
    heading: ["Get in touch.", "We'll sort it."],
    subtext: "Contact Duncan's Plumbing to discuss your job.",
  },
  footer: {
    copyrightName: "Duncan's Plumbing",
    tagline: "Serving ACT & NSW",
  },
  seo: {
    title: "Duncan's Plumbing — ACT & NSW",
    description:
      "Plumbing services across the ACT and surrounding NSW. Fair pricing and reliable service. Call 0413 545 678.",
    ogTitle: "Duncan's Plumbing",
    ogDescription: "Plumbing services across the ACT and surrounding NSW.",
    jsonLd: {
      telephone: "+61413545678",
      areaServed: ["Australian Capital Territory", "New South Wales"],
      addressRegion: "ACT",
      addressCountry: "AU",
    },
  },
};
