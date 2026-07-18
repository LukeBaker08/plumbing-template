import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Wrench, ChevronDown, MapPin, Clock, Star, ArrowRight } from "lucide-react";

import { getActiveSite } from "@/sites";
import type { SiteConfig } from "@/sites/types";

const site = getActiveSite();

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: site.business.name,
          telephone: site.seo.jsonLd.telephone,
          areaServed: site.seo.jsonLd.areaServed,
          priceRange: "$$",
          image: "/favicon.ico",
          address: {
            "@type": "PostalAddress",
            addressRegion: site.seo.jsonLd.addressRegion,
            addressCountry: site.seo.jsonLd.addressCountry,
          },
          ...(site.seo.jsonLd.aggregateRating && {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: site.seo.jsonLd.aggregateRating.value,
              reviewCount: site.seo.jsonLd.aggregateRating.count,
            },
          }),
        }),
      },
    ],
  }),
  component: Home,
});

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
          <span className="text-base">{site.business.shortName}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#coverage" className="hover:text-foreground transition">Coverage</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={site.business.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" /> {site.business.phone}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [line1, line2] = site.hero.heading;
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {site.hero.eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            {line1}<br />
            <span className="italic text-primary">{line2}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">{site.hero.subheading}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.business.phoneHref}
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> Call {site.business.phone}
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
            {site.hero.image ? (
              <img
                src={site.hero.image}
                alt={site.hero.imageAlt}
                width={1600}
                height={1200}
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            ) : (
              <div className="w-full h-[420px] md:h-[520px] bg-surface-2 flex items-center justify-center">
                <Wrench className="h-16 w-16 text-primary/40" />
              </div>
            )}
            {site.hero.badges && site.hero.badges.length > 0 && (
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/85 backdrop-blur border border-hairline px-4 py-3 flex items-center justify-between">
                {site.hero.badges.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="hairline-top hairline-bottom bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {site.trust.map((i) => (
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
        <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">{site.services.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{site.services.heading}</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline rounded-xl overflow-hidden border border-hairline">
        {site.services.items.map(({ icon: Icon, title, body }) => (
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
  const [line1, line2] = site.about.heading;
  return (
    <section id="about" className="hairline-top bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">{site.about.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            {line1}<br /><span className="italic text-muted-foreground">{line2}</span>
          </h2>
        </div>
        <div className="md:col-span-3 space-y-6 text-muted-foreground text-lg leading-relaxed">
          {site.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-6 pt-4 hairline-top">
            {site.about.badges.map((b) => (
              <Badge key={b.label} icon={b.icon} label={b.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }: { icon: SiteConfig["about"]["badges"][number]["icon"]; label: string }) {
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
        <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">{site.coverage.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{site.coverage.heading}</h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {site.coverage.areas.map((a) => (
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
        <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">{site.faq.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-14">{site.faq.heading}</h2>
        <div className="divide-y divide-hairline border-y border-hairline">
          {site.faq.items.map((f, i) => {
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
  const [line1, line2] = site.finalCta.heading;
  return (
    <section className="hairline-top">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-primary mb-4">{site.finalCta.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
          {line1}<br />
          <span className="italic text-primary">{line2}</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">{site.finalCta.subtext}</p>
        <a
          href={site.business.phoneHref}
          className="mt-10 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          <Phone className="h-5 w-5" /> {site.business.phone}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hairline-top py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} {site.footer.copyrightName}</div>
        <div>{site.footer.tagline}</div>
      </div>
    </footer>
  );
}
