'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'videogames';

exports.obtener_plataforma_id = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){

            throw "Error al inicio";
        }
        const db = mdbclient.db(dbName);
        var idPlat = req.params.id;

        // var lookFor = req.params.id ? req.params.id : req.params.nombre;

        // db.collection("plataforma").findOne({})
        console.log(req.params.id);
       
        db.collection("plataforma").findOne({_id:idPlat}, {projection:{nombre:1, imagen:1, ficha_tecnica:1, _id:0}}, function(err, result) {
            if(err) {
                throw "Hay error";
            }
            console.log("cONSULTA EJECUTADA..");
            mdbclient.close();
            res.end( JSON.stringify(result) );
        });
        

    });
};

exports.obtener_plataforma_nombre = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){

            throw "Error al inicio";
        }
        const db = mdbclient.db(dbName);
        var idPlat = req.params.nombre;

        // var lookFor = req.params.id ? req.params.id : req.params.nombre;

        // db.collection("plataforma").findOne({})
        console.log(req.params.nombre);
       
        db.collection("plataforma").findOne({nombre:idPlat}, {projection:{nombre:1, imagen:1, ficha_tecnica:1, _id:0}}, function(err, result) {
            if(err) {
                throw "Hay error";
            }
            console.log("cONSULTA EJECUTADA..");
            mdbclient.close();
            res.end( JSON.stringify(result) );
        });
        

    });
};

exports.obtener_plataforma_regex = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);
        

        var reg = `${req.params.regex}`
        // var lookFor = req.params.id ? req.params.id : req.params.nombre;

        // db.collection("plataforma").findOne({})
        console.log(req.params.id);
       
        db.collection("plataforma").findOne({_id: {$regex: reg}}, {projection:{nombre:1, imagen:1, ficha_tecnica:1, _id:0}}, function(err, result) {
            if(err) {
                throw err;
            }
            
            mdbclient.close();
            res.end( JSON.stringify(result) );
        });
        

    });
}

exports.obtener_juegos_id = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);
        var idPlat = req.params.id;

        // var lookFor = req.params.id ? req.params.id : req.params.nombre;

        // db.collection("plataforma").findOne({})
        
       
        // db.collection("plataforma").find({_id:idPlat}, {projection:{lista_juegos:1, _id:0}}, function(err, result) {
        //     if(err) {
        //         throw err;
        //     }
            
        //     mdbclient.close();
        //     var resultJuegos = JSON.stringify(result["lista_juegos"])

        //     // resultJuegos.forEach(function(el) {
        //     //     console.log(el);
        //     // });
        //     res.end( resultJuegos[1] );
        // });

        db.collection("plataforma").find({_id:idPlat}).project({lista_juegos:1, _id:0}).toArray(function(err, result) {

            if (err){

                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            

            var arrJuegos = [];

            var listJuegos = result[0]["lista_juegos"];
            console.log(listJuegos);

            var asicrono = new Promise(function(resolve, reject) {
                console.log("iniciando...");
                listJuegos.forEach(el => {
                    
                    db.collection("juego").find({_id:el}).project({nombre:1, imagen_portada:1, _id:1}).toArray(function(err, result) {
                        if (err){
    
                            throw err;
                        }
                        
                        
                        arrJuegos.push(result);
                        if(arrJuegos.length == listJuegos.length){
                            console.log("terminando...");
                            console.log(`Lenght de arrJuegos= ${arrJuegos.length}`);
                            console.log(`Lenght de listJuegos= ${listJuegos.length}`);
                            //console.log(arrJuegos);
                            res.end(JSON.stringify(arrJuegos));
                            resolve(arrJuegos);
                        }
                        //res.end(JSON.stringify(result));
                        //arrJuegos.push(result);
                        
                    });
                });
                
            })
            

            


            // listJuegos.forEach(el => {
            //     console.log(`${el}`);
            //     db.collection("juego").find({_id:el}).project({nombre:1, imagen_portada:1, _id:0}).toArray(function(err, result) {
            //         if (err){

            //             throw err;
            //         }
            //         console.log(result);
            //         //res.end(JSON.stringify(result));
            //         //arrJuegos.push(result);
                    
            //     });
            // });
            
            
            
        });
        

    });
}

exports.obtener_plataforma_regex_juego = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);
        
        var reg = `${req.params.regex}`
        
       
        db.collection("juego").findOne({nombre: {$regex: reg}}, {projection:{nombre:1, imagen_portada:1, _id:0}}, function(err, result) {
            if(err) {
                throw err;
            }
            
            mdbclient.close();
            res.end( JSON.stringify(result) );
        });
        

    });
}


exports.obtener_entradas_blog = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);
        //Solamente obtenemos el nombre y la matricula

        db.collection("blog").find({}).project({_id:1, nombre_autor:1, fecha_entrada:1, texto:1}).toArray(function(err, result) {

            if (err){

                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));

            });
    });
};

exports.obtener_juego_idJuego_idConsola = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);

        var idJuego = req.params.idJuego;
        var idPlat = req.params.idPlat;

        db.collection("plataforma").find({_id:idPlat}).project({lista_juegos:1, _id:0}).toArray(function(err, result) {
            if(err) {
                throw "Hay error";
            }
            var listJuegos = result[0]["lista_juegos"];

            console.log(listJuegos.includes(idJuego));

            if (!listJuegos.includes(idJuego)) {
                throw "No es válido el id del juego";
            }

            db.collection("juego").findOne({_id:idJuego}, {projection:{nombre:1, imagen_portada:1, developer:1, fecha_lanzamiento:1, lista_imagenes:1, ligas_relacionadas:1, _id:0}}, function(err, result) {
                if(err) {
                    throw err;
                }
                
                mdbclient.close();
                res.end( JSON.stringify(result) );
            });
            

            mdbclient.close();
            //res.end( JSON.stringify(listJuegos) );
        });


    });
};

exports.obtener_juego_idJuego_nombreConsola = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);

        var idJuego = req.params.idJuego;
        var nombrePlat = req.params.nombrePlat;

        db.collection("plataforma").find({nombre:nombrePlat}).project({lista_juegos:1, _id:0}).toArray(function(err, result) {
            if(err) {
                throw "Hay error";
            }
            var listJuegos = result[0]["lista_juegos"];

            console.log(listJuegos.includes(idJuego));

            if (!listJuegos.includes(idJuego)) {
                throw "No es válido el id del juego";
            }

            db.collection("juego").findOne({_id:idJuego}, {projection:{nombre:1, imagen_portada:1, developer:1, fecha_lanzamiento:1, lista_imagenes:1, ligas_relacionadas:1, _id:0}}, function(err, result) {
                if(err) {
                    throw err;
                }
                
                mdbclient.close();
                res.end( JSON.stringify(result) );
            });
            

            mdbclient.close();
            //res.end( JSON.stringify(listJuegos) );
        });


    });
};

exports.obtener_plataformas = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);

        db.collection("plataforma").find({}).project({nombre:1, imagen:1, ficha_tecnica:1}).toArray(function(err, result) {

            if (err){
                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));

            });
    });
};





