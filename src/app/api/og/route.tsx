import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Mapped Technologies";
  const description =
    searchParams.get("description") ||
    "Research-grade software for medical science";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#171717",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 18,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#a3a3a3",
            marginBottom: 16,
          }}
        >
          Mapped Technologies LLC
        </p>
        <h1
          style={{
            fontSize: 52,
            fontWeight: 600,
            lineHeight: 1.2,
            maxWidth: 800,
            margin: 0,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 22,
            color: "#a3a3a3",
            marginTop: 24,
            maxWidth: 600,
          }}
        >
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
