let asincrono = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Ejecucion asincrona finalizada..");
        resolve();
    }, 3000)
})

console.log("Simulando alguna operación..");

asincrono.then(
    function() {
        console.log("Ejecución asincrona exitosa");
    },
    function() {
        console.log("Ejecución asíncona con error");
    }
)

console.log("Simulando alguna operación 2...");
console.log("Simulando alguna operación 3...");