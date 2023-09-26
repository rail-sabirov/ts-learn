// Inner Generics

{   
    const nums: Array<number> = [1, 2, 3]

    async function test() {
        // задаем тип для переменной "a" с помощью дженерика - number
        const a = await new Promise<number>((resolve, reject) => {
            resolve(1);
        });
    }

    // Можно типизировать с помощью своего интерфейса key-value
    // ИЛИ использовать встроенный тип Record, 
    // который принимает два типа, для ключа и для значения
    const check: Record<string, boolean> = {
        drive: true,
        kpp: false
    }
    
}

{
    // Встроенный тип с дженериком Pick, выбираем только те свойства которые нужны

    interface User {
        id: number;
        name: string;
        email: string;
        age: number;
    }

    // Создаем новый тип, выбирая только определенные свойства из типа User
    type UserSummary = Pick<User, 'name' | 'age'>;

    const user: UserSummary = {
        name: 'Alice',
        age: 30,
    };

    // Свойства, которые не были выбраны (id и email), отсутствуют в UserSummary
    console.log(user.id);    // Ошибка компиляции: Свойство "id" не существует в типе "UserSummary".
    console.log(user.email); // Ошибка компиляции: Свойство "email" не существует в типе "UserSummary".


}