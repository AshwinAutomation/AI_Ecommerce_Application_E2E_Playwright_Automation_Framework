import { test, expect } from "@playwright/test";

test.describe("Frames Demo", () => {
  test("should switch to frame and get the text in single frame", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demo.automationtesting.in/Frames.html");
    const frameCount = await page.frames().length;
    console.log("Total frames on the page: " + frameCount);
    const singleFrame = page.frameLocator("#singleframe");
    const textField = singleFrame.locator("//input[@type='text']");
    await textField.fill("Welcome to Playwright");
    await page.waitForTimeout(5000);
    const textValue = await textField.inputValue();
    console.log("Text entered in the frame: " + textValue);
    expect.soft(textValue).toBe("Welcome to Playwright");
  });

 test("should switch to frame and get the text in nested frame", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demo.automationtesting.in/Frames.html");
    const frameCount = await page.frames().length;
    console.log("Total frames on the page: " + frameCount);
    const nestedFrameLink = page.locator("//a[@href='#Multiple']");
    await nestedFrameLink.click();
    // switch to Parent frame to child frame
    const ParentFrame = page.frameLocator("//iframe[@src='MultipleFrames.html']");
    const nestedChildFrame = ParentFrame.frameLocator("//iframe[@src='SingleFrame.html']");
    const textField = nestedChildFrame.locator("//input[@type='text']");
    await textField.fill("Welcome to Playwright");
    await page.waitForTimeout(5000);
    const textValue = await textField.inputValue();
    console.log("Text entered in the frame: " + textValue);
    expect.soft(textValue).toBe("Welcome to Playwright");
  });
});
//Note : try this url for automate frames:  https://demoqa.com/frames