//fixture.ts


import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';

export const test = base.extend<{
    loginPage: LoginPage;
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});


Usage:
test('Login test', async ({ loginPage }) => {
    await loginPage.login('admin', 'admin123');
});