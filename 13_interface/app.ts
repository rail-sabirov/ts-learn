// -(1)- Interfaces

interface User {
    name: string,
    age: number,
    skills: string[]

    // функция в интерфейсе
    //log: (id: number) => string;
}

let user: User = {
    name: 'asd',
    age: 33,
    skills: ['1', '2']
}


// -(2)- Новый интерфейс для расширения пользователя
interface UserWithRole extends User {
    roleId: number;
}

let userWithRole: UserWithRole = {
    name: 'Goga',
    age: 23,
    skills: ['1', '3'],
    roleId: 1
}

// -(3)- Множественное наследование инетерфейсов
interface Role {
    roleId: number
}

// объеденяем интерфейсы
interface UserAndRole extends User, Role {
    createdAt: Date;
}

let userAndRole: UserAndRole = {
    name: 'Vasya',
    age: 39,
    skills: ['2', '4'],
    roleId: 2,
    createdAt: new Date()
}

// -(4)- Индексирование словаря, как описать
/*
    { 
        1: user1,
        2: user2
    }

*/
interface UserDictionary {
    [index: number]: User
}

// тоже возможно и в type
type UserDictionary2 = {
    [index: number]: User
}

// Это же в современном виде, с помощью Record
type ud = Record<number, User>