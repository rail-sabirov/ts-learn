/*
    v2

    Необходимо сделать корзину (Cart) на сайте,
    которая имеет список продуктов (Product), доиавленых в корзину
    и параметры доставки (Delivery). 
    Для Cart, реализовать методы:
    - Добавить продукт в корзину
    - Удалить продукт из корзины по ID
    - Посчитать стоимость товаров в корзине
    - Задать доставку
    - Checkout - вернуть OK, если есть продукты и параметры доставки. Если нет кидаем ошибку.

    Product: id, название и цена
    Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)


*/

{
    class Product {
        constructor(public id: number, public title: string, public price: number) {}
    }

    // -- Delivery --
    class Delivery {
        constructor(public date: Date) {}
    }

    // Наследование Delivery для дома
    class HomeDelivery extends Delivery {
        constructor(date: Date, public address: string) {
            super(date)
        }
    }

    // Наследование Delivery для магазина
    class ShopDelivery extends Delivery {
        constructor(public shipId: number) {
            super(new Date)
        }
    }

    // Общий тип Delivery, чтобы применять в параметрах
    type DeliveryOptions = HomeDelivery | ShopDelivery;

    // -- Cart --
    class Cart {
        private products: Product[] = [];
        private delivery: DeliveryOptions;

        public addPoduct(product: Product): void {
            this.products.push(product)
        }

        public deliteProduct(productId: number): void {
            // Фильтруем продукты, оставляя только те у которых нет искомого productId
            this.products = this.products.filter((p: Product) => p.id !== productId);
        }

        public getSum(): number {
            return this.products
                // Получаем все цены
                .map((p: Product) => p.price)
                // Складываем суммы
                .reduce((sum: number, currPrice: number) => sum + currPrice)
        }

        public setDelivery(delivery: DeliveryOptions): void {
            this.delivery = delivery;
        }

        public checkout() {
            if(this.products.length == 0) {
                throw new Error('Not anyone products in cart')
            }

            if(!this.delivery) {
                throw new Error('Delivery not set')
            }

            return { success: true }
        }

    }


    // -- Test --

    const cart = new Cart();
    cart.addPoduct(new Product(1, "Coockies", 10))
    cart.addPoduct(new Product(2, "Cake", 30))
    cart.addPoduct(new Product(3, "Chocolate", 20))

    console.log(cart);

    cart.deliteProduct(1)
    console.log(cart)

    cart.setDelivery(new HomeDelivery(new Date(), "My Home address"))
    console.log(cart)

    console.log('Sum:', cart.getSum())
    console.log('Checkout:', cart.checkout())

}