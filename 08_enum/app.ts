// Enum
{
    enum StatusCode {
        SUCCESS = 1,
        IN_PROGRESS = 3,
        FAILED = 10
    }

    const res = {
        message: 'Платеж успешен',
        statusCode: StatusCode.SUCCESS
    };

    // 1 - success
    // 2 - in process
    // 3 - rejected

    if (res.statusCode === StatusCode.SUCCESS) {

    }


    // enum в параметрах функции
    function action(status: StatusCode) {

    }

    action(StatusCode.IN_PROGRESS)
    action(1)


    // Значение enum как функция
    function compute() {
        return 3;
    }

    enum Roles {
        ADMIN = 1,
        HR = ADMIN + 1,
        USER = compute()
    }


    // Enum созданый на "лету" - как объект - это объект, как параметр функции
    function test (x: { ADMIN: number }) {

    }


    // Константные enum
    const enum MyRoles {
        ADMIN = 1,
        USER = 2
    }


    const res2 = MyRoles.ADMIN;
}
