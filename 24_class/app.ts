{
    class User {
        name: string;

        // Инициализация свойства класса
        constructor(userName: string) {
            this.name = userName;
        }
    }

    const user = new User('Vasya');

    console.log(user);

    user.name = 'Petya';
    console.log(user)


    // Класс без конструктора для свойства
    class Admin {
        role: number;
    }

    const admin = new Admin();
    admin.role = 1;
    


    // Constructor overload
    class Employee {
        name: string;
        age: number;

        // Переопределение конструкторов / определение какие они будут
        constructor();
        constructor(age: number);
        constructor(employeeName?: string)
        constructor(employeeName?: string, age?: number);

        // Реализация конструктора, удовлетворяющий всем описанным конструкторам выше
        constructor(value?: string | number, age?: number) {
            if (typeof value === 'string') {
                this.name = value;
            }

            if (typeof value === 'number') {
                this.age = value
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