import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  Bath,
  ClipboardCheck,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: "Sheridan Godfrey Plumbing",
          telephone: "+61401661299",
          areaServed: ["Australian Capital Territory", "New South Wales"],
          priceRange: "$$",
          image: "/favicon.ico",
          address: { "@type": "PostalAddress", addressRegion: "ACT", addressCountry: "AU" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "27" },
        }),
      },
    ],
  }),
  component: Home,
});

const PHONE = "0401 661 299";
const PHONE_HREF = "tel:+61401661299";

const services = [
  { icon: Droplets, title: "Blocked Drains", body: "Fast diagnosis and clearing with CCTV inspection available. Same-day service for emergencies." },
  { icon: Flame, title: "Hot Water Systems", body: "Repair, install or replace. Gas and electric. All brands, fast turnaround." },
  { icon: Wrench, title: "Burst Pipes", body: "24/7 emergency response. Locate and repair to minimise water damage to your home." },
  { icon: ShowerHead, title: "Leaking Taps & Toilets", body: "Repair or replacement. Stop wasting water — same-day fix in most cases." },
  { icon: Bath, title: "Bathroom Renovations", body: "Complete plumbing for bathroom updates. Taps, showers, vanities, coordinated end-to-end." },
  { icon: ClipboardCheck, title: "Maintenance Checks", body: "Regular inspections catch issues early and prevent costly problems down the track." },
];

const areas = [
  { name: "Bungendore & Local", time: "30–45 min response" },
  { name: "Queanbeyan & Jerrabomberra", time: "45–60 min" },
  { name: "Canberra (all suburbs)", time: "45–75 min" },
  { name: "Emergency 24/7", time: "Call anytime" },
];

const faqs = [
  { q: "How quickly can you respond to emergencies?", a: "I aim for fast response times. Call anytime — 24/7 availability for genuine emergencies like burst pipes or gas leaks. Response depends on location and current workload, but emergencies are always prioritised." },
  { q: "Do you provide upfront pricing?", a: "Yes. I diagnose first, explain the issue clearly, then give you a fixed quote before any work starts. No surprises. If you're not happy with the price, you don't have to proceed." },
  { q: "What areas do you service?", a: "The ACT and surrounding NSW regions — Bungendore, Queanbeyan, and the wider Canberra area. Call to confirm coverage for your location." },
  { q: "Are you licensed and insured?", a: "Fully licensed in the ACT, insured, and all work meets Australian standards. Safety testing is completed on every job." },
  { q: "Do you offer payment options?", a: "Cash, bank transfer and card. For larger jobs we can discuss payment arrangements that work for you." },
];

function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Coverage />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 hairline-bottom">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Wrench className="h-4 w-4" />
          </span>
          <span className="text-base">Sheridan Godfrey</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#coverage" className="hover:text-foreground transition">Coverage</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" /> {PHONE}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Licensed plumber · ACT & surrounding NSW
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            Plumbing done<br />
            <span className="italic text-primary">properly.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Ten years of honest diagnostics, upfront pricing and fast response — from burst pipes at 2 a.m. to bathroom renovations you'll live with for a decade.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-hairline px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface transition"
            >
              See services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-hairline">
            <img
              src={heroImg}
              alt="Sheridan Godfrey working on a chrome sink trap"
              width={1600}
              height={1200}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/85 backdrop-blur border border-hairline px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-semibold">24/7 emergency</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold">5.0</span>
                <span className="text-muted-foreground">Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { k: "10+", v: "Years trading" },
    { k: "Licensed", v: "& fully insured" },
    { k: "5.0★", v: "Google rating" },
    { k: "24/7", v: "Emergency line" },
  ];
  return (
    <section className="hairline-top hairline-bottom bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.v} className="text-center md:text-left">
            <div className="font-display text-3xl font-semibold text-foreground">{i.k}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">What I do</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          From 2 a.m. emergencies to the reno you've been planning for years.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline rounded-xl overflow-hidden border border-hairline">
        {services.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-background p-8 hover:bg-surface transition group">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-surface-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="hairline-top bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Sheridan Godfrey.<br /><span className="italic text-muted-foreground">Local, licensed, straight-talking.</span>
          </h2>
        </div>
        <div className="md:col-span-3 space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            I've been plumbing the ACT and surrounding NSW for over a decade. Most of my work comes from repeat customers and their neighbours — that only happens if you show up when you said you would and charge what you quoted.
          </p>
          <p>
            Every job starts with a proper diagnosis and a fixed price before I lift a tool. If it's an emergency, I'll be there. If it's a renovation, I'll walk it through with you first.
          </p>
          <div className="flex flex-wrap gap-6 pt-4 hairline-top">
            <Badge icon={ShieldCheck} label="ACT licensed" />
            <Badge icon={ShieldCheck} label="Fully insured" />
            <Badge icon={Star} label="5.0 Google rating" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }: { icon: typeof ShieldCheck; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-foreground">
      <Icon className="h-4 w-4 text-primary" />
      {label}
    </div>
  );
}

function Coverage() {
  return (
    <section id="coverage" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">Service coverage</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Response times, honestly stated.
        </h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {areas.map((a) => (
          <div key={a.name} className="p-6 rounded-xl border border-hairline bg-surface/40 hover:bg-surface transition">
            <MapPin className="h-5 w-5 text-primary" />
            <div className="mt-6 text-base font-semibold text-foreground">{a.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{a.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="hairline-top bg-surface/30">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">Common questions</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-14">
          Straight answers.
        </h2>
        <div className="divide-y divide-hairline border-y border-hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 -mt-2 text-muted-foreground leading-relaxed max-w-3xl">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="hairline-top">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">Need a plumber?</p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
          Pick up the phone.<br />
          <span className="italic text-primary">I'll pick up mine.</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">
          Emergency service available 24/7 across the ACT and surrounding NSW.
        </p>
        <a
          href={PHONE_HREF}
          className="mt-10 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          <Phone className="h-5 w-5" /> {PHONE}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hairline-top py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Sheridan Godfrey Plumbing</div>
        <div>Licensed & insured · Serving ACT & NSW</div>
      </div>
    </footer>
  );
}
