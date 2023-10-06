// Mixins
{
    // --- Сравнение моделей 

    // == Наследование похожего класса через extends
    // Этот метод применяется для классов одной предметной области
    class Payment {
        id: number;
    }

    class PaymentPersistent extends Payment {
        name: string;
    }

    // == Композиция через constructor
    // Этот метод используется когда нужнжо собрать из деталей объект
    class Engine {
        power: number;
    }

    class Wheels {
        count: number;
    }

    class Vehicle {
        constructor(public engine: Engine, public wheels: Wheels){};
    }

    // == Mixin

    // Типизированный конструктор

    // Описание всех конструкторов всех классов
    type Constructor = new (...args: any[]) => {}

    // Типизированный конструктор
    // Сужение конструктора используя дженерик
    type GConstructor<TYPE = {}> = new (...args: any[]) => TYPE

    // Использование, создаем класс для типа.
    class List {
        constructor(public items: string[]) { }
    }

    // создаем типизированный конструктор
    type ListType = GConstructor<List>;

    // --> Mixins

    // При наследовании описываем так
    class ExtendedListClass extends List {
        first() {
            return this.items[0];
        }
    }

    // == Миксин как функция, которая возвращает класс-тип
    // TBase - это класс-тип
    function ExtendedList<TBase extends ListType>(Base: TBase) {
        return class ExtendedList extends Base {
            first() {
                return this.items[0];
            }
        }
    }

    // Использование
    const list = ExtendedList(List);
    const res = new list(['first', 'second']);

    console.log(res.first());


    // == Второй пример миксина, миксим два класса
    class Accordion {
        isOpened: boolean;
    }
    
    type AccordionType = GConstructor<Accordion>;

    //создаем новую функцию которая вовращает класс который расширяется из двух классов
    // миксуем с помощью &
    function ExtendedList2<TBase extends ListType & AccordionType>(Base: TBase) {
        return class ExtendedList2 extends Base {
            first() {
                return this.items[0]
            }
        }
    }

    // Создаем класс для создания объекта с миксованными классами
    class AccordionList {
        isOpened: boolean;
        
        constructor(public items: string[]) { };
    }

    const list2 = ExtendedList2(AccordionList);
    const res2 = new list2(['pervyi', 'vtoroi']);
    console.log(res2.first())


}