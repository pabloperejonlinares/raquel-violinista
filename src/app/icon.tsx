import { ImageResponse } from "next/og";

import { siteBranding } from "@/lib/siteBranding";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c3aed",
          borderRadius: "9999px",
          color: "white",
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        {siteBranding.mark}
      </div>
    ),
    { ...size },
  );
}
