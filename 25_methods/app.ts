
{
	enum PaymentStatus {
		Holded,
		Processed,
		Reversed
	}


	class Payment {
		id: number;
		updatedAt: Date;

		// сразу задаем значения по умолчанию
		status: PaymentStatus = PaymentStatus.Holded;
		createdAt: Date = new Date();

		constructor(id: number) {
			this.id = id;
		}

		// В этом методе мы получаем количество времени прошедшее со времени платежа
		getPaymentLifeTime(): number {
			return new Date().getTime() - this.createdAt.getTime();
		}

		// Размораживаем платеж, в зависимости от статуса
		unholdPayment() {
			if (this.status == PaymentStatus.Processed) {
				throw new Error('Платеж не может быть возвращен')
			}

			this.status = PaymentStatus.Reversed;
			this.updatedAt = new Date();
		}
	}

	const payment = new Payment(1);
	payment.unholdPayment();
	console.log(payment);

	const time = payment.getPaymentLifeTime();
	console.log(time)




}