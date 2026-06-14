import {test, expect} from "@playwright/test";

test.describe("KeyBoard Demo", () => {
  test("KeyBoard", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/text-box");
    const fullName = page.locator("#userName");
    await fullName.type("Ashwin");
    await page.waitForTimeout(5000);

  })


});