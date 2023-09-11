"use strict";
{
    let PaymentStatus;
    (function (PaymentStatus) {
        PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
        PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
        PaymentStatus[PaymentStatus["Recersed"] = 2] = "Recersed";
    })(PaymentStatus || (PaymentStatus = {}));
    class Payment {
        constructor(id) {
            // сразу задаем значения по умолчанию
            this.status = PaymentStatus.Holded;
            this.createdAt = new Date();
            this.id = id;
        }
        // В этом методе мы получаем количество времени прошедшее со времени платежа
        getPaymentLifeTime() {
            return new Date().getTime() - this.createdAt.getTime();
        }
        // Размораживаем платеж, в зависимости от статуса
        unholdPayment() {
            if (this.status == PaymentStatus.Processed) {
                throw new Error('Платеж не может быть возвращен');
            }
            this.status = PaymentStatus.Recersed;
            this.updatedAt = new Date();
        }
    }
    const payment = new Payment(1);
    payment.unholdPayment();
    console.log(payment);
    const time = payment.getPaymentLifeTime();
    console.log(time);
}
