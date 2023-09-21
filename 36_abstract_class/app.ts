{
    abstract class Controller {

        // Абстрактный метод, который нужно реализовать в инстансе
        abstract handle(req: any): void;

        // Обычный метод, которые мы реализуем здесь
        handleWithLog(req: any): void {
            console.log('[handleWithLog]: Start');
            this.handle(req);
            console.log('[handleWithLog]: End');
        }
    }


    // Создаем класс на основе абстрактоного класса
    class UserController extends Controller {
        handle(req: any): void {
            console.log(`[handle]: ${req}`)
        }

    }


    const c = new UserController();
    c.handleWithLog('Request');

    /*
        [handleWithLog]: Start
        [handle]: Request
        [handleWithLog]: End
    */
}