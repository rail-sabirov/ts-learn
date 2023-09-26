const a = 5;

console.log(a);


// -- strictNullCheck ------------
{
    // Будет ошибка, потому, что возвращаемый тип 
    // не только number но и undefine
    function test(a: number): number {
        if (a > 0) {
            return a;
        }
    }
}

// Два пути исправления:

{
    // Используя union types
    function test(a: number): number | undefined{
        if (a > 0) {
            return a;
        }
    }
}

{
    // добавляем return если условие не сработало
    function test(a: number): number {
        if (a > 0) {
            return a;
        }

        return 0;
    }
}


// ---- strictFunctionTypes -----------------------------------------
{
    function test(a: number): number {
        return a;
    }

    // Тип для функции, возвращает функция, 
    // которая получает число или строку и возвращающая число
    // Это шаблон для переменной, какой должна быть функция для присвоения
    type StrOrNumFunc = (a: number | string) => number;

    // Создаем переменную как функцию и присваиваем
    // здесь будет ошибка, потому что разница в типах аргумента
    let fn1: StrOrNumFunc = test;
    fn1('ttt')

}

// --- strictBindCallApplay ---------------------------
{
    function test(a: number): number {
        return a;
    }

    test(1);
    test.apply(null, [1])


}

// --- Вызов функций с передачей аргументов --------------------------
{
    function test(str1: string, str2: string): void {
        console.log(`${str1} - ${str2}`);
    }

    // Вызов с помощью call
    test.call(null, 'Hello', 'World!')

    // Вызов с помощью apply, так же но аргументы в массиве
    test.apply(null, ['Hello', 'World!'])

    // Вызов с помощью bind, которая возвращает новую функцию
    let hello = test.bind(null, 'Hello')
    hello("World");


}

{   
    class Product {
        constructor(public id: number, public title: string, public price: number) {}
    }

}

{
    class User {
        role?: 'admin' | 'user';

        constructor(private name: string) {}
    }

    function createUser(user: User) {
        const defaultUser = new User('default');

        defaultUser.role = undefined;
    }

}

// noUncheckIndexAccess
{
    interface IChecks {
        // формат НЕ ЧЁТКО заданной переменной
        // key: строка, а value: boolean
        [check: string]: boolean
    }

    const ch: IChecks = [];
    const d = ch['drive']; // boolean | undefined
}