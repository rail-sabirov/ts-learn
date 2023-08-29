{
/*
// pay request 
{
    "sum": 10000,
    "from": 2,
    "to": 4
}

// Response
[
    {
        "status": "success",
        "data": {
            "databaseId": 567,
            "sum": 10000,
            "from": 2,
            "to": 4
        }
    },
    {
        "status": "filed",
        "data": {
            "errorMessage": "Недостаточно средств",
            "errorCode": 4
        }
    }
]
*/


// Бизнес сущность платежа - можно использовать в данных
interface IPyament {
    sum: number;
    from: number;
    to: number;
}

// Сущность для передачи Запроса, создаем из бизнес сущности для разделения и добавления доп. полей
interface IPyamentRequest extends IPyament {}

// Статусы
enum PaymentStatus {
    Success = 'success',
    Filed = 'filed',
}

// Сущность для успешного ответа
interface IDataSuccess extends IPyament {
    databaseId: number;
}

// Сущьность для не успешного ответа
interface IDataFiled {
    errorMessag: string;
    errorCode: number;
}

// Сущность с ТОЧНЫМ указанием ответа success 
// Таким образом мы привязываем конкрентный status с data
interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess
}

// Это для Filed
interface IResponseFailed {
    status: PaymentStatus.Filed;
    data: IDataFiled;
}

/*
// Теперь можно получить конкретный тип и по статусу определить data
function get(): IResponseSuccess | IResponseFailed {
    ...
}
*/
}