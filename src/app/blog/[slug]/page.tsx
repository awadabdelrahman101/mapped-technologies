import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { jsonLd } from "@/lib/metadata";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Mapped Technologies`,
    description: post.description,
    alternates: {
      canonical: `https://mappedtechnologies.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://mappedtechnologies.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: post.author,
            url: "https://mappedtechnologies.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Mapped Technologies LLC",
            url: "https://mappedtechnologies.com",
          },
          mainEntityOfPage: `https://mappedtechnologies.com/blog/${slug}`,
        })}
      />

      <Navbar />
      <main className="pt-16">
        <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <FadeIn>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/50 px-2 py-0.5 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-6 font-brand text-3xl font-semibold tracking-tight md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {post.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none prose-headings:font-brand prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-foreground prose-a:underline prose-a:underline-offset-4">
              <MDXRemote source={post.content} />
            </div>
          </FadeIn>
        </article>
      </main>
      <Footer />
    </>
  );
}
