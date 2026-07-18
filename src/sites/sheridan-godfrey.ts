import {
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  Bath,
  ClipboardCheck,
  ShieldCheck,
  Star,
  Clock,
} from "lucide-react";

import heroImg from "@/assets/sites/sheridan-godfrey/hero.jpg";
import type { SiteConfig } from "./types";

export const sheridanGodfrey: SiteConfig = {
  id: "sheridan-godfrey",
  business: {
    name: "Sheridan Godfrey Plumbing",
    shortName: "Sheridan Godfrey",
    phone: "0401 661 299",
    phoneHref: "tel:+61401661299",
  },
  hero: {
    eyebrow: "Licensed plumber · ACT & surrounding NSW",
    heading: ["Plumbing done", "properly."],
    subheading:
      "Ten years of honest diagnostics, upfront pricing and fast response — from burst pipes at 2 a.m. to bathroom renovations you'll live with for a decade.",
    image: heroImg,
    imageAlt: "Sheridan Godfrey working on a chrome sink trap",
    badges: [
      { icon: Clock, label: "24/7 emergency" },
      { icon: Star, label: "5.0 Google" },
    ],
  },
  theme: {
    primary: "oklch(0.72 0.16 55)", // warm copper
    accent: "oklch(0.55 0.20 30)", // deep terracotta
  },
  trust: [
    { k: "10+", v: "Years trading" },
    { k: "Licensed", v: "& fully insured" },
    { k: "5.0★", v: "Google rating" },
    { k: "24/7", v: "Emergency line" },
  ],
  services: {
    eyebrow: "What I do",
    heading: "From 2 a.m. emergencies to the reno you've been planning for years.",
    items: [
      { icon: Droplets, title: "Blocked Drains", body: "Fast diagnosis and clearing with CCTV inspection available. Same-day service for emergencies." },
      { icon: Flame, title: "Hot Water Systems", body: "Repair, install or replace. Gas and electric. All brands, fast turnaround." },
      { icon: Wrench, title: "Burst Pipes", body: "24/7 emergency response. Locate and repair to minimise water damage to your home." },
      { icon: ShowerHead, title: "Leaking Taps & Toilets", body: "Repair or replacement. Stop wasting water — same-day fix in most cases." },
      { icon: Bath, title: "Bathroom Renovations", body: "Complete plumbing for bathroom updates. Taps, showers, vanities, coordinated end-to-end." },
      { icon: ClipboardCheck, title: "Maintenance Checks", body: "Regular inspections catch issues early and prevent costly problems down the track." },
    ],
  },
  about: {
    eyebrow: "About",
    heading: ["Sheridan Godfrey.", "Local, licensed, straight-talking."],
    paragraphs: [
      "I've been plumbing the ACT and surrounding NSW for over a decade. Most of my work comes from repeat customers and their neighbours — that only happens if you show up when you said you would and charge what you quoted.",
      "Every job starts with a proper diagnosis and a fixed price before I lift a tool. If it's an emergency, I'll be there. If it's a renovation, I'll walk it through with you first.",
    ],
    badges: [
      { icon: ShieldCheck, label: "ACT licensed" },
      { icon: ShieldCheck, label: "Fully insured" },
      { icon: Star, label: "5.0 Google rating" },
    ],
  },
  coverage: {
    eyebrow: "Service coverage",
    heading: "Response times, honestly stated.",
    areas: [
      { name: "Bungendore & Local", time: "30–45 min response" },
      { name: "Queanbeyan & Jerrabomberra", time: "45–60 min" },
      { name: "Canberra (all suburbs)", time: "45–75 min" },
      { name: "Emergency 24/7", time: "Call anytime" },
    ],
  },
  faq: {
    eyebrow: "Common questions",
    heading: "Straight answers.",
    items: [
      { q: "How quickly can you respond to emergencies?", a: "I aim for fast response times. Call anytime — 24/7 availability for genuine emergencies like burst pipes or gas leaks. Response depends on location and current workload, but emergencies are always prioritised." },
      { q: "Do you provide upfront pricing?", a: "Yes. I diagnose first, explain the issue clearly, then give you a fixed quote before any work starts. No surprises. If you're not happy with the price, you don't have to proceed." },
      { q: "What areas do you service?", a: "The ACT and surrounding NSW regions — Bungendore, Queanbeyan, and the wider Canberra area. Call to confirm coverage for your location." },
      { q: "Are you licensed and insured?", a: "Fully licensed in the ACT, insured, and all work meets Australian standards. Safety testing is completed on every job." },
      { q: "Do you offer payment options?", a: "Cash, bank transfer and card. For larger jobs we can discuss payment arrangements that work for you." },
    ],
  },
  finalCta: {
    eyebrow: "Need a plumber?",
    heading: ["Pick up the phone.", "I'll pick up mine."],
    subtext: "Emergency service available 24/7 across the ACT and surrounding NSW.",
  },
  footer: {
    copyrightName: "Sheridan Godfrey Plumbing",
    tagline: "Licensed & insured · Serving ACT & NSW",
  },
  seo: {
    title: "Sheridan Godfrey Plumbing — Licensed Plumber ACT & NSW",
    description:
      "Licensed ACT plumber. 24/7 emergency response for burst pipes, blocked drains and hot water. Upfront pricing, 10+ years experience. Call 0401 661 299.",
    ogTitle: "Sheridan Godfrey Plumbing — Licensed Plumber ACT",
    ogDescription:
      "Professional plumbing across the ACT and surrounding NSW. Emergency response, honest pricing, fully licensed and insured.",
    jsonLd: {
      telephone: "+61401661299",
      areaServed: ["Australian Capital Territory", "New South Wales"],
      addressRegion: "ACT",
      addressCountry: "AU",
      aggregateRating: { value: "5.0", count: "27" },
    },
  },
};
