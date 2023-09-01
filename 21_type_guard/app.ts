// Type Guard

{
    function logId(id: string | number) {
        // С помощью проверок, ссужаем тип переменной id
        if (typeof id === 'string') {
            console.log(id);
        
        } else if (typeof id === 'number') {
            console.log(id)
        }

        // тут "широкий тип", без ссужения
        console.log(typeof id); // string | number
    }

    // Type guard для простого типа, мы проверили что x является строкой и вернули boolean
    function isString(x: string | number): x is string {
        return typeof x === 'string'
    }

    // Используем type guard
    function loggsId(id: string | number) {
        if (isString(id)) {
            console.log('id - string');
        
        } else {
            console.log('id - number');
        }
    }


    //---- Type guard между интерфейсами
    interface Admin {
        name: string;
        role: number;
    }

    interface User {
        name: string;
        email: string;
        login: string;
    }

    const user: User = {
        name: 'Vasya',
        email: 'vasya@email.com',
        login: 'vasya'
    }

    // type guard
    function isAdmin(user: User | Admin): user is Admin {
        // если свойство 'role' есть в объекте user, значит это Admin
        return 'role' in user;
    }

    function setRoleZero(user: User | Admin) {
        if (isAdmin(user)) {
            user.role = 0; // Только у Админа есть роль
        
        } else {
            throw new Error('Пользователь не админ');
        }
    }


    // -- Другой способ проверить на админа
    function isAdminAlternative(user: User | Admin): user is Admin {
        // проеобразем user to Admin и пытаемся получить role, если это User, тогда получим undefined
        return (user as Admin).role !== undefined;
    }


}
