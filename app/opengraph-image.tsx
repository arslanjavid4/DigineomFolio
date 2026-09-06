import { ImageResponse } from "next/og";

export const alt =
  "Hire vetted remote talent from Pakistan | DigiNeom";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1863dc",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.04em",
          }}
        >
          DigiNeom
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.055em",
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            Hire vetted remote talent from Pakistan.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.35,
              color: "#c7dbff",
              maxWidth: 820,
            }}
          >
            Degree-verified Pakistani engineers for Europe and North America,
            working from co-working spaces we manage.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
