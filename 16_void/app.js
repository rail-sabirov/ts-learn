// Void
{
    function logId(id) {
        console.log(id);
    }
    var a = logId(1);
    function multiply(f, s) {
        if (!s) {
            return f * f;
        }
        return f * s;
    }
    // функция возвращает void, потому, что нет return
    var f1 = function () { };
    // Функция возвращает string
    var f2 = function () {
        return '--true--';
    };
    var b = f2();
    console.log(typeof b); // string
    // -------------------------------------------
    // Пример, когда внутри forEach ожидается void, а приходит number (длинна массива) от push
    // при этом void "сглаживает", игнорируя тип и не выводя ошибку, функция продолжает работать.
    var skills = ['Dev', 'DevOps'];
    var user_1 = {
        s: ['']
    };
    skills.forEach(function (skill) { return user_1.s.push(skill); });
    console.log(user_1);
}
