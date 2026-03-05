import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Legal",
  description:
    "Privacy Policy and Terms of Service for Mapped Technologies LLC.",
  path: "/legal",
  noindex: true,
});

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Legal
            </p>
            <h1 className="mt-4 font-brand text-3xl font-semibold tracking-tight md:text-4xl">
              Privacy &amp; Terms
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: March 2026
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-12 space-y-8">
              {/* Privacy Policy */}
              <div>
                <h2 className="font-brand text-xl font-semibold tracking-tight">
                  Privacy Policy
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Mapped Technologies LLC, a Wyoming limited liability company
                    (&ldquo;Mapped Technologies,&rdquo; &ldquo;we,&rdquo;
                    &ldquo;our,&rdquo; or &ldquo;us&rdquo;), is committed to
                    protecting the privacy of visitors to this website
                    (mappedtechnologies.com).
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    Information We Collect
                  </h3>
                  <p>
                    We collect information you voluntarily provide through our
                    contact form, including your name, email address, and
                    message content. We also collect standard web analytics data
                    (page views, browser type, approximate location) through
                    Vercel Analytics.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    How We Use Information
                  </h3>
                  <p>
                    Contact form submissions are used solely to respond to your
                    inquiry. Analytics data is used to understand how visitors
                    use our website and to improve the experience. We do not
                    sell, rent, or share your personal information with third
                    parties for marketing purposes.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    Data Retention
                  </h3>
                  <p>
                    Contact form data is retained only as long as necessary to
                    respond to your inquiry. Analytics data is retained in
                    aggregate form and does not identify individual users.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">Cookies</h3>
                  <p>
                    This website uses essential cookies for functionality (such
                    as theme preference). We do not use tracking cookies or
                    third-party advertising cookies.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    Your Rights
                  </h3>
                  <p>
                    You may request access to, correction of, or deletion of
                    any personal information we hold about you by contacting us
                    at{" "}
                    <a
                      href="mailto:hello@mappedtechnologies.com"
                      className="text-foreground underline underline-offset-4"
                    >
                      hello@mappedtechnologies.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              <Separator />

              {/* Terms of Service */}
              <div>
                <h2 className="font-brand text-xl font-semibold tracking-tight">
                  Terms of Service
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    By accessing mappedtechnologies.com, you agree to these
                    terms. This website is operated by Mapped Technologies LLC,
                    a Wyoming limited liability company.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    Use of Website
                  </h3>
                  <p>
                    This website is provided for informational purposes about
                    Mapped Technologies LLC and its products. You may browse the
                    website and use the contact form for legitimate inquiries.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    Intellectual Property
                  </h3>
                  <p>
                    All content on this website, including text, design, logos,
                    and branding, is the property of Mapped Technologies LLC
                    and is protected by applicable intellectual property laws.
                    &ldquo;mapped,&rdquo; the mapped logo, and
                    &ldquo;Mapped Technologies&rdquo; are trademarks of Mapped
                    Technologies LLC.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    Product Terms
                  </h3>
                  <p>
                    Individual products operated by Mapped Technologies LLC
                    (such as mapped at mappedresearch.com) are governed by their
                    own terms of service. This page covers only the corporate
                    website.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    Limitation of Liability
                  </h3>
                  <p>
                    This website is provided &ldquo;as is&rdquo; without
                    warranties of any kind. Mapped Technologies LLC shall not
                    be liable for any damages arising from your use of this
                    website.
                  </p>

                  <h3 className="pt-2 font-medium text-foreground">
                    Governing Law
                  </h3>
                  <p>
                    These terms are governed by the laws of the State of
                    Wyoming, United States of America.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Contact */}
              <div className="rounded-lg border border-border/50 p-6">
                <p className="font-medium text-foreground">
                  Mapped Technologies LLC
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  30 N Gould St, STE R, Sheridan, WY 82801, USA
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <a
                    href="mailto:hello@mappedtechnologies.com"
                    className="text-foreground underline underline-offset-4"
                  >
                    hello@mappedtechnologies.com
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
