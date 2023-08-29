// Void
{
    function logId(id: string | number): void {
        console.log(id);
    }

    const a = logId(1);


    function multiply(f: number, s?: number) {
        if (!s) {
            return f * f;
        }

        return f * s;
    }

    // ---- определяем тип для функции, который возвращает void
    type voidFunction = () => void;

    // функция возвращает void, потому, что нет return
    const f1: voidFunction = () => {}

    // Функция возвращает string
    const f2: voidFunction = () => {
        return '--true--';
    }
    const b = f2();
    console.log(typeof b) // string
    // -------------------------------------------

    // Пример, когда внутри forEach ожидается void, а приходит number (длинна массива) от push
    // при этом void "сглаживает", игнорируя тип и не выводя ошибку, функция продолжает работать.
    const skills = ['Dev', 'DevOps'];
    const user = {
        s: ['']
    }

    skills.forEach((skill) => user.s.push(skill));
    console.log(user);

}