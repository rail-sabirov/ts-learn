{
    interface ILogger {
        log(...args): void;
        error(...args): void;
    }

    class Logger implements ILogger {
        log(...args: any[]): void {
            console.log(...args)
        }

        // в реализации мы можем сделать асинхронный метод
        async error(...args: any[]): Promise<void> {
            // кинуть ошибку во внешнюю систему
            console.log(...args)
        }

    }


    /*
        Heобзятельная имплементация и union/расширенные типы
    */

    interface IPayable {
        pay(paymentId: number): void;
        price?: number;
    }

    class User implements IPayable {
        pay(paymentId: number | string): void {
            
        }
    }

    /*
        Множественная имплементация
    */

    interface IDeletable {
        delete(): void;
    }

    class Guest implements IPayable, IDeletable {
        pay(paymentId: number): void {
            throw new Error('Method not implemented.');
        }

        price?: number | undefined;

        delete(): void {
            throw new Error('Method not implemented.');
        }
    }

}