"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Contact
                </p>
                <h1 className="mt-4 font-brand text-3xl font-semibold tracking-tight md:text-4xl">
                  Get in touch
                </h1>
                <p className="mt-4 text-muted-foreground">
                  Whether you have a question about our products, want to
                  discuss a partnership, or just want to learn more about what
                  we&apos;re building — we&apos;d like to hear from you.
                </p>

                <div className="mt-10 space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@mappedtechnologies.com"
                      className="transition-colors hover:text-foreground"
                    >
                      hello@mappedtechnologies.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p>30 N Gould St, STE R</p>
                    <p>Sheridan, WY 82801, USA</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                      ? "Message sent"
                      : "Send message"}
                  {status === "idle" && <ArrowRight size={14} />}
                </button>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
