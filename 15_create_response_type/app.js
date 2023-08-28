{
    // ------ Use ----------------------------------
    // pay request 
    var req = {
        "sum": 10000,
        "from": 2,
        "to": 4
    };
    // Response
    var resp = [
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
    ];
    console.log(req);
    console.log(resp);
}
