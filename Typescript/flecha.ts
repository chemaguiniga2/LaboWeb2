let persona = {
    nombre: "Jorge",
    apellido: "Miramontes",

    imprime() {
        setTimeout(() => {
            console.log(`${this.nombre} ${this.apellido}`);
        }, 3000);
        
    }
}

persona.imprime();