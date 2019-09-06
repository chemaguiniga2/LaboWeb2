class calculadora {
    greeting:string;
    constructor(message: string) {
      this.greeting = message;
    }

    sumar(a:number, b:number, c?:number) {
      if(c) {
        console.log(`La suma de ${a} y ${b} multiplicado por ${c} es ${(a + b) * c}`);
      } else {
        console.log(`La suma de ${a} y ${b} es ${a + b}`);
      }
    }
    restar(a: number, b:number, c?:number) {
      if(c) {
        console.log(`La resta de ${a} y ${b} multiplicado por ${c} es ${(a - b) * c}`);
      } else {
        console.log(`La resta de ${a} y ${b} es ${a - b}`);
      }
    }
    dividir(a: number, b:number, c?:number) {
      if(c) {
        console.log(`La división de ${a} y ${b} multiplicado por ${c} es ${(a / b) * c}`);
      } else {
        console.log(`La división de ${a} y ${b} es ${a / b}`);
      }
    }
    multiplicar(a: number, b:number, c?:number) {
      if(c) {
        console.log(`La multiplicación de ${a} y ${b} multiplicado por ${c} es ${(a * b) * c}`);
      } else {
        console.log(`La multiplicación de ${a} y ${b} es ${a * b}`);
      }
    }
}

var prueba = new calculadora('Hi');

prueba.sumar(1,2);
prueba.sumar(1,2,3);
prueba.restar(1,2);
prueba.restar(1,2,3);
prueba.dividir(1,2);
prueba.dividir(1,2,3);
prueba.multiplicar(1,2);
prueba.multiplicar(1,2,3);