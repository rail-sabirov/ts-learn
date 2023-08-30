// Приведение типов
{
    // number -> string
    let a = 5;
    let b: string = a.toString()


    // string -> number
    let c = 'sdsfa'
    let d: number = +c;
    let dd: number = parseInt(c);
    let ddd: number = parseFloat(c);

    // Типы из интерфейсов, объектные типы, для простых типов
    let e = new String(a); // <- String

    // Для получения из объектного типа простого используем valueOf()
    let ee: string = new String(a).valueOf(); // <- string
    let f: boolean = new Boolean(a).valueOf(); // <- boolean

    // Объектные типы
    interface User {
        name: string;
        email: string;
        login: string;
    }

    // Простой способ
    const user: User = {
        name: 'Vasya',
        email: 'vasya@email.com',
        login: 'vasya'
    }

    // через преобразование
    const user2 = {
        name: 'Vasya',
        email: 'vasya@email.com',
        login: 'vasya'
    } as User;

    // через дженерики, не валидна в ReactJs. < компонент > - зарезервирована в JSX
    const user3 = <User> {
        name: 'Vasya',
        email: 'vasya@email.com',
        login: 'vasya'
    }


    // --- Преобразование одного объекта к другому
    interface Admin {
        name: string;
        role: number;
    }

    // (1) Не рекомендуемое преобразование, потому что использует не нужные поля email, login
    const admin: Admin = {
        ...user, // спред оператор
        role: 1
    }

    // (2) Вариант уже лучше, но опять же присутсвуют не нужные поля
    const admin1: Admin = user;
    
    // (3) - Правильный подход, явное преобразование функциями мапинга, где мы получаем нужные поля
    function userToAdmin(user: User): Admin {
        return {
            name: user.name,
            role: 1
        }
    }
    



}