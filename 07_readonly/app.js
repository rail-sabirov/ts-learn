// Readonly - дополнительный модификатор, который не дает редактировать переменную
// полезно использовать для массивос, и объектов, которые нужно защитить от изменнения.
// для простых типов можно использовать const
{
    // readonly - ставится перед типом, в нашем случае перед Typle
    var skill = [1, 'Dev'];
    // теперь мы не сможем модифицировать значение переменной, переменная - readonly
    //skill[0] = 2;
    var skills = ['Dev', 'DevOps'];
    // Не получится изменить данные
    //skills[0] = ''
    // Другой способ описания, как дженерики
    var skills2 = ['Dev', 'DevOps'];
    // джинерик, который указывает что массив в виде строк, уточняет тип масива
    var skills3 = ['Dev', 'DevOps'];
    // Так же не получится модифицировать защищенную с помощью readonly
    //skills.push('aaa')
}
