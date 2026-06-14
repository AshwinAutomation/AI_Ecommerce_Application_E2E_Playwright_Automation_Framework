import { test, expect } from "@playwright/test";

test.describe("Radio Button Demo", () => {
  test("Single Radio Button Select", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const car = page.locator("//input[@value='bmw' and @type='radio']");
    await car.check();
    expect.soft(await car.isChecked()).toBe(true);
    const car_Honda = page.locator("//input[@value='honda' and @type='radio']");
    expect.soft(await car_honda.isChecked()).toBe(false);
  });
});
