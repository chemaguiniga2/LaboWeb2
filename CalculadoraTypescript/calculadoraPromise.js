var calculadoraPromise = /** @class */ (function () {
    function calculadoraPromise(greetings) {
        this.greetings = greetings;
    }
    calculadoraPromise.prototype.suma = function (num1, num2, num3) {
        new Promise(function (resolve, reject) {
            setTimeout(function () {
                var res = num3 ? (num1 + num2) * num3 : num1 + num2;
                console.log("La suma de " + num1 + " y " + num2 + " multiplicado por " + num3 + " es " + res);
                resolve();
            }, 3000);
        }).then(function () {
            console.log("Ejecución asincrona exitosa");
        }, function () {
            console.log("Ejecución asíncona con error");
        });
    };
    return calculadoraPromise;
}());
var calcu = new calculadoraArrow('hola');
calcu.suma(1, 2);
