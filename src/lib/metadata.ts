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
  keywords?: string[];
}

const DEFAULT_KEYWORDS = [
  "mapped research",
  "mapped technologies",
  "systematic review software",
  "AI evidence synthesis",
  "living systematic review",
  "medical research tools",
  "meta-analysis platform",
];

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  noindex = false,
  keywords,
}: CreateMetadataOptions = {}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Research-grade software for medical science`;

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Research-grade software for medical science`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
    ...(noindex && {
      robots: { index: false, follow: false },
    }),
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) };
}
