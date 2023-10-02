{
    // --- Generic классы
    
    class Resp<D, E> {
        data?: D;
        error?: E;

        constructor(data?: D, error?: E) {
            if(data) {
                this.data = data;
            }

            if (error) {
                this.error = error;
            }
        }
    }


    const res = new Resp<string, number>('data', 0);
    console.log(res);


    // --- Новый класс, наследующий Resp

    // При наследовании класса-дженерика нужно указать типы
    //class HTTPResp extends Resp<D, E> {
    class HTTPResp<F> extends Resp<string, number> {
        code: F;

        setCode(code: F) {
            this.code = code;
        }
    }


    const res2 = new HTTPResp<number>();
    
    
}