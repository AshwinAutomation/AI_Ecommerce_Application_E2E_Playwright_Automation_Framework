import {test, expect} from "@playwright/test";

test.describe("Switch to Window Demo", () => {
   test("Switch to Window", async ({browser}) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://www.letskodeit.com/practice");
      const parentPageTitle = await page.title();
      console.log("Parent page title:", parentPageTitle);
      await page.click("#openwindow");
      const [childPage] = await Promise.all([
          context.waitForEvent('page')
      ])
       const childPageTitle = await childPage.title();
       console.log("Child page title:", childPageTitle);
       await childPage.bringToFront();
       
       console.log(" page title:", await page.title());
   })
})