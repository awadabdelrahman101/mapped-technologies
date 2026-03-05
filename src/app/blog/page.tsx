import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { createMetadata } from "@/lib/metadata";
import { jsonLd } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";

export const metadata = createMetadata({
  title: "Blog — Medical Research Technology Insights",
  description:
    "Insights on medical research technology, living evidence synthesis, FDA regulatory updates, and AI-powered evidence synthesis from Mapped Technologies.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Mapped Technologies Blog",
          description:
            "Insights on medical research technology, living evidence synthesis, and regulatory developments.",
          url: "https://mappedtechnologies.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Mapped Technologies LLC",
            url: "https://mappedtechnologies.com",
          },
        })}
      />

      <Navbar />
      <main className="pt-16">
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Blog
            </p>
            <h1 className="mt-4 font-brand text-3xl font-semibold tracking-tight md:text-4xl">
              Insights &amp; Updates
            </h1>
            <p className="mt-4 text-muted-foreground">
              Company news, regulatory developments, and perspectives on the
              future of evidence synthesis.
            </p>
          </FadeIn>
        </section>

        <section className="border-t border-border/50">
          <div className="mx-auto max-w-3xl px-6 py-12">
            <div className="space-y-0 divide-y divide-border/50">
              {posts.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.05}>
                  <article className="py-8">
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        {post.tags.length > 0 && (
                          <>
                            <span className="text-border">|</span>
                            <span>{post.tags[0]}</span>
                          </>
                        )}
                      </div>
                      <h2 className="mt-2 font-brand text-lg font-semibold tracking-tight transition-opacity group-hover:opacity-70">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {post.description}
                      </p>
                    </Link>
                  </article>
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
