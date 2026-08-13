import { expect, test } from "@playwright/test";

for (const locale of ["en", "ru"] as const) {
  test(`renders the ${locale.toUpperCase()} homepage and current content`, async ({ page }) => {
    await page.goto(`/${locale}`);
    const isMobile = (page.viewportSize()?.width ?? 0) < 768;
    const hero = locale === "en"
      ? "Design and development — one"
      : "Дизайн и разработка — единое целое";
    const work = locale === "en" ? "Built into one unified system" : "Собрано в единую систему";

    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(hero);
    await expect(page.getByRole("heading", { level: 2, name: work })).toBeVisible();
    await expect(page.locator(".project-teaser")).toHaveCount(3);
    await expect(page.locator("#pricing")).toBeAttached();
    await expect(page.locator(".pricing-package")).toHaveCount(3);
    await expect(page.locator(".pricing-package h3").first()).toHaveAccessibleName(
      locale === "en" ? "One-page website" : "Одностраничный сайт",
    );
    await expect(page.locator(".pricing-cta")).toHaveAttribute(
      "href",
      "mailto:demos80@list.ru",
    );
    await expect(page.locator(".hero-cta")).toBeVisible();

    if (isMobile) {
      const menuTrigger = page.getByRole("button", {
        name: locale === "en" ? "Menu" : "Меню",
      });
      await expect(page.locator(".primary-nav")).toBeHidden();
      await menuTrigger.click();
      await expect(page.locator(".mobile-menu-panel")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator(".mobile-menu-panel")).toBeHidden();
    } else {
      await expect(page.locator(".primary-nav")).toBeVisible();
      await expect(page.locator(".mobile-navigation")).toBeHidden();
    }
  });
}

test("requires consent before enabling contact submit", async ({ page }) => {
  await page.goto("/en");
  const submit = page.locator(".contact-submit");
  const consent = page.locator('.contact-consent input[type="checkbox"]');

  await expect(consent).not.toBeChecked();
  await expect(consent).toHaveAttribute("required", "");
  await expect(submit).toBeDisabled();
  await consent.check();
  await expect(submit).toBeEnabled();
});

test("serves localized legal, utility and not-found pages", async ({ page }) => {
  await page.goto("/en/privacy");
  await expect(page.getByRole("heading", { level: 1, name: "Privacy Policy" })).toBeVisible();
  await page.goto("/ru/consent");
  await expect(page.getByRole("heading", { level: 1, name: "Согласие на обработку персональных данных" })).toBeVisible();
  await page.goto("/en/thank-you");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
  await page.goto("/ru/not-a-route");
  await expect(page.getByRole("heading", { level: 1, name: "Страница не найдена" })).toBeVisible();
});

test("disables motion when reduced motion is requested", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");

  await expect(page.locator(".accent-square").first()).toHaveCSS("animation-name", "none");
  await expect(page.locator(".hero-cta")).toHaveCSS("transition-duration", "1e-05s");
});

test("keeps service and pricing titles on a consistent two-line rhythm", async ({ page }) => {
  await page.goto("/ru");

  const serviceTitles = page.locator(".service-card h3");
  const pricingTitles = page.locator(".pricing-package h3");

  await expect(serviceTitles).toHaveCount(4);
  await expect(pricingTitles).toHaveCount(3);

  for (const title of await serviceTitles.all()) {
    await expect(title.locator(":scope > span")).toHaveCount(2);
  }

  for (const title of await pricingTitles.all()) {
    await expect(title.locator(":scope > span")).toHaveCount(2);
  }

  const metrics = await page.evaluate(() => ({
    serviceTitleHeights: [...document.querySelectorAll(".service-card h3")].map(
      (element) => element.getBoundingClientRect().height,
    ),
    pricingTitleHeights: [...document.querySelectorAll(".pricing-package h3")].map(
      (element) => element.getBoundingClientRect().height,
    ),
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  }));

  expect(new Set(metrics.serviceTitleHeights).size).toBe(1);
  expect(new Set(metrics.pricingTitleHeights).size).toBe(1);
  expect(metrics.overflow).toBe(0);
});
