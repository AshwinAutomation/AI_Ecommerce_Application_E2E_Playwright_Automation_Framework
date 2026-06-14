import {test, expect} from "@playwright/test";

test.describe("CheckBoxes Demo",()=>{

  test("Single CheckBox Select",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");
    const bmwCheckbox = page.locator("#bmwcheck");
    await bmwCheckbox.check();
    expect.soft(await bmwCheckbox.isChecked()).toBe(true);
  })

test("Multiple CheckBox Select",async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.letskodeit.com/practice");
  const carList = ["#bmwcheck", "#benzcheck", "#hondacheck"];

  //checking all the checkboxes in the list
  for(const car of carList){
     await page.locator(car).check();
     expect.soft(await page.locator(car).isChecked()).toBe(true);
  }
// unchecking all the checkboxes in the list

  for(const car of carList){
    await page.locator(car).uncheck();
    expect.soft(await page.locator(car).isChecked()).toBe(false);
  }


});


})