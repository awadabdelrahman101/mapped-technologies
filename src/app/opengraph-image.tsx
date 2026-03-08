import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mapped Technologies — Research-grade software for medical science";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#888888",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Mapped Technologies LLC
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1.2,
              maxWidth: "800px",
            }}
          >
            Research-grade software for medical science
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#999999",
              maxWidth: "700px",
              lineHeight: 1.6,
              marginTop: "8px",
            }}
          >
            AI-powered tools for systematic reviews, meta-analysis, and evidence
            synthesis.
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#666666",
              marginTop: "24px",
            }}
          >
            mappedtechnologies.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
