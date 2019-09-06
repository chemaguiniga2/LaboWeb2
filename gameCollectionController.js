'use strict';
var fs = require("fs");
module.exports.obtener_juegos = function(req, res) {
    fs.readFile( __dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        console.log( err );
        console.log( data );
        res.end( data );
    });
};
module.exports.agregar_juego = function(req, res) {
    fs.readFile( __dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        for(var key in req.body) {
            if(req.body.hasOwnProperty(key)){
                data[key] = req.body[key];
            }
        }
        console.log( err );
        console.log( data );
        var nuevo = JSON.stringify(data);
        fs.writeFile(__dirname + "/" + "juegos.json", nuevo, 'utf8', function(err, data){
        
            console.log( err );
            res.end( err );
        
        });
        res.end( JSON.stringify(data));
    });
};
module.exports.obtener_juego = function(req, res) {
    fs.readFile( __dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        var juegos = JSON.parse( data );
        var juego = juegos[req.params.gameId]
        console.log( juego );
        res.end( JSON.stringify(juego));
    });
};
module.exports.eliminar_juego = function(req, res) {
    fs.readFile( __dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        var juegos = JSON.parse( data );
        delete juegos[req.params.gameId];
        
        res.end( JSON.stringify(juegos) );
    });
}