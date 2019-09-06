"use strict";
var numero1:number = 1;
var numero2:number = 2;

if(true) {
    var numero1:number = 3;
    var numero2:number = 4;

    console.log("(var) La suma en if es: " + (numero1 + numero2));
}

console.log("(var )La suma fuera del if es: " + (numero1 + numero2));

let numero3:number = 1;
let numero4:number = 2;

if(true) {
    let numero3:number = 3;
    let numero4:number = 4;

    console.log("(let) La suma en if es: " + (numero3 + numero4));
}

console.log("(let )La suma fuera del if es: " + (numero3 + numero4));