import { test, expect } from "@playwright/test";

test.describe("Dropdown Demo", () => {
  test("dropdown select using select tag with text value", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const dropdown = page.locator("#carselect");
    await dropdown.selectOption("benz");
    await page.waitForTimeout(5000);
    expect.soft(await dropdown.inputValue()).toBe("benz");
  });

  test("dropdown select using select tag with label", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const dropdown = page.locator("#carselect");
    await dropdown.selectOption({ label: "Honda" });
    await page.waitForTimeout(5000);
    expect.soft(await dropdown.inputValue()).toBe("honda");
  });

  test("dropdown select using select tag with value", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const dropdown = page.locator("#carselect");
    await dropdown.selectOption({ value: "honda" });
    await page.waitForTimeout(5000);
    expect.soft(await dropdown.inputValue()).toBe("honda");
    //count options
    expect.soft(await page.locator("#carselect option").count()).toBe(3);
  });

  test("dropdown select using select tag with index", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const dropdown = page.locator("#carselect");
    await dropdown.selectOption({ index: 1 });
    await page.waitForTimeout(5000);
    expect.soft(await dropdown.inputValue()).toBe("benz");
    //count options
    expect.soft(await page.locator("#carselect option").count()).toBe(3);
  });

  test("dropdown select using select tag Print all options", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const dropdownOptions = await page.locator("#carselect option").all();
    let flag = false;
    for (const option of dropdownOptions) {
      const carsname = await option.textContent();

      if (carsname?.includes("Honda")) {
        console.log("Honda is present in the dropdown");
        flag = true;
        await page.waitForTimeout(5000);
        await page.selectOption("#carselect", { label: "Honda" });
        break;
      }
    }
  });
});
