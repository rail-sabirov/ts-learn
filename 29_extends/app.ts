// Наследование классов
{
    type PaymentStatusString = 'new' | 'paid';
    enum PaymentStatus {
        New = 'new',
        Paid = 'paid'
    }

    class Payment {
        id: number;
        status: PaymentStatus = PaymentStatus.New;

        constructor(id: number) {
            this.id = id;
        }

        pay() {
            this.status = PaymentStatus.Paid
        }
    }

    class PersistentPayment extends Payment {
        databaseId: number;
        paidAt: Date;

        constructor() {
            const id = Math.random();

            // Вызов конструктора класса Payment
            super(id);
        }

        save() {
            // Сохраняем в БД
        }

        // Переопределение метода родительского класса
        override pay(date?: Date) {
            // Меняем статус оплаты
            super.pay();

            // Дополнительно задаем дату платежа
            if(date) {
                this.paidAt = date;
            }
        }
    }

    console.log(new PersistentPayment().status)
    
}