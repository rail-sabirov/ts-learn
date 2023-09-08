"use strict";
{
    class User {
        // Инициализация свойства класса
        constructor(userName) {
            this.name = userName;
        }
    }
    const user = new User('Vasya');
    console.log(user);
    user.name = 'Petya';
    console.log(user);
    // Класс без конструктора для свойства
    class Admin {
    }
    const admin = new Admin();
    admin.role = 1;
    // Constructor overload
    class Employee {
        // Реализация конструктора, удовлетворяющий всем описанным конструкторам выше
        constructor(value, age) {
            if (typeof value === 'string') {
                this.name = value;
            }
            if (typeof value === 'number') {
                this.age = value;
            }
            if (typeof age === 'number') {
                this.age = age;
            }
        }
    }
    const employee = new Employee('Dima');
    const employee2 = new Employee();
    const employee3 = new Employee(33);
    const employee4 = new Employee('Kolya', 28);
}
