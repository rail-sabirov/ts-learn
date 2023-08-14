// Tuples или кортежи, можно использовать когда нужно задать разные типы объекта
{
    // Typles - четко типизированное описание, у нас тут число и строка, 
    // только два элемента в данном описанном типе
    const skills: [number, string] = [1, 'Dev'];

    // Получаем данные из skills, только два типа
    const  id = skills[0];
    const skillName = skills[1];


    // Мы добавили в массив данные, но получить их не можем, 
    // потому, что тут описаны только два типа
    skills.push('sssdfadf')
    skills.pop()

    // Диструктуризация в Tuple тоже работает
    const [skillId, skillFullName] = skills

    // Можно создать Tuple с спред оператором. Тут опишем что,
    // после числа и строки идут булевы.
    // Таким образом можно дополнять наш типизированный массив, булевыми значениями
    const arr: [number, string, ...boolean[]] = [1, 'sdf', true, false, true]
}