import { test, expect } from "@playwright/test";

test.describe("Alerts Demo", () => {
  test("should display an Normal alert and accept it", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("Alert", async (alert) => {
      expect(alert.type()).toBe("alert");
      (expect(alert.message()).toContain("I am an alert box!"), 
      await alert.accept());
    });
  });

  test.only("should display an Confirmation alert and accept it", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    page.on("confirmationAlert", async (alert) => {
      expect(alert.type()).toBe("confirmation")
      expect (alert.message()).toContain("Press a button!")
      await alert.dismiss();
    });
    await page.locator("#alertbtn").click();
    await page.waitForTimeout(5000);
  });

});
