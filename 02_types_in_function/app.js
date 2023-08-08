"use strict";
// Обычная функция с типами в аргументе и в результате
function getFullName(firstName, lastName) {
    /*
    // Проверка типа для js, в ts они редко используются, так как тут статическая типизация
    if(typeof firstName !== 'string') {
        throw new Error('We except string!!!');
    }
    */
    return `${firstName} ${lastName}`;
}
// Типы в стрелочной функции
const getFullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullName('John', 'Bovi'));
