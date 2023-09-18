"use strict";
/*
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
    class Delivery {
        constructor(date, addressOrPoindId) {
            if (date) {
                this.date = date;
            }
            else {
                this.date = new Date();
            }
            if (addressOrPoindId) {
                if (typeof addressOrPoindId === 'string') {
                    this.address = addressOrPoindId;
                }
                else {
                    this.pointId = addressOrPoindId;
                }
            }
        }
    }
    class DeliveryToHome extends Delivery {
        constructor(date, address) {
            super(date, address);
        }
    }
    class DeliveryToPoint extends Delivery {
        constructor(pointId) {
            super(new Date(), pointId);
        }
    }
    class Product {
        constructor(id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
    }
    class Cart {
        constructor(products, delivery) {
            if (products && Array.isArray(products)) {
                this.products = products;
            }
            else {
                this.products = new Array();
            }
            if (delivery) {
                this.delivery = delivery;
            }
        }
        addProduct(product) {
            this.products.push(product);
        }
        removeProduct(productId) {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id === productId) {
                    this.products.splice(i, 1);
                    break;
                }
            }
        }
        getAmount() {
            let amount = 0;
            this.products.map(p => {
                amount += p.price;
            });
            return amount;
        }
        setDelivery(delivery) {
            this.delivery = delivery;
        }
    }
    const cart = new Cart();
    console.log(cart.products);
    cart.addProduct(new Product(1, 'Keyboard', 10));
    cart.addProduct(new Product(2, 'Mouse', 8));
    cart.addProduct(new Product(3, 'Mouse pad', 2));
    cart.setDelivery(new DeliveryToHome(new Date(), '111 10th Street, Brooklyn, NY, 11235'));
    console.log(cart);
    console.log('Cart amount: ', cart.getAmount());
    console.log('--- Remove product id: 2');
    cart.removeProduct(2);
    cart.setDelivery(new DeliveryToPoint(23));
    console.log(cart);
    console.log('Cart amount: ', cart.getAmount());
}
