import { describe, expect, it } from "vitest";

import { defaultLocale, getPreferredLocale, isLocale } from "./config";

describe("locale configuration", () => {
  it("recognizes supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("ru")).toBe(true);
    expect(isLocale("de")).toBe(false);
  });

  it("selects a supported language from the request header", () => {
    expect(getPreferredLocale("ru-RU,ru;q=0.9,en;q=0.8")).toBe("ru");
    expect(getPreferredLocale("en-US,en;q=0.9")).toBe("en");
  });

  it("falls back to the approved default locale", () => {
    expect(getPreferredLocale("de-DE,de;q=0.9")).toBe(defaultLocale);
    expect(getPreferredLocale(null)).toBe(defaultLocale);
  });
});
