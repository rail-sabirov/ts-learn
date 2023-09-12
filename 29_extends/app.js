"use strict";
// Наследование классов
{
    let PaymentStatus;
    (function (PaymentStatus) {
        PaymentStatus[PaymentStatus["New"] = 0] = "New";
        PaymentStatus["Paid"] = "paid";
    })(PaymentStatus || (PaymentStatus = {}));
    class Payment {
        constructor(id) {
            this.status = PaymentStatus.New;
            this.id = id;
        }
        pay() {
            this.status = PaymentStatus.Paid;
        }
    }
    class PersistentPayment extends Payment {
    }
    console.log(new PersistentPayment(1).status);
}
