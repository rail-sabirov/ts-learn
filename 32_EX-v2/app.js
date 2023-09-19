"use strict";
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
        constructor(id, title, price) {
            this.id = id;
            this.title = title;
            this.price = price;
        }
    }
    // -- Delivery --
    class Delivery {
        constructor(date) {
            this.date = date;
        }
    }
    // Наследование Delivery для дома
    class HomeDelivery extends Delivery {
        constructor(date, address) {
            super(date);
            this.address = address;
        }
    }
    // Наследование Delivery для магазина
    class ShopDelivery extends Delivery {
        constructor(shipId) {
            super(new Date);
            this.shipId = shipId;
        }
    }
    // -- Cart --
    class Cart {
        constructor() {
            this.products = [];
        }
        addPoduct(product) {
            this.products.push(product);
        }
        deliteProduct(productId) {
            // Фильтруем продукты, оставляя только те у которых нет искомого productId
            this.products = this.products.filter((p) => p.id !== productId);
        }
        getSum() {
            return this.products
                // Получаем все цены
                .map((p) => p.price)
                // Складываем суммы
                .reduce((sum, currPrice) => sum + currPrice);
        }
        setDelivery(delivery) {
            this.delivery = delivery;
        }
        checkout() {
            if (this.products.length == 0) {
                throw new Error('Not anyone products in cart');
            }
            if (!this.delivery) {
                throw new Error('Delivery not set');
            }
            return { success: true };
        }
    }
    // -- Test --
    const cart = new Cart();
    cart.addPoduct(new Product(1, "Coockies", 10));
    cart.addPoduct(new Product(2, "Cake", 30));
    cart.addPoduct(new Product(3, "Chocolate", 20));
    console.log(cart);
    cart.deliteProduct(1);
    console.log(cart);
    cart.setDelivery(new HomeDelivery(new Date(), "My Home address"));
    console.log(cart);
    console.log('Sum:', cart.getSum());
    console.log('Checkout:', cart.checkout());
}
