
// --- Типизация с использованием дженерика

{

    // Функция дженерик
    function getSliceHalf<T>(data: Array<T>): Array<T> {
        const len = data.length / 2;
        
        return data.slice(0, len);
    }

    // Использование функции
    const halfArray = getSliceHalf<number>([1, 2, 3, 4]);

    // --- Типизация переменной, которая приниамет дженерик-функцию

    // Присваиваем переменной саму дженерик-функцию, с дженерик-типизацией
    const split: <T>(data: Array<T>) => Array<T> = getSliceHalf;

    // Или так, это можно взять из подсказки редактора 
    const split2: <TYPE>(data: TYPE[]) => TYPE[] = getSliceHalf;


    // --- Типизация объекта с помощью дженерика: Линия лога содержащая данные

    // --- сам объект
    // const logLine = {
    //     timeStamp: new Date(),
    //     data: {
    //         a: 1
    //     }
    // }

    // Описание объекта с помощью интерфейса
    interface ILogLine<TYPE> {
        timeStamp: Date;
        data: TYPE
    }

    // Точно так же но с type
    type LogLine<TYPE> = {
        timeStamp: Date;
        data: TYPE
    }


    // Типизируем с помощью интерфейса и дженерика
    const logLine: ILogLine<{ a: number }> = {
        timeStamp: new Date(),
        data: {
            a: 1
        }
    }
}

// --- Ограничение/сужение дженериков
{

    
    interface IVehicle {
        run: number;
    }

    class Vehicle implements IVehicle{
        run: number;
    }

    // Другой класс, наследник от Vehicle
    class LCV extends Vehicle {
        capacity: number;
    }
    

    // Функция для работы с объектами типа IVehicle
    // Сужаем тип T, чтобы он был связан с интерфейсом  IVehicle
    function kmToMiles<T extends IVehicle>(vehicle: T): T {
        vehicle.run = vehicle.run / 0.62;

        return vehicle;
    }

    // Использование 
    const vh01 = kmToMiles(new Vehicle);
    const vh02 = kmToMiles(new LCV());

    // Походящий объект по описанию класса, потому что такое же свойство
    const vh03 = kmToMiles({ run: 20 })

}


{
    // Примитивные типы
    type StringNumber = string | number;
    type Boolean10 = ( 1 | 0 | 'true' | 'false') | boolean;

    function logId<TYPE extends StringNumber, FLAG extends Boolean10>(id: TYPE, flag: FLAG): { id: TYPE, flag: FLAG } {
        const isFlag: FLAG = (flag === 'false' ? false : !!flag) as FLAG;
        
        console.log(`id: ${id}, flag: (${flag}) -> ${isFlag}`);

        return { id: id, flag: isFlag };
    }


    const log01 = logId(1, 0);
    console.log('->', log01, '\n');

    const log02 = logId(2, false);
    console.log('->', log02, '\n');
    
    const log03 = logId(3, 1);
    console.log('->', log03, '\n');
    
    const log04 = logId(4, true);
    console.log('->', log04, '\n');
    
    const log05 = logId(5, 'true');
    console.log('->', log05, '\n');
    
    const log06 = logId(6, 'false');
    console.log('->', log06, '\n');
}



{

    type MyBoolean = boolean | 1 | 0 | 'true' | 'false';

    function isBool<TYPE extends MyBoolean>(val: TYPE): TYPE {
        const out = val === 'false' ? false : !!val;

        // Преобразуем в TYPE
        return out as TYPE;
    }

    // Test
    let val: MyBoolean = 1;
    console.log(`val = ${val} (${(typeof val)}) isBool -> ${isBool(val)}`)

    val = 0;
    console.log(`val = ${val} (${(typeof val)}) isBool -> ${isBool(val)}`)

    val = 'false';
    console.log(`val = ${val} (${(typeof val)}) isBool -> ${isBool(val)}`)

    val = true;
    console.log(`val = ${val} (${(typeof val)}) isBool -> ${isBool(val)}`)


}