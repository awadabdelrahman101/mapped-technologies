import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Software products by Mapped Technologies LLC. Our portfolio of research-grade tools for medical science.",
  path: "/products",
});

const products = [
  {
    name: "mapped",
    category: "Systematic Reviews",
    status: "Live" as const,
    description:
      "The complete AI-powered platform for systematic reviews and meta-analyses. Covers all eight steps of the workflow — from research question to published manuscript — with three purpose-built AI models and ten integrated research databases.",
    url: "https://mappedresearch.com",
    features: [
      "Full 8-step systematic review workflow",
      "Three purpose-built AI models",
      "Real-time multi-author collaboration",
      "Complete audit trail and reproducibility",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Products
            </p>
            <h1 className="mt-4 font-brand text-3xl font-semibold tracking-tight md:text-4xl">
              What we build
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Research-grade tools designed for the standards medical science
              demands. Each product is built with data integrity,
              reproducibility, and clinical rigor at its core.
            </p>
          </FadeIn>
        </section>

        {/* Active Products */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            {products.map((product) => (
              <FadeIn key={product.name}>
                <div className="rounded-lg border border-border/50 p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="font-brand text-2xl font-semibold tracking-tight">
                          {product.name}
                        </h2>
                        <span className="rounded-full border border-border/50 px-2.5 py-0.5 text-xs text-muted-foreground">
                          {product.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {product.category}
                      </p>
                    </div>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Visit
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <ul className="mt-6 grid gap-2 md:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="block h-1 w-1 rounded-full bg-muted-foreground/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="border-t border-border/50">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                In Development
              </p>
              <h2 className="mt-4 font-brand text-xl font-semibold tracking-tight md:text-2xl">
                More tools on the way
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                We&apos;re expanding our portfolio of research tools. New
                products are in development and will be announced when they meet
                our quality standards.
              </p>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[1, 2].map((i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-border/50">
                    <p className="text-sm text-muted-foreground/50">
                      Coming soon
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
