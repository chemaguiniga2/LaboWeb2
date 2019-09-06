var calculadoraArrow = /** @class */ (function () {
    function calculadoraArrow(greeting) {
        this.suma = function (num1, num2, num3) {
            return num3 ? (num1 + num2) * num3 : num1 + num2;
        };
        this.resta = function (num1, num2, num3) {
            return num3 ? (num1 - num2) * num3 : num1 - num2;
        };
        this.multiplicar = function (num1, num2, num3) {
            return num3 ? (num1 * num2) * num3 : num1 * num2;
        };
        this.dividir = function (num1, num2, num3) {
            return num3 ? (num1 / num2) * num3 : num1 / num2;
        };
        this.greeting = greeting;
    }
    return calculadoraArrow;
}());
var calcu = new calculadoraArrow('hola');
console.log("La suma entre 2 y 3 es: " + calcu.suma(2, 3));
console.log("La suma entre 5 y 2, multiplicado por 10 es: " + calcu.suma(5, 2, 10));
console.log("La resta entre 43 y 3 es: " + calcu.resta(43, 3));
console.log("La resta entre 21 y 2, multiplicado por 10 es: " + calcu.resta(21, 2, 10));
console.log("La multiplicacion entre 2 y 3 es: " + calcu.multiplicar(2, 3));
console.log("La multiplicacion entre 432 y 6, multiplicado por 10 es: " + calcu.multiplicar(432, 6, 10));
console.log("La dividir entre 10 y 2 es: " + calcu.dividir(10, 2));
console.log("La dividir entre 10 y 5, multiplicado por 10 es: " + calcu.dividir(10, 5, 10));
