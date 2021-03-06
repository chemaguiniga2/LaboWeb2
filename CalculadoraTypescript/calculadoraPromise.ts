class calculadoraPromise {
    greetings:string;
    constructor(greetings:string){
        this.greetings = greetings;
    }

    suma(num1:number, num2:number, num3?:number) {
        new Promise(function(resolve, reject){
            setTimeout(() => {
                var res = num3 ? (num1 + num2) * num3 : num1 + num2;
                var log = num3 ? `La suma de ${num1} y ${num2} multiplicado por ${num3} es ${res}` : `La suma de ${num1} y ${num2} es ${res}`;
                console.log(log);
                resolve();
            }, 3000)
        }).then(
            function() {
                console.log("Ejecución asincrona exitosa");
            },
            function() {
                console.log("Ejecución asíncona con error");
            }
        )
    }

    resta(num1:number, num2:number, num3?:number) {
        new Promise(function(resolve, reject){
            setTimeout(() => {
                var res = num3 ? (num1 - num2) * num3 : num1 - num2;
                var log = num3 ? `La resta de ${num1} y ${num2} multiplicado por ${num3} es ${res}` : `La resta de ${num1} y ${num2} es ${res}`;
                console.log(log);
                resolve();
            }, 3000)
        }).then(
            function() {
                console.log("Ejecución asincrona exitosa");
            },
            function() {
                console.log("Ejecución asíncona con error");
            }
        )
    }

    multiplicacion(num1:number, num2:number, num3?:number) {
        new Promise(function(resolve, reject){
            setTimeout(() => {
                var res = num3 ? (num1 - num2) * num3 : num1 - num2;
                var log = num3 ? `La multiplicacion de ${num1} y ${num2} multiplicado por ${num3} es ${res}` : `La multiplicacion de ${num1} y ${num2} es ${res}`;
                console.log(log);
                resolve();
            }, 3000)
        }).then(
            function() {
                console.log("Ejecución asincrona exitosa");
            },
            function() {
                console.log("Ejecución asíncona con error");
            }
        )
    }

    division(num1:number, num2:number, num3?:number) {
        new Promise(function(resolve, reject){
            setTimeout(() => {
                var res = num3 ? (num1 - num2) * num3 : num1 - num2;
                var log = num3 ? `La division de ${num1} y ${num2} multiplicado por ${num3} es ${res}` : `La division de ${num1} y ${num2} es ${res}`;
                console.log(log);
                resolve();
            }, 3000)
        }).then(
            function() {
                console.log("Ejecución asincrona exitosa");
            },
            function() {
                console.log("Ejecución asíncona con error");
            }
        )
    }


}

var calcuPromise = new calculadoraPromise('hola');
calcuPromise.suma(1, 2);
calcuPromise.suma(1, 2, 3);
calcuPromise.resta(5, 1);
calcuPromise.resta(5, 1, 3);
calcuPromise.multiplicacion(5, 1);
calcuPromise.multiplicacion(5, 1, 10);
calcuPromise.division(10, 2);
calcuPromise.division(10, 2, 10);
