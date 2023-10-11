// Keyof
{

    interface IUser {
        name: string;
        age: number;
    }

    // Создаем тип, который получает ключи от User
    type KeysOfUser = keyof IUser;

    // Здесь мы можем присвоить только существующий ключ в IUser
    const key: KeysOfUser = 'age';

    // -- Функция, которая возвращает значение в зависимости от свойства
    const user: IUser = {
        name: 'Vasya',
        age: 30
    }

    function getValue<TYPE>(obj: TYPE, key: keyof TYPE) {
        return obj[key];
    }

    const userName = getValue(user, 'name');

    // Второй способ написать 
    function getValue2<TYPE, KEY extends keyof TYPE>(obj: TYPE, key: KEY) {
        return obj[key];
    }
}

