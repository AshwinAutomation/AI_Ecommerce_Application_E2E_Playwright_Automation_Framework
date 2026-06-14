import { test, expect } from "@playwright/test";

test.describe("Multiselect Dropdown Demo", () => {
  test("Multiselect dropdown", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const fruitsNames = await page.locator("#multiple-select-example");
    await fruitsNames.selectOption(["apple", "orange", "peach"]);
    //check total options
    expect.soft(await page.locator("#multiple-select-example option").count()).toBe(3);
    // check value present in the dropdown
    const options = await page.locator("#multiple-select-example option").all();
    for (const option of options) {
      const fruitsname = await option.textContent();
      if (fruitsname?.includes("orange")) {
        await fruitsname.visible().toBeTruthy();
      }
    }
  });
});
