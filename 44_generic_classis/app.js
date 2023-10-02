{
    // Generic классы
    var Resp = /** @class */ (function () {
        function Resp(data, error) {
            if (data) {
                this.data = data;
            }
            if (error) {
                this.error = error;
            }
        }
        return Resp;
    }());
    var res = new Resp('data', 0);
    console.log(res);
}
