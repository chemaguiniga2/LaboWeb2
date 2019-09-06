var calculadora = /** @class */ (function () {
    function calculadora(message) {
        this.greeting = message;
    }
    calculadora.prototype.sumar = function (a, b, c) {
        if (c) {
            console.log("La suma de " + a + " y " + b + " multiplicado por " + c + " es " + (a + b) * c);
        }
        else {
            console.log("La suma de " + a + " y " + b + " es " + (a + b));
        }
    };
    calculadora.prototype.restar = function (a, b, c) {
        if (c) {
            console.log("La resta de " + a + " y " + b + " multiplicado por " + c + " es " + (a - b) * c);
        }
        else {
            console.log("La resta de " + a + " y " + b + " es " + (a - b));
        }
    };
    calculadora.prototype.dividir = function (a, b, c) {
        if (c) {
            console.log("La divisi\u00F3n de " + a + " y " + b + " multiplicado por " + c + " es " + (a / b) * c);
        }
        else {
            console.log("La divisi\u00F3n de " + a + " y " + b + " es " + a / b);
        }
    };
    calculadora.prototype.multiplicar = function (a, b, c) {
        if (c) {
            console.log("La multiplicaci\u00F3n de " + a + " y " + b + " multiplicado por " + c + " es " + (a * b) * c);
        }
        else {
            console.log("La multiplicaci\u00F3n de " + a + " y " + b + " es " + a * b);
        }
    };
    return calculadora;
}());
var prueba = new calculadora('Hi');
prueba.sumar(1, 2);
prueba.sumar(1, 2, 3);
prueba.restar(1, 2);
prueba.restar(1, 2, 3);
prueba.dividir(1, 2);
prueba.dividir(1, 2, 3);
prueba.multiplicar(1, 2);
prueba.multiplicar(1, 2, 3);
