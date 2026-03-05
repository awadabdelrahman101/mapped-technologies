import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { jsonLd } from "@/lib/metadata";

const pillars = [
  {
    title: "Research-grade software",
    description:
      "Every tool we build meets the rigor medical research demands. Audit trails, reproducibility, and data integrity are foundational, not afterthoughts.",
  },
  {
    title: "AI with human oversight",
    description:
      "We design AI that suggests, not decides. Researchers remain in control of every conclusion, every recommendation, every output.",
  },
  {
    title: "Evidence that reaches patients",
    description:
      "The best evidence means nothing if it takes years to produce. We compress timelines without compromising quality.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mapped Technologies LLC",
          legalName: "Mapped Technologies LLC",
          url: "https://mappedtechnologies.com",
          description:
            "Building research-grade software for medical science.",
          foundingLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: "30 N Gould St, STE R",
              addressLocality: "Sheridan",
              addressRegion: "Wyoming",
              postalCode: "82801",
              addressCountry: "US",
            },
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "general inquiry",
            url: "https://mappedtechnologies.com/contact",
          },
        })}
      />

      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="flex min-h-[70vh] items-center">
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Mapped Technologies LLC
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 max-w-2xl font-brand text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Research-grade software for medical science
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                We build tools that help medical researchers produce higher-quality
                evidence in less time. Precise, reliable, and designed for the
                standards clinical research demands.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex items-center gap-6">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Our products
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Learn more
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Flagship Product */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Flagship Product
              </p>
              <h2 className="mt-4 font-brand text-2xl font-semibold tracking-tight md:text-3xl">
                mapped
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                The complete AI-powered platform for systematic reviews. From
                research question to published manuscript, mapped covers all
                eight steps of the systematic review workflow.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://mappedresearch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                >
                  mappedresearch.com
                  <ArrowUpRight size={14} />
                </a>
                <span className="rounded-full border border-border/50 px-2.5 py-0.5 text-xs text-muted-foreground">
                  Live
                </span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                What We Believe
              </p>
              <h2 className="mt-4 font-brand text-2xl font-semibold tracking-tight md:text-3xl">
                Principles that guide our work
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {pillars.map((pillar, i) => (
                <FadeIn key={pillar.title} delay={i * 0.1}>
                  <div className="space-y-3">
                    <h3 className="font-brand text-base font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
            <FadeIn>
              <h2 className="font-brand text-2xl font-semibold tracking-tight md:text-3xl">
                Building the future of medical research
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                Interested in what we&apos;re building? We&apos;d like to hear
                from you.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get in touch
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
