import { ImageResponse } from "next/og";

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
          background: "#101310",
          padding: "6px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            background: "#a7ff3f",
          }}
        />
      </div>
    ),
    size,
  );
}
