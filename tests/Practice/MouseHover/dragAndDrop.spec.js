import { test, expect } from "@playwright/test";

test.describe("Mouse Hover Demo", () => {
  test("Mouse Hover", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://jqueryui.com/droppable/");
    const frame = await page.frameLocator(".demo-frame");
    const source = frame.locator("//div[@id='draggable']");
    const target = frame.locator("//div[@id='droppable']");
    await source.dragTo(target);
    await page.waitForTimeout(5000);
  });
});
