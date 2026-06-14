import { test, expect } from "@playwright/test";

test.describe("Mouse Hover Demo", () => {
  test("Mouse Hover", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.snapdeal.com/");
    const mouseHover = page.locator("//div[@id='tab-category-3']");
    await mouseHover.hover();
    await page.waitForTimeout(5000);
  });
});
