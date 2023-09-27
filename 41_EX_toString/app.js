/*
    Необходимо написать функцию toString, которая принимает любой тип
    и возвращает его строковое представление. Усле не може, то
    возвращает undefined

*/
{
    function myToString(data) {
        if (Array.isArray(data)) {
            return data.toString();
        }
        switch (typeof data) {
            case 'string':
                return data;
                break;
            case 'number':
            case 'bigint':
            case 'boolean':
            case 'symbol':
            case 'function':
                return data.toString();
                break;
            case 'object':
                return JSON.stringify(data);
            default:
                return undefined;
        }
    }
    console.log('array: ["test"]', myToString(['test']));
    console.log('string:', myToString('string'));
    console.log('number:', myToString(12345));
    console.log('bigint:', myToString(12345678901234567890));
    console.log('function:', myToString(function () { return 'function'; }));
    console.log('object:', myToString({ key: 'value' }));
}
