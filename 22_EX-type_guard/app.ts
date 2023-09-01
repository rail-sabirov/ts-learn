// Упражнение - Type guard ответа
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

    // Статусы
    enum PaymentStatus {
        Success = 'success',
        Filed = 'filed',
    }

    // Бизнес сущность платежа - можно использовать в данных
    interface IPayment {
        sum: number;
        from: number;
        to: number;
    }

    // alias для того чтобы заделить бизнес логику и ответ
    interface IPaymentRequest extends IPayment {}

    // -- Типы data для разных статусов, используются в ответах
    interface IDataSuccess extends IPaymentRequest {
        databaseId: number;
    }

    interface IDataFailed {
        errorMessage: string;
        errorCode: number;
    }

    // -- Ответы для разных статусов
    interface IResponseSuccess {
        status: PaymentStatus.Success;
        data: IDataSuccess;
    }

    interface IResponseFailed {
        status: PaymentStatus.Filed;
        data: IDataFailed;
    }

    // Определие Union type, чтобы не повторяться
    type Res = IResponseSuccess | IResponseFailed;

    // Type guard
    function isIResponseSuccess(res: Res): res is IResponseSuccess {
        return res.status === PaymentStatus.Success ? true : false;

        // Другой способ
        //return (res as IResponseSuccess).data.database !== undefined
    }

    // Функция, которая проверяет тип с помощью type guard возвращает DatabaseId
    const getIdFromData = (res: Res): number => {
        // Тут type guard излишен, мы бы могли просто проверить res.status === PaymentStatus.Success
        if(isIResponseSuccess(res)) {
            return res.data.databaseId
        
        } else {
            throw new Error(res.data.errorMessage)
        }
    }











}