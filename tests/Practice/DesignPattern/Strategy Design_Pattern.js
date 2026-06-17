export interface LoginStrategy {
    login(page: Page): Promise<void>;
}

//AdminLoginStrategy.ts
export class AdminLoginStrategy implements LoginStrategy {
    async login(page: Page) {
        await page.fill('#username', 'admin');
        await page.fill('#password', 'admin123');
        await page.click('#loginBtn');
    }
}

//GuestLoginStrategy.ts
export class GuestLoginStrategy implements LoginStrategy {
    async login(page: Page) {
        await page.fill('#username', 'guest');
        await page.fill('#password', 'guest123');
        await page.click('#loginBtn');
    }
}

//Usage
let strategy = new AdminLoginStrategy();
await strategy.login(page);