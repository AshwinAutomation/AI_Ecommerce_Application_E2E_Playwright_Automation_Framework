import {test, expect} from '@playwright/test';

test.describe('Nop Commerce E-commerce application', () => {
  test('should have the correct title', async ({browser},testinfo) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://admin-demo.nopcommerce.com/login');
   const title = await page.title();
   expect(title).toBe('nopCommerce demo store. Login');
   await context.close();
  });
});
