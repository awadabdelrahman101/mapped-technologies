import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us — Get in Touch with Mapped Technologies",
  description:
    "Have a question about our systematic review platform or want to discuss a partnership? Contact Mapped Technologies — research-grade software for medical science.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
