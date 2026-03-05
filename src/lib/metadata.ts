import type { Metadata } from "next";

const SITE_URL = "https://mappedtechnologies.com";
const SITE_NAME = "Mapped Technologies";
const DEFAULT_DESCRIPTION =
  "Building research-grade software for medical science. Mapped Technologies LLC develops tools that help researchers produce better evidence, faster.";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  noindex = false,
}: CreateMetadataOptions = {}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Research-grade software for medical science`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    ...(noindex && {
      robots: { index: false, follow: false },
    }),
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) };
}
