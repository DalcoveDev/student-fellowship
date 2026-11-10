import { ImageResponse } from "next/og";

export const alt =
  "Christian Students Network — making disciples of Jesus Christ among students in Rwanda";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e241d",
          color: "#faf7f0",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -200,
            width: 620,
            height: 620,
            borderRadius: 9999,
            border: "2px solid rgba(196, 147, 64, 0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: -260,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "2px solid rgba(250, 247, 240, 0.12)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 2,
              background: "#c49340",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#e8cfa0",
              fontWeight: 600,
            }}
          >
            Christian Students Network · Rwanda
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.05,
              maxWidth: 900,
              letterSpacing: -2,
              fontWeight: 700,
            }}
          >
            Making disciples of Jesus Christ among students in Rwanda.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(250, 247, 240, 0.65)",
              maxWidth: 780,
              lineHeight: 1.4,
            }}
          >
            Bible study · Campus fellowships · Conferences · Online ministry
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(250, 247, 240, 0.18)",
            paddingTop: 26,
            fontSize: 24,
            color: "rgba(250, 247, 240, 0.55)",
          }}
        >
          <div style={{ display: "flex" }}>Rooted in the Word</div>
          <div style={{ display: "flex", color: "#e8cfa0" }}>
            christianstudentsnetwork.org
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
