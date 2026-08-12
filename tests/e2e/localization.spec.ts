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
