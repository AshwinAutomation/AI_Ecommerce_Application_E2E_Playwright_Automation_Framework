export abstract class BaseLogin {

    async execute(page: Page) {
        await this.open(page);
        await this.enterCredentials(page);
        await this.submit(page);
    }

    private async open(page: Page) {
        await page.goto('https://example.com');
    }

    protected abstract enterCredentials(page: Page): Promise<void>;

    private async submit(page: Page) {
        await page.click('#loginBtn');
    }
}

//AdminLogin.ts
export class AdminLogin extends BaseLogin {

    protected async enterCredentials(page: Page) {
        await page.fill('#username', 'admin');
        await page.fill('#password', 'admin123');
    }
}

Usage:
const login = new AdminLogin();
await login.execute(page);