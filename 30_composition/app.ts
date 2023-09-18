{
    // ---- Наследование
    // Пользователь
    class User {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    // Класс для списка пользователей (массив пользователей)
    class Users extends Array<User> {
        searchByname(name: string) {
            return this.filter(u => u.name === name)
        }

        override toString(): string {
            return this.map(u => u.name).join(', ');
        }
    }

    const users = new Users();
    users.push(new User('Vasya'));
    users.push(new User('Petya'));

    console.log(users.toString()) // --> Vasya, Petya


    // --- Композиция, при которой мы можем реализовать только нужные методы
    class UserList {
        users: User[];


        push(u: User) {
            this.users.push(u);
        }
    }


    // ---- Изменение предметной области (из DDD)
    // Тут опять мы используем наследование, что ухудшает следующий класс
    class Payment {
        date: Date;
    }

    // Наследование, жесткая привязка пользователя к платежам!
    // Тут мы переходим от платежей к пользователю с платежами, но при добавлении 
    // методов в Payment, опять получаем ненужные методы и жесткую связь
    class UserWithPayment extends Payment {
        name: string;
    }


    // Решаем проблему с помощью Композиции
    // Тут у нас User не смешивается c Payment'ом, у каждого своя доменная область
    class UserWithPayment2 {
        user: User;
        payment: Payment;

        constructor(user: User, payment: Payment) {
            this.user = user;
            this.payment = payment;
        }
    }
}