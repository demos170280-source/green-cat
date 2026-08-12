import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.SITE_URL ?? "https://www.greencat.site"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["ru", "en"].map((locale) => ({
      url: `${siteUrl}/${locale}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...[
      "/ru/privacy",
      "/ru/consent",
      "/en/privacy",
      "/en/consent",
    ].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
