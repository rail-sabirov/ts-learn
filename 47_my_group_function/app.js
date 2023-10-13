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
    // Функция для группировки по ключу который есть в объекте (в текщем объекте это group и name)
    function myGroup(arr, key) {
        return arr.reduce(function (out, item) {
            var itemKey = item[key];
            // Создаем ключ если его нет
            if (!Array.isArray(out[itemKey])) {
                out[itemKey] = [];
            }
            // Добавляем значение в массив
            out[itemKey].push(item);
            return out;
        }, {});
    }
    var data = [
        { group: 1, name: 'a' },
        { group: 1, name: 'b' },
        { group: 2, name: 'b' }
    ];
    var res = myGroup(data, 'group');
    console.log(res);
    // (2) -- Используя описаный тип верез Record
    var data2 = [
        { group: 3, name: 'c' },
        { group: 3, name: 'd' },
        { group: 4, name: 'd' }
    ];
    var res2 = myGroup(data2, 'group');
    console.log(res2);
    // (3) -- Описание с помощью Record
    var data3 = [
        { group: 5, name: 'e' },
        { group: 5, name: 'e' },
        { group: 6, name: 'f' }
    ];
    var res3 = myGroup(data3, 'group');
    console.log(res3);
}
