//Never
{
    // Если функция ничего  не возвращает она не void а never!
    function generateError(message: string): never {
        throw new Error(message);
    }

    // Функция в цикле и никогда не вернет ничего, это не void а never
    function dumpError(): never {
        while(true) {}
    }

    // Функция - рекурсия
    function rec(): never {
        return rec();
    }

    // Мы ничего не можем присвоить, потому что never
    //const a: never = 1;

    // --> never - можно использовать для проверки в случае добавления новых данных
    // Варианты действия с оплатой
    type paymentAction = 'refund' | 'checkout' | 'reject';

    function processAction(action: paymentAction) {
        switch (action) {
            case 'refund':
                // ...
                break;
            case 'checkout':
                // ...
                break;
            default:
                // Для подстраховки на уровне компиляции добавляем "НЕиспользуемую" переменную
                // которая при компиляции даст ошибку, потому что мы не можем ничего присвоить never
                // а у нас тут action = 'reject'
                const _: never = action;
                throw new Error('Нет такого действия!')
        }
    }

    // Где еще можно полезно использовать never - Исчерпывающая проверка
    // вся суть в том что мы завершили условие else if, а не просто else, 
    // компилятор сочтет это как не завершенная проверка для остальных типов
    function isString(x: string | number): boolean {
        // Обработаем типы от x
        if (typeof x === 'string') {
            return true;
        
        } else if (typeof x === 'number') {
            return false;
        }

        // Так как мы использовали else if - значить у нас могут быть еще не учтенные варианты
        // по этому, нам нужно добавить функцию never, чтобы на уровне компилятора отловить это
        generateError('Error!')
    }
}