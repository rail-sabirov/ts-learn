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

    interface ICart {
        products: Array<IProduct>;
        delivery: IDelivery;

        addProduct(product: IProduct): void;
        removeProduct(productId: number): void;
        getAmount(): number;
        setDelivery(delivery: IDelivery): void;
    }

    interface IProduct {
        id: number;
        name: string;
        price: number;
    }

    interface IDelivery {
        date: Date;
        address?: string;
        pointId?: number;
    }

    class Delivery implements IDelivery {
        date: Date;
        address?: string | undefined;
        pointId?: number | undefined;

        constructor();
        constructor(date: Date, address?: string);
        constructor(date: Date, pointId?: number);

        constructor(date?: Date, addressOrPoindId?: string | number) {
            if (date) {
                this.date = date;
            } else {
                this.date = new Date();
            }

            if (addressOrPoindId) {
                if (typeof addressOrPoindId === 'string') {
                    this.address = addressOrPoindId;
                } else {
                    this.pointId = addressOrPoindId;
                }
            }
        }
    }

    class DeliveryToHome extends Delivery {
        date: Date;
        address: string;

        constructor(date: Date, address: string) {
            super(date, address)
        }
    }

    class DeliveryToPoint extends Delivery {
        date: Date;
        pointId: number;

        constructor(pointId: number) {
            super(new Date(), pointId)
        }
    }

    class Product implements IProduct {
        id: number;
        name: string;
        price: number;

        constructor(id: number, name: string, price: number) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
    }

    class Cart implements ICart {
        products: Array<IProduct>;
        delivery: IDelivery;

        constructor();
        constructor(products: IProduct[], delivery: IDelivery)

        constructor(products?: IProduct[], delivery?: IDelivery) {
            if (products && Array.isArray(products)) {
                this.products = products;
            } else {
                this.products = new Array<IProduct>();
            }

            if (delivery) {
                this.delivery = delivery;
            } 
        }

        addProduct(product: IProduct) {
            this.products.push(product);
        }

        removeProduct(productId: number) {
            for(let i = 0; i < this.products.length; i++) {
                if(this.products[i].id === productId) {
                    this.products.splice(i, 1);
                    break;
                }
            }
        }

        getAmount(): number {
            let amount: number = 0;

            this.products.map(p => {
                amount += p.price;
            })

            return amount;
        }

        setDelivery(delivery: IDelivery) {
            this.delivery = delivery;
        }
    }


    const cart = new Cart();
    console.log(cart.products)
    
    cart.addProduct(new Product(1, 'Keyboard', 10));
    cart.addProduct(new Product(2, 'Mouse', 8));
    cart.addProduct(new Product(3, 'Mouse pad', 2));
    cart.setDelivery(new DeliveryToHome(new Date(), '111 10th Street, Brooklyn, NY, 11235'))

    console.log(cart);
    console.log('Cart amount: ', cart.getAmount())

    console.log('--- Remove product id: 2');
    cart.removeProduct(2)
    cart.setDelivery(new DeliveryToPoint(23));

    console.log(cart);
    console.log('Cart amount: ', cart.getAmount())

}