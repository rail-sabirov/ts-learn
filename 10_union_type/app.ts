// Union Types - Объедененные типы
// type Narrowing - ссужение типов (из объедененных обрабатываем конкретный тип с помощью проверки типа)
{

    // задаем uninon тип для переменной arr, строка или число
    const arr: (string | number)[] = ['sdf', 1];

    // Функция, которая принимает в аргументе переменную id трех типов - union
    // ссужение типа, определение типа с помощью typeof
    function logId(id: string | number | boolean) {
        // Тут компилятор не понимает какого типа id, по этому не дает методы после точки id.
        console.log(id) // console.log(entity: any) 

        // Ссужение типов, разбираем полученное значение в соответсвии с типом
        if (typeof id === 'string') {
            // Тут компилятор уже понимает что мы работаем со строками
            console.log(id.toLowerCase())
        
        } else if (typeof id === 'number') {
            // тут компилятор поймет что это number
            console.log(id)
        
        } else {
            // остался только boolean
            console.log(id)
        }
    }

    // Валидный вызов функций
    logId(1);
    logId('stroka');
    logId(true)


    // Ссужение типов для объектов или массивов
    // Определяем массив с помощью Array.isArray(arr)
    function logError(err: string | string[]) {
        if (Array.isArray(err)) {
            console.log(err)

        } else {
            console.log(err)
        }
    }

    // Функция которая получает в параметре объект "a" или "b" 
    // определение типа объекта с помощью "in", т.е. ищем ключь в объекте
    function logObject(obj: { a: number } | { b: number }) {
        if ('a' in obj) {
            console.log(obj.a)
        
        } else {
            console.log(obj.b)
        }
    }


    // Редкий случай, когда сравниваем если типы одинаковые
    function logMultipleIds(a: string | number, b: string | boolean) {
        if (a === b) {
            console.log(a)
        
        } else {
            console.log(b)
        }
    }


    // Похоже на литеральный тип
    // переменная 'a' типа 1 - и может принимать только 1, это константа
    let a: 1 = 1;


}