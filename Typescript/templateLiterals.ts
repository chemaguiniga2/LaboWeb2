let nombre:string = "Jorge";
let apellidoPaterno:string = "Miramontes";
console.log(nombre + " " + apellidoPaterno);

let tl = `${nombre} ${apellidoPaterno}`;

console.log(tl);

function suma(numero1:number, numero2:number) {
    return numero1 + numero2;
}

let sumaFuncion = `${suma(1,2)}`;

console.log(sumaFuncion);