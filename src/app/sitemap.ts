import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl(),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["ru", "en"].map((locale) => ({
      url: absoluteUrl(`/${locale}`),
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
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
