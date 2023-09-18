"use strict";
{
    // Пользователь
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    // Класс для списка пользователей (массив пользователей)
    class Users extends Array {
        searchByname(name) {
            return this.filter(u => u.name === name);
        }
        toString() {
            return this.map(u => u.name).join(', ');
        }
    }
    const users = new Users();
    users.push(new User('Vasya'));
    users.push(new User('Petya'));
    console.log(users.toString());
}
