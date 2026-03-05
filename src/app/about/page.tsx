import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { createMetadata } from "@/lib/metadata";
import { jsonLd } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About — Our Story, Mission & Medical Research Background",
  description:
    "Mapped Technologies was founded by physicians and researchers from Mayo Clinic, MD Anderson, Johns Hopkins, and other leading US institutions who partnered with AI engineers to build research-grade software for medical science.",
  path: "/about",
});

const stats = [
  { value: "1,139", label: "hours per systematic review", source: "Cashion, 2025" },
  { value: "10.76%", label: "human screening error rate", source: "Wang et al., PLOS ONE" },
  { value: "28%", label: "of protocols never completed", source: "Cochrane Bibliographic Study" },
  { value: "64.3%", label: "of reviews never updated", source: "TMC, 2024" },
];

export default function AboutPage() {
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
          foundingDate: "2025",
          description:
            "Research-grade software for medical science, founded by physicians and researchers from leading US institutions.",
          knowsAbout: [
            "Systematic Reviews",
            "Meta-Analysis",
            "Evidence Synthesis",
            "Living Systematic Reviews",
            "AI in Medical Research",
            "Diagnostic Test Accuracy",
            "Real-World Evidence",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "30 N Gould St, STE R",
            addressLocality: "Sheridan",
            addressRegion: "Wyoming",
            postalCode: "82801",
            addressCountry: "US",
          },
          subOrganization: {
            "@type": "Organization",
            name: "mapped",
            url: "https://mappedresearch.com",
          },
        })}
      />

      <Navbar />
      <main className="pt-16">
        {/* Our Story */}
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Our Story
            </p>
            <h1 className="mt-4 max-w-3xl font-brand text-3xl font-semibold tracking-tight md:text-4xl">
              We built what we wished existed
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 max-w-2xl space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                Mapped Technologies was founded by physicians and researchers
                working at institutions including Mayo Clinic, MD Anderson,
                Baylor, the University of Minnesota, and Johns Hopkins. We
                weren&apos;t building software companies. We were running
                systematic reviews, extracting data from thousands of papers,
                and watching months of work get consumed by processes that
                should have taken days.
              </p>
              <p className="leading-relaxed">
                The frustrations were the same across every institution:
                bureaucracy around multi-site collaboration, manual operations
                that consumed entire research cycles, error rates in screening
                that exceeded 10% with no reliable way to trace where mistakes
                originated, and evidence that went stale before it could
                influence clinical practice.
              </p>
              <p className="leading-relaxed">
                By early 2025, a shift in AI infrastructure changed what was
                possible. Frontier models from Anthropic, OpenAI, and Google
                reached a level of capability where they could meaningfully
                assist in complex research tasks — not replace researchers,
                but handle the mechanical work that wasted their time. That
                convergence created a moment.
              </p>
              <p className="leading-relaxed">
                Our clinician-researchers began connecting with AI engineers
                working at Philips and other medical technology companies —
                people who understood both the technical possibilities and the
                regulatory constraints of medical software. Together, we
                decided to stop waiting for someone else to build what we
                needed. We established Mapped Technologies to create
                research-grade tools from the ground up, designed by the
                people who use them.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* The Problem We Saw */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                The Problem
              </p>
              <h2 className="mt-4 font-brand text-2xl font-semibold tracking-tight md:text-3xl">
                Evidence synthesis hasn&apos;t kept pace with the science it
                serves
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-12 grid gap-6 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="font-brand text-2xl font-semibold md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      {stat.source}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-12 max-w-2xl space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  A single systematic review consumes an average of 1,139
                  hours — roughly 30 weeks of full-time work across a research
                  team. Human reviewers make errors in more than one out of
                  every ten screening decisions, across hundreds of thousands
                  of judgments. Nearly a third of registered protocols are
                  abandoned before completion, and of the reviews that do get
                  published, almost two-thirds are never updated.
                </p>
                <p className="leading-relaxed">
                  Meanwhile, Cochrane&apos;s ambitious attempt at living
                  systematic reviews during COVID-19 revealed the limits of
                  current approaches: half of their living reviews went
                  unmodified by mid-2023, and only one out of twenty-five
                  successfully communicated its living status to readers. The
                  methodology exists. The tooling does not.
                </p>
                <p className="leading-relaxed">
                  The gap is widening. Both the FDA and EMA are moving toward
                  continuous, real-time evidence requirements. The FDA
                  launched its RWE-ACCELERATE initiative in 2025 and shifted
                  to a single pivotal trial as the default basis for drug
                  approval in February 2026. The EMA&apos;s DARWIN EU network
                  now spans 40 data partners covering 160 million patients.
                  Regulators are ready for living evidence. Researchers need
                  the tools to produce it.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What We're Building Toward */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Our Vision
              </p>
              <h2 className="mt-4 font-brand text-2xl font-semibold tracking-tight md:text-3xl">
                Next-generation research infrastructure
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  We are building the research infrastructure that the next
                  decade of medical science requires. Not incremental
                  improvements to screening tools, but end-to-end platforms
                  that cover the full lifecycle — from research question to
                  living, continuously updated evidence that meets regulatory
                  standards.
                </p>
                <p className="leading-relaxed">
                  There are 388 AI tools in the evidence synthesis landscape
                  today. Only 2% attempt end-to-end automation. The rest are
                  point solutions for individual steps — useful, but
                  insufficient for the shift toward living evidence that
                  regulators are demanding. We are building what should exist:
                  production-grade platforms where AI handles the mechanical
                  work and researchers retain full control over every
                  scientific decision.
                </p>
                <p className="leading-relaxed">
                  Our first product, mapped, covers the complete systematic
                  review workflow. Our next — a living evidence platform for
                  drug interventions and diagnostic accuracy — is designed
                  for a regulatory world where the FDA, EMA, and national
                  agencies expect evidence to stay current, not gather dust
                  in a journal archive.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Company Info */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <FadeIn>
              <div className="rounded-lg border border-border/50 p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Corporate Information
                </p>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">
                    Mapped Technologies LLC
                  </p>
                  <p>30 N Gould St, STE R</p>
                  <p>Sheridan, WY 82801, USA</p>
                  <p className="mt-3">Wyoming limited liability company</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
