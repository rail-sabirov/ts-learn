{
    let input: unknown;

    input = 3;
    input = ['a', 'b'];

    let res: any = input;


    function run(i: unknown) {
        // явная проверка на number
        if (typeof i == 'number') {
            i++;
        } else {
            // i - in this block, type still unknown
        }
    }

    run(input);


    // Обязательная проверка на типы, чтобы компилятор правильно понимал это
    // получаем ошибку, и нам нужно проверить тип прежде чем использовать/провалиться в сообщение об ошибке
    async function getData() {
        try {
            await fetch('');
        } catch(err) {
            // С версии Typescript 4.4 - ошибка стала не any, а unknown, по этом нужна проверка, прежде чем использовать
            if (err instanceof Error) { 
                console.log(err.message); // после проверки типа, можем получить message
            }

        }
    }


    // union - принимаем более широкий тип unknown вместо number
    type U1 = unknown | number; // -> unknown

    // interseption - принимает более узкий тип
    type I1 = unknown & string; // -> string

}