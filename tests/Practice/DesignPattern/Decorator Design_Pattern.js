//LoginPageDecorator.ts

export class LoginPageDecorator {

    constructor(private loginPage: LoginPage) {}

    async login(username: string, password: string) {
        console.log('Login started');
        await this.loginPage.login(username, password);
        console.log('Login completed');
    }
}

usage:
const decoratedLogin =
new LoginPageDecorator(new LoginPage(page));
await decoratedLogin.login('admin', 'admin123');