export class LoginFacade {

    constructor(private page: Page) {}

    async loginAsAdmin() {
        await this.page.fill('#username', 'admin');
        await this.page.fill('#password', 'admin123');
        await this.page.click('#loginBtn');
    }
}
//Usage
const loginFacade = new LoginFacade(page);
await loginFacade.loginAsAdmin();