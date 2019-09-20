import { Injectable } from '@angular/core';
@Injectable()
export class ConsolasService {

    private juegosPc:Juegos[] = [
        {
            nombre: 'PacMan',
            imagen: 'https://www5.minijuegosgratis.com/v3/games/thumbnails/2399_3.jpg',
            developer: 'Juan Perz',
            lanzamiento:'07/06/84',
        },
        {
            nombre: 'League of Legends',
            imagen: 'https://i.blogs.es/19ba21/league-of-legends/1366_2000.jpg',
            developer: 'Johan Ochoa',
            lanzamiento:'01/06/2014',
        },
        {
            nombre: 'Clash Royale',
            imagen: 'https://lh3.googleusercontent.com/K-MNjDiO2WwRNwJqPZu8Wd5eOmFEjLYkEEgjZlv35hTiua_VylRPb04Lig3YZXLERvI=s360-rw',
            developer: 'Lewis Hamilton',
            lanzamiento:'05/05/2016',
        },
    ];

    private juegosPlay:Juegos[] = [
        {
            nombre: 'Madden 20',
            imagen: 'https://media.gamestop.com/i/gamestop/10172879/Madden-NFL-20?$pdp$',
            developer: 'Juan Sosa',
            lanzamiento:'08/07/2019',
        },
        {
            nombre: 'Spiderman',
            imagen: 'https://static-ca.ebgames.ca/images/products/725283/3max.jpg',
            developer: 'Patricio Estrella',
            lanzamiento:'12/07/2018',
        },
        {
            nombre: 'The Last of Us',
            imagen: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
            developer: 'Travis Scott',
            lanzamiento:'01/03/2015',
        },
    ];

    private juegosXbox:Juegos[] = [
        {
            nombre: 'Madden 20',
            imagen: 'https://media.gamestop.com/i/gamestop/10172879/Madden-NFL-20?$pdp$',
            developer: 'Juan Sosa',
            lanzamiento:'08/07/2019',
        },
        {
            nombre: 'Spiderman',
            imagen: 'https://static-ca.ebgames.ca/images/products/725283/3max.jpg',
            developer: 'Patricio Estrella',
            lanzamiento:'12/07/2018',
        },
        {
            nombre: 'The Last of Us',
            imagen: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
            developer: 'Travis Scott',
            lanzamiento:'01/03/2015',
        },
    ];
    private juegosSwitch:Juegos[] = [
        {
            nombre: 'Madden 20',
            imagen: 'https://media.gamestop.com/i/gamestop/10172879/Madden-NFL-20?$pdp$',
            developer: 'Juan Sosa',
            lanzamiento:'08/07/2019',
        },
        {
            nombre: 'Spiderman',
            imagen: 'https://static-ca.ebgames.ca/images/products/725283/3max.jpg',
            developer: 'Patricio Estrella',
            lanzamiento:'12/07/2018',
        },
        {
            nombre: 'The Last of Us',
            imagen: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
            developer: 'Travis Scott',
            lanzamiento:'01/03/2015',
        },
    ];

    private consolas:Consola[] = [
        {
        nombre: "PC Master Race",
        descripcion: "Juegos para PC",
        caracteristicas: "Texto y listado de las características de la consola PC Master Race...",
        imagen: "assets/pcmr.jpg",
        juegos : this.juegosPc,
        },
        {
        nombre: "Playstation 4",
        descripcion: "Juegos para PS4",
        caracteristicas: "Texto y listado de las características de la consola Playstation 4...",
        imagen: "assets/ps4.jpg",
        juegos : this.juegosPlay,
        },
        {
        nombre: "Xbox One",
        descripcion: "Juegos para Xbox One",
        caracteristicas: "Texto y listado de las características de la consola Xbox One...",
        imagen: "assets/xboxone.jpg",
        juegos : this.juegosXbox,
        },
        {
        nombre: "Nintendo Switch",
        descripcion: "Juegos para Nintendo Switch",
        caracteristicas: "Texto y listado de las características de la consola Nintendo Switch...",
        imagen: "assets/nswitch.jpg",
        juegos : this.juegosSwitch,
        }
    ];

    constructor() {
        console.log("ConsolasService Creado...");
    }

    obtieneConsolas():Consola[]{
        return this.consolas;
    }

    obtieneConsola(id:string):Consola{
        return this.consolas[id];
    }

    obtieneJuegos(consola:string):Juegos[]{
        return this.consolas[consola].juegos;
    }

    obtieneJuego(consola:string, juego:string){
        return this.consolas[consola].juegos[juego];
    }

}

export interface Consola{
    nombre:string;
    descripcion:string;
    caracteristicas:string;
    imagen:string;
    juegos:Array<Juegos>;
}

export interface Juegos{
    nombre:string;
    imagen:string;
    developer:string;
    lanzamiento:string;
}