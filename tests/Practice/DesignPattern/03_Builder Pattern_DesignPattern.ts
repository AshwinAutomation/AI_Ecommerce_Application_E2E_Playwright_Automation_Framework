export class UserBuilder {

    private user = {
        username: '',
        password: ''
    };

    setUsername(username: string) {
        this.user.username = username;
        return this;
    }

    setPassword(password: string) {
        this.user.password = password;
        return this;
    }

    build() {
        return this.user;
    }


    const user = new UserBuilder()
    .setUsername('admin')
    .setPassword('admin123')
    .build();

await loginPage.login(user.username, user.password);
}