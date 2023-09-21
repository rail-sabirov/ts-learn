"use strict";
{
    class Controller {
        // Обычный метод, которые мы реализуем здесь
        handleWithLog(req) {
            console.log('[handleWithLog]: Start');
            this.handle(req);
            console.log('[handleWithLog]: End');
        }
    }
    // Создаем класс на основе абстрактоного класса
    class UserController extends Controller {
        handle(req) {
            console.log(`[handle]: ${req}`);
        }
    }
    const c = new UserController();
    c.handleWithLog('Request');
}
