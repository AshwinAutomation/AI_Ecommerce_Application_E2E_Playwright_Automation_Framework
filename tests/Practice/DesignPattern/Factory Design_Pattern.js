//PageFactory.ts

import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class PageFactory {
    static getLoginPage(page: Page): LoginPage {
        return new LoginPage(page);
    }
}


//usgage
const loginPage = PageFactory.getLoginPage(page);
await loginPage.login('admin', 'admin123');