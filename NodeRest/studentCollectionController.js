'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'alumnos_servicio_2';
exports.obtener_estudiantes = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){

            throw err;
        }
        const db = mdbclient.db(dbName);
        //Solamente obtenemos el nombre y la matricula

        db.collection("alumnos").find({}).project({nombre:1, matricula:1}).toArray(function(err, result) {

            if (err){

                throw err;
            }
            console.log("Resultados Obtenidos: " + result.length);
            mdbclient.close();
            res.end( JSON.stringify(result));

            });
    });
};
exports.obtener_estudiante = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){

        throw err;
        }
        const db = mdbclient.db(dbName);
        var matriculaAlumno = req.params.matricula;

        db.collection("alumnos").findOne({matricula:matriculaAlumno}, function(err, result) {

        if (err){

        throw err;
        }console.log("Consulta ejecutada...");
        mdbclient.close();
        res.end( JSON.stringify(result));

        });
    });
};
exports.agregar_estudiante = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, mdbclient) {
        if (err){

        throw err;
        }
        const db = mdbclient.db(dbName);
        var nuevoAlumno = req.body;

        db.collection("alumnos").insertOne(nuevoAlumno, function(err, res) {

            if (err){

                throw err;
            }
            console.log("Insert ejecutado...");
            mdbclient.close();

        });
        res.end();
    });
};
