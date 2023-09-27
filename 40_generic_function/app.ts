// Generic function

{
    // Универсальная функция - для любых типов данных
    function logMiddleware<T>(data: T): T {
        console.log(data);
        return data;
    }

    // При вызове функции с помощью дженерика указываем тип, он тут один на всех
    const result = logMiddleware<number>(10);

    const mixedData: (number | string | boolean)[] = [1, 'ss', true, 33]
    const mArr: [number, string, boolean] = [2, '1', false]


    // Ограничение дженерик-функции, обязательное указание типа
    // для параметра, чтобы реализация не вызывала ошибки
    function getHalf<T>(data: Array<T>): Array<T> {
        const halfLength: number = data.length / 2;

        return data.slice(0, halfLength)
    }
    
    // Вызов функций, два разных способа, с автоматом и явным указанием типа
    const res1 = getHalf([1, 2, 3, 4])
    const res2 = getHalf<number>([1, 2, 3, 4])
    
    const res3 = getHalf(['a', 'b', 'c', 'd'])
    const res4 = getHalf<string>(['a', 'b', 'c', 'd'])
}