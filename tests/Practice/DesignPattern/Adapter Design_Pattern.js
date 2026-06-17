export class OldLoginService {
    authenticate(user: string, pass: string) {
        console.log('Authenticated');
    }
}

export class LoginAdapter {

    constructor(private oldService: OldLoginService) {}

    login(username: string, password: string) {
        this.oldService.authenticate(username, password);
    }
}


Usage:
const adapter = new LoginAdapter(new OldLoginService());
adapter.login('admin', 'admin123');