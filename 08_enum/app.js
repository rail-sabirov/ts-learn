// Enum
{
    var StatusCode = void 0;
    (function (StatusCode) {
        StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
        StatusCode[StatusCode["IN_PROGRESS"] = 3] = "IN_PROGRESS";
        StatusCode[StatusCode["FAILED"] = 10] = "FAILED";
    })(StatusCode || (StatusCode = {}));
    var res = {
        message: 'Платеж успешен',
        statusCode: StatusCode.SUCCESS
    };
    // 1 - success
    // 2 - in process
    // 3 - rejected
    if (res.statusCode === StatusCode.SUCCESS) {
    }
    // enum в параметрах функции
    function action(status) {
    }
    action(StatusCode.IN_PROGRESS);
    action(1);
    // Значение enum как функция
    function compute() {
        return 3;
    }
    var Roles = void 0;
    (function (Roles) {
        Roles[Roles["ADMIN"] = 1] = "ADMIN";
        Roles[Roles["HR"] = 2] = "HR";
        Roles[Roles["USER"] = compute()] = "USER";
    })(Roles || (Roles = {}));
    // Enum созданый на "лету" - как объект - это объект, как параметр функции
    function test(x) {
    }
    var res2 = 1 /* ADMIN */;
}
