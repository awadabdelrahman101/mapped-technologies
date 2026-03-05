import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { createMetadata } from "@/lib/metadata";
import { jsonLd } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About — Our Story, Mission & Medical Research Background",
  description:
    "Mapped Technologies was founded by physicians and researchers from leading US and international institutions who partnered with AI engineers to build research-grade software for medical science.",
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
            "Research-grade software for medical science, founded by physicians and researchers from leading institutions.",
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
              The tools didn&apos;t exist. So we built them.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 max-w-2xl space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground/80">
                Every systematic review we ran followed the same pattern:
                months of manual work, decisions buried in spreadsheets,
                errors that surfaced too late to trace, and evidence that
                aged faster than we could publish it. We knew something had
                to change — because we were the ones living with the
                consequences.
              </p>
              <p className="leading-relaxed">
                We are physicians and medical researchers working across
                leading academic medical centers and research institutions in
                the United States, with collaborators at healthcare systems
                internationally, including the NHS. For years, we shared the
                same frustrations: multi-site studies slowed by institutional
                bureaucracy, screening workflows where more than one in ten
                decisions contained errors, and completed reviews that became
                outdated before they could shape clinical guidelines.
              </p>
              <p className="leading-relaxed">
                We didn&apos;t set out to start a technology company. We set
                out to solve a problem we encountered every day. The gap
                between what evidence synthesis demands and what existing
                tools provide had been widening for years — and no one was
                building what we actually needed.
              </p>
              <p className="leading-relaxed">
                By early 2025, that changed. A new generation of AI
                infrastructure reached the level of reliability required for
                research-grade applications — capable enough to handle the
                mechanical burden of evidence synthesis, while keeping
                researchers in full control of every scientific judgment.
                That moment of convergence brought our clinical researchers
                together with engineers from leading medical technology
                companies who understood both the technical possibilities and
                the regulatory realities of healthcare software.
              </p>
              <p className="leading-relaxed">
                Together, we made a decision: stop adapting to tools that
                weren&apos;t designed for how research actually works, and
                start building the infrastructure that should have existed
                all along. Mapped Technologies is the result — a company
                founded by the people who use the tools, for the people who
                use the tools.
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
              <h2 className="mt-4 max-w-2xl font-brand text-2xl font-semibold tracking-tight md:text-3xl">
                Medical evidence is the foundation of patient care. The
                process for producing it is failing.
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
                  Consider the scale of the problem. A single systematic
                  review consumes an average of 1,139 hours — nearly eight
                  months of full-time effort distributed across a research
                  team. Human reviewers make errors in more than one out of
                  every ten screening decisions. Nearly a third of registered
                  review protocols are abandoned before completion. And of
                  the reviews that do reach publication, almost two-thirds
                  are never updated.
                </p>
                <p className="leading-relaxed">
                  The evidence that clinical guidelines depend on is being
                  produced by a process that is slow, error-prone, and
                  largely manual. When Cochrane attempted living systematic
                  reviews during COVID-19 — the moment when continuously
                  updated evidence mattered most — half of their living
                  reviews went unmodified by mid-2023. Only one in
                  twenty-five successfully communicated its living status to
                  readers.
                </p>
                <p className="leading-relaxed">
                  Meanwhile, the regulatory environment is accelerating. The
                  FDA launched its RWE-ACCELERATE initiative and shifted to
                  accepting a single pivotal trial for drug approval. The
                  EMA&apos;s DARWIN EU network now spans 40 data partners
                  covering 160 million patients. Regulators are building the
                  infrastructure for continuous evidence. The question is
                  whether the research community has the tools to meet them
                  there.
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
                From tools that assist to infrastructure that transforms
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  The evidence synthesis landscape today includes 388
                  identified AI tools. Only 2% of them attempt end-to-end
                  automation. The rest address individual steps — screening
                  assistants, extraction helpers, statistical calculators.
                  Useful in isolation. Insufficient for the shift that
                  regulators, institutions, and patients are demanding.
                </p>
                <p className="leading-relaxed">
                  We are building something different: complete,
                  production-grade research platforms that cover the full
                  evidence lifecycle. Not tools that assist one step of a
                  broken workflow, but infrastructure that reimagines the
                  workflow itself — where AI handles the mechanical burden
                  and researchers retain full authority over every scientific
                  decision.
                </p>
                <p className="leading-relaxed">
                  Our first product, mapped, covers the complete systematic
                  review workflow from research question to published
                  manuscript. Our next — a living evidence platform for drug
                  interventions and diagnostic accuracy — is designed for
                  the regulatory world that is already taking shape: one
                  where evidence is expected to stay current, auditable, and
                  ready for submission at any point, not published once and
                  left to gather dust.
                </p>
                <p className="leading-relaxed">
                  We believe the next decade of medical research will be
                  defined by the quality of its infrastructure. We intend to
                  build it.
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
