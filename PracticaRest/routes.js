'use strict';
module.exports = function(app) {
    var platformCollection = require('./plataformaController');
    app.route('/plataformas/id/:id')
    .get(platformCollection.obtener_plataforma_id);

    app.route('/plataformas/nombre/:nombre')
    .get(platformCollection.obtener_plataforma_nombre);

    app.route('/plataformas/regex/:regex')
    .get(platformCollection.obtener_plataforma_regex);

    app.route('/plataformas/idPlat/juegos/:id')
    .get(platformCollection.obtener_juegos_id);

    app.route('/plataformas/regex/juego/:regex')
    .get(platformCollection.obtener_plataforma_regex_juego);

    app.route('/plataformas/idPlat/idJuego/:idPlat/:idJuego')
    .get(platformCollection.obtener_juego_idJuego_idConsola);

    app.route('/plataformas/nombrePlat/idJuego/:nombrePlat/:idJuego')
    .get(platformCollection.obtener_juego_idJuego_nombreConsola);
    
    app.route('/plataformas/blog')
    .get(platformCollection.obtener_entradas_blog);

    app.route('/plataformas')
    .get(platformCollection.obtener_plataformas);

    app.route('/plataformas/insertar')
    .post(platformCollection.insertar_plataformas);

    app.route('/plataformas/insertar/blog')
    .post(platformCollection.insertar_blog);

    app.route('/plataformas/insertar/juego')
    .post(platformCollection.insertar_juego);
    
    app.route('/blog')
    .get(platformCollection.obtener_blog);

}