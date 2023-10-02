/*
    Необходимо написать функцию сортировки любых объектов, которые имеют свойство id,
    функция должна уметь сортировать по убыванию и по возрастанию
*/
{
    var data = [
        { id: 1, name: 'Vasya' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Kolya' }
    ];
    var data2 = [
        { id: 5, desc: 'Hello' },
        { id: 10, desc: 'Test' },
        { id: 20, desc: 'World' },
    ];
    console.log('data: ', data);
    // С помощью extends мы описываем объект, который похож на User своими свойствами
    function sortArrayByObjectId(arr, order) {
        if (order === void 0) { order = 'ASC'; }
        return arr.sort(function (a, b) {
            // при сотрировке нам нужно вернуть 0 если равны, > 0 если больше, < 0 если меньше
            return order == 'ASC' ? a.id - b.id : b.id - a.id;
        });
    }
    console.log(sortArrayByObjectId(data));
    console.log(sortArrayByObjectId(data2, 'DESC'));
}
