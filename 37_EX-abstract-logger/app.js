"use strict";
/*
    Необходимо реализовать абстрактный класс Logger с 2-мя методами
    абстрастным - log(message: string): void - выводящий в log сообщение
    printDate(date: Date) - выводящий дату в log

    К нему необходимо сделать реальный класс, который бы имел мотод: logWithDate
    выводящий сначала дату, а потом заданное сообщение
*/
{
    class Logger {
        printDate(date) {
            this.log(date.toString());
        }
    }
    class Log extends Logger {
        log(message) {
            console.log('   -', message);
        }
        logWithDate(message) {
            this.printDate(new Date());
            this.log(message);
        }
    }
    const log = new Log();
    log.logWithDate('Hello world!');
}
