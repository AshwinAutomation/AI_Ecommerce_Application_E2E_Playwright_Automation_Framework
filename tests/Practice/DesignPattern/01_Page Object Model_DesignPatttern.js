import { Page } from '@playwright/test';


//LoginPage.ts
export class LoginPage {

   private page: Page; 
    constructor(private page: Page) {}

    username = this.page.locator('input[name="username"]');
    password = this.page.locator('input[name="password"]');
    loginBtn = this.page.locator('button[type="submit"]');

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}