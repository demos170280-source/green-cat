import { afterEach, describe, expect, it } from "vitest";

import { absoluteUrl, createLocalizedMetadata, SITE_URL } from "./seo";

describe("SEO configuration", () => {
  afterEach(() => {
    delete process.env.SITE_URL;
  });

  it("uses the production domain as the default base URL", () => {
    expect(SITE_URL).toBe("https://greencat.site");
    expect(absoluteUrl("/sitemap.xml")).toBe(
      "https://greencat.site/sitemap.xml",
    );
  });

  it("builds localized canonical and hreflang URLs", () => {
    const metadata = createLocalizedMetadata({
      locale: "ru",
      title: "Green Cat",
      description: "Design & Development Studio",
      includeKeywords: true,
    });

    expect(metadata.alternates).toEqual({
      canonical: "https://greencat.site/ru",
      languages: {
        ru: "https://greencat.site/ru",
        en: "https://greencat.site/en",
        "x-default": "https://greencat.site/ru",
      },
    });
    expect(metadata.openGraph).toMatchObject({
      url: "https://greencat.site/ru",
      locale: "ru_RU",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: ["/og-image.jpg"],
    });
  });
});
