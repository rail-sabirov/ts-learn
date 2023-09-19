{
    class UserService {

        // static name: string = 'Vasya'; // <-- нельзя, посягаемся на зарезервированное свойство
        name: string = 'Vasya';

        static db: any;

        static getUserById(id: number) {
            // Вызов статичного свойства внутри класса
            return UserService.db.findById(id);
        }

        public create() {
            // Обращение к статичному свойству, внутри метода для объекта
            UserService.db;
        }

        static {
            UserService.db = 'sdf';
        }
    }

    UserService.db;
    UserService.getUserById(1);

    const inst = new UserService();
    inst.create();

}