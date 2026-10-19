import { ImageResponse } from "next/og"

export const alt = "ABC of Cyber"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#020617",
          color: "white",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#bfdbfe",
          }}
        >
          ABC of Cyber
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            marginTop: 28,
            maxWidth: 980,
          }}
        >
          Cyber security for teams allergic to nonsense
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 36,
            color: "#cbd5e1",
          }}
        >
          Slightly unhinged copy. Very little panic.
        </div>
      </div>
    ),
    { ...size },
  )
}
