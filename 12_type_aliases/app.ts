// Type aliases

{
    // -(1)- без type
    function fetchWithAuth(url: string, method: 'get' | 'post'): 1 | -1 {
        return 1;
    }

    // -(1)- с type
    // Определим новый тип, для http метода, для использования в разных местах
    type httpMethod = 'post' | 'get';


    // Теперь его можно использовать в разных местах
    function sendHttpMethod(method: httpMethod): httpMethod {
        return method;
    }
    
    // можно создать алиас / дополнительное обозначение для типа
    type coolString = string;

    // -(2)- Без использования type, типизация объекта, сначало указываем типы, а потом заполняем
    let user: {
        name: string,
        age: number,
        skills: string[]  // или можно так Array<string>
    } = {
        name: 'abc',
        age: 33,
        skills: ['1', '2']
    }

    // -(2)- с использованием type
    // для указания типа переменных внутри объекта, можно создать алиас
    type User = {
        name: string,
        age: number,
        skills: string[]
    }

    // и далее используем, так проще
    let myUser: User = {
        name: 'Ivan',
        age: 22,
        skills: ['Dev', 'Testing', 'DevOps']
    }


    /**************************
     * Type Intersection - объединение типов через амперсанд для создания нового типа
     */

    // Создадим еще один тип и объеденим их для создания третьего типа
    type Role = {
        id: number
        description: string
    }

    // Объедененный тип / Intersection type
    type UserWithRole = User & Role;


    // Используем новый тип
    let companyUser: UserWithRole = {
        name: 'John',
        age: 34,
        skills: ['Speaker'],
        id: 12,
        description: 'Test'
    }


    // Разница между | и &

    // тип ИЛИ число ИЛИ строка
    type HashNum = number | string;

    // тип объеденяющий несколько объектов-типов - почти интерфейс
    type Employee = User & Role & Permissions;


    // Если поля в объектах совпадают, то это будет считаться одним полем!
    // Лучше





}