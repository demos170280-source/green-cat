import type { MetadataRoute } from "next";

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "ru"].map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
}
