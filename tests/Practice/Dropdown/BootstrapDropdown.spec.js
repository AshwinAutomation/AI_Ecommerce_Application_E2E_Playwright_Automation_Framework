import { test, expect } from "@playwright/test";

test.describe("Bootstrap Dropdown Demo", () => {
  test("Bootstrap dropdown", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://mdbootstrap.com/docs/standard/extended/dropdown-checkbox/");
    await page.locator("#accept_cookies_btn").click();
    await page.waitForTimeout(2000);
    const dropdown = page.locator("#dropdownMenuButton");
    await dropdown.click();
     await page.waitForTimeout(5000);
    const options = await page.$$("//ul[@class='dropdown-menu show']//li//a//input");
    const count = await options.length;
    expect(count).toBe(4);
    console.log("Total options in the dropdown: " + count);
     const optionsName = await page.$$("//ul[@class='dropdown-menu show']//li//a");
    for (let i = 0; i < optionsName.length; i++) {
      const optionText = await optionsName[i].textContent();
      console.log("Total options in the dropdown value Name: " + optionText);
      if (optionText?.includes("Check me")) {
         await optionsName[i].click();
      }
      
    }
  });
});
