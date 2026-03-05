import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Mapped Technologies LLC builds research-grade software for medical science. Learn about our mission, philosophy, and approach.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Mission */}
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              About
            </p>
            <h1 className="mt-4 max-w-2xl font-brand text-3xl font-semibold tracking-tight md:text-4xl">
              Better tools for the people who produce medical evidence
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 max-w-2xl space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                Mapped Technologies LLC is a software company focused on one
                domain: medical research. We build tools that help researchers,
                clinicians, and institutions produce higher-quality evidence in
                less time.
              </p>
              <p className="leading-relaxed">
                Our work starts from a simple observation: the methods used to
                synthesize medical evidence have not kept pace with the volume of
                research being published. Critical systematic reviews take 12 to
                18 months on average, and the majority of first-time reviewers
                abandon the process entirely. This is a tooling problem, not a
                talent problem.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Philosophy */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Philosophy
              </p>
              <h2 className="mt-4 font-brand text-2xl font-semibold tracking-tight md:text-3xl">
                How we approach the work
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-12 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="space-y-3">
                  <h3 className="font-brand text-base font-semibold">
                    Precision before speed
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Medical research software has no room for approximation. We
                    optimize for correctness first, then find ways to make
                    correct processes faster. Never the reverse.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="space-y-3">
                  <h3 className="font-brand text-base font-semibold">
                    Human-in-control AI
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    AI in our products provides suggestions. Researchers make
                    decisions. Every AI recommendation can be reviewed, modified,
                    or rejected. Complete audit trails ensure transparency.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-3">
                  <h3 className="font-brand text-base font-semibold">
                    Built for scrutiny
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Research must be reproducible. Our tools produce outputs that
                    can be audited, verified, and replicated. If it can&apos;t
                    withstand peer review, we don&apos;t ship it.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="space-y-3">
                  <h3 className="font-brand text-base font-semibold">
                    Domain depth over breadth
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We focus exclusively on medical research. This focus allows
                    us to build software that understands the specific workflows,
                    standards, and constraints researchers work within.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Medical Research */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Why This Matters
              </p>
              <h2 className="mt-4 font-brand text-2xl font-semibold tracking-tight md:text-3xl">
                The evidence gap is a patient safety problem
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  Systematic reviews and meta-analyses form the foundation of
                  clinical guidelines — the recommendations that determine how
                  millions of patients are treated. When evidence synthesis is
                  slow, incomplete, or inaccessible, clinical practice falls
                  behind the science.
                </p>
                <p className="leading-relaxed">
                  We believe this gap is solvable with better software. Not by
                  replacing researchers, but by removing the friction that slows
                  them down: manual data extraction, inconsistent screening,
                  fragmented collaboration, and tools that weren&apos;t designed
                  for the complexity of modern evidence synthesis.
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
