// Литеральный тип, варианты предопределены

{
    enum RequestType {
        GET = 'get',
        POST = 'post'
    }


    function fetchWithAuth(url: string, method: 'get' | 'post'): 1 | -1 {
        return 1
    }

    fetchWithAuth('s', 'get')
    fetchWithAuth('s', 'post')

    // строка является и типом и содержимым для переменной "a"
    let a: 'text' = 'text';

    // Так присвоить не получится, потому что значение отличается от text
    // a = 'go go'




}

