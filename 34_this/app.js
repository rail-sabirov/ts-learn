"use strict";
{
    class Payment {
        constructor() {
            this.date = new Date();
            // Стрелочная функция, всегда содержит контекст 
            // - это особеность поведения стрелочной функции
            this.gerDateArrow = () => {
                return this.date;
            };
        }
        // Специальный параметр, который работает только typescript 
        // и говорит компилятору, что мы работаем именно с контектом Payment
        // для этого добавляем this: Payment - после компиляции его не будет
        getDate(a) {
            return this.date;
        }
    }
    const p = new Payment();
    const user = {
        id: 1,
        // Дополнительно передаем контекст/объект p
        // в TS - если у getDate() есть параметр this: Payment, тогда без bind(p) - выдаст ошибку
        paymentDate: p.getDate.bind(p),
        paymentDateArrow: p.gerDateArrow
    };
    console.log(p.getDate(1));
    console.log(user.paymentDate(1));
    console.log("arrow", user.paymentDateArrow());
}
