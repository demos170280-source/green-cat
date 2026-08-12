import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  poweredByHeader: false,
};

export default withMDX(nextConfig);
