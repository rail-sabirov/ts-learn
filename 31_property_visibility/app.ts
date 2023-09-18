{
    class Vehicle {
        // make: string;
        public make: string;
        
        private damages: string[];
        private _model: string;
        #price: number;

        protected run: number;

        setModel(m: string) {
            this._model = m;
        }

        getModel() {
            return this._model;
        }

        // внутри класса можем работать с приватными свойствами
        addDamage(damage: string) {
            this.damages.push(damage)
        }

        isPriceEquals(v: Vehicle) {
            return this.#price === v.#price;
        }

    }

    class EuroTrack extends Vehicle {
        setRun(km: number) {
            // run - это protected свойство, здесь оно доступно
            this.run = km;
            
            // тут мы не можем обратиться к приватнму свойству
            //this.damages = []
        }
    }


    new Vehicle().make = 'd';

    // тут приватное свойство не доступно
    //new Vehicle().damages = [];


}