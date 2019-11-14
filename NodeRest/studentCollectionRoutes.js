'use strict';
module.exports = function(app) {
    var studentCollection = require('./studentCollectionController');
    app.route('/students')
    .get(studentCollection.obtener_estudiantes)
    .post(studentCollection.agregar_estudiante);
    
    app.route('/students/:matricula')
    .get(studentCollection.obtener_estudiante);
};