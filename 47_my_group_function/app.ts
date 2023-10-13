/*
Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возвращает
сгруппированный объект.

Пример: 
[
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

После группировки по group -->

{
    '1': [{ group: 1, name: 'a' }, { group: 1, name: 'b' }],
    '2'; [{ group: 2, name: 'c'}]
}
*/
{
 
    // Универсальный тип результата с дженериком
    // Описание типа для объекта --> { '1': [{group: 1, name: 'aa'}, {group: 1, name: 'bbb'}] }
    // <Type> в данном случае это массив с данными типа IData - просто описали более универсально с дженериками
    type Result<Type> = {
        [key: string]: Type[]
    }

    // Тип для ключа
    type KeyType = string | number | symbol;

    // Для упрощения дженерика, опишем Ограничитель используя Record
    type ObjectKeyVal = Record<KeyType, any>;

    // Функция для группировки по ключу который есть в объекте (в текщем объекте это group и name)
    function myGroup<Type extends ObjectKeyVal>(arr: Type[], key: keyof Type): Result<Type> {
        return arr.reduce<Result<Type>>((out: Result<Type>, item) => {
            const itemKey = item[key];
            
            // Создаем ключ если его нет
            if (!Array.isArray(out[itemKey])) {
                out[itemKey] = [];
            }

            // Добавляем значение в массив
            out[itemKey].push(item)

            return out;
        }, {});

    }

    // --- Использование

    // (1) -- Интерфейс для точного описания объекта
    interface IData {
        group: number;
        name: string;
    }

    const data: IData[] = [
        { group: 1, name: 'a'},
        { group: 1, name: 'b'},
        { group: 2, name: 'b'}
    ]
    
    const res = myGroup<IData>(data, 'group')
    console.log(res);


    // (2) -- Используя описаный тип через Record
    const data2: ObjectKeyVal[] = [
        { group: 3, name: 'c'},
        { group: 3, name: 'd'},
        { group: 4, name: 'd'}
    ];

    const res2 = myGroup<ObjectKeyVal>(data2, 'group');

    console.log(res2);


    // (3) -- Описание с помощью Record
    const data3: Record<string, string | number>[] = [
        { group: 5, name: 'e'},
        { group: 5, name: 'e'},
        { group: 6, name: 'f'}
    ];

    const res3 = myGroup<Record<string, string | number>>(data3, 'group');

    console.log(res3);


}
