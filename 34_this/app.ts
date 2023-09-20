{
    class Payment {
        private date: Date = new Date();

        // Специальный параметр, который работает только typescript 
        // и говорит компилятору, что мы работаем именно с контектом Payment
        // для этого добавляем this: Payment - после компиляции его не будет
        getDate(this: Payment) {
            return this.date;
        }

        // Стрелочная функция, всегда содержит контекст 
        // - это особеность поведения стрелочной функции
        gerDateArrow = () => {
            return this.date;
        }
    }

    const p = new Payment();

    const user = {
        id: 1,

        // Вызываем функцию, которая используюя this получает данные
        // Дополнительно передаем контекст/объект p
        // в TS - если у getDate() есть параметр this: Payment, тогда без bind(p) - выдаст ошибку
        paymentDate: p.getDate.bind(p),

        // Стрелочная функция всегда связана с контекстом объекта в котором описана
        paymentDateArrow: p.gerDateArrow
    }


    console.log(p.getDate())
    console.log(user.paymentDate())
    console.log("arrow", user.paymentDateArrow())


    class PaymentPersistent extends Payment {
        save() {

            // -- чтобы вызвать стрелочную функцию у родителя используем this
            // return this.getDateArrow();

            return super.getDate();
        }
    }

    console.log(new PaymentPersistent().save())
}