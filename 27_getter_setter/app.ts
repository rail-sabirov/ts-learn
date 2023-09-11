{

    class User {
        _login: string;
        password: string;

        // Сеттер
        set login(l: string | number) {
            this._login = 'user-' + l;
        }

        // Геттер
        get login() {
            return this._login;
        }

        // Если нужен асинхронный сеттер, тогда используем обычный метод класса
        async setPassword(pwd: string) {
        // await 
        }
    }

    const user = new User();
    user.login = 'myLogin'

    console.log(user)
    console.log(user.login)

}