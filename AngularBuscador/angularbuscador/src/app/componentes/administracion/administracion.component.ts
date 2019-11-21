import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../../servicios/consolas.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  formulario:FormGroup;

  constructor( public consolasService:ConsolasService ) {
    
    this.formulario = new FormGroup({
      '_id': new FormControl(''),
      'nombre': new FormControl(''),
      'imagen': new FormControl(''),
      'ficha_tecnica': new FormControl(''),
      'lista_juegos': new FormArray([
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl(''),
          'imagen_portada': new FormControl(''),
          'developer': new FormControl(''),
          'fecha_lanzamiento': new FormControl(''),
          'lista_imagenes': new FormArray([
            new FormGroup({
              'imagen': new FormControl(''),
            }),
            new FormGroup({
              'imagen': new FormControl(''),
            }),
            new FormGroup({
              'imagen': new FormControl(''),
            }),
          ]),
          'ligas_relacionadas': new FormArray([
            new FormGroup({
              'url': new FormControl(''),
            }),
            new FormGroup({
              'url': new FormControl(''),
            }),
            new FormGroup({
              'url': new FormControl(''),
            }),
          ])
        }),
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl(''),
          'imagen_portada': new FormControl(''),
          'developer': new FormControl(''),
          'fecha_lanzamiento': new FormControl(''),
          'lista_imagenes': new FormArray([
            new FormGroup({
              'imagen': new FormControl(''),
            }),
            new FormGroup({
              'imagen': new FormControl(''),
            }),
            new FormGroup({
              'imagen': new FormControl(''),
            }),
          ]),
          'ligas_relacionadas': new FormArray([
            new FormGroup({
              'url': new FormControl(''),
            }),
            new FormGroup({
              'url': new FormControl(''),
            }),
            new FormGroup({
              'url': new FormControl(''),
            }),
          ])
        }),
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl(''),
          'imagen_portada': new FormControl(''),
          'developer': new FormControl(''),
          'fecha_lanzamiento': new FormControl(''),
          'lista_imagenes': new FormArray([
            new FormGroup({
              'imagen': new FormControl(''),
            }),
            new FormGroup({
              'imagen': new FormControl(''),
            }),
            new FormGroup({
              'imagen': new FormControl(''),
            }),
          ]),
          'ligas_relacionadas': new FormArray([
            new FormGroup({
              'url': new FormControl(''),
            }),
            new FormGroup({
              'url': new FormControl(''),
            }),
            new FormGroup({
              'url': new FormControl(''),
            }),
          ])
        }),
      ])
    })

  }

  ngOnInit() {
  }

  getJuegos() {
    return this.formulario.get('lista_juegos') as FormArray;
  }

  insertar() {
    var consola = {
      _id: this.formulario.controls['_id'].value,
      nombre: this.formulario.controls['nombre'].value,
      imagen: this.formulario.controls['imagen'].value,
      ficha_tecnica: this.formulario.controls['ficha_tecnica'].value,
      lista_juegos: [
      
          this.formulario.controls['lista_juegos'].value[0]._id,
       
      
          this.formulario.controls['lista_juegos'].value[1]._id,
       
      
          this.formulario.controls['lista_juegos'].value[2]._id,
       
      ]
    }

    var juegoUno = {
      _id: this.formulario.controls['lista_juegos'].value[0]._id,
      nombre: this.formulario.controls['lista_juegos'].value[0].nombre,
      imagen_portada: this.formulario.controls['lista_juegos'].value[0].imagen_portada,
      developer: this.formulario.controls['lista_juegos'].value[0].developer,
      fecha_lanzamiento: this.formulario.controls['lista_juegos'].value[0].fecha_lanzamiento,
      lista_imagenes: [
        this.formulario.controls['lista_juegos'].value[0].lista_imagenes[0],
        this.formulario.controls['lista_juegos'].value[0].lista_imagenes[1],
        this.formulario.controls['lista_juegos'].value[0].lista_imagenes[2],
      ],
      ligas_relacionadas: [
        this.formulario.controls['lista_juegos'].value[0].ligas_relacionadas[0],
        this.formulario.controls['lista_juegos'].value[0].ligas_relacionadas[1],
        this.formulario.controls['lista_juegos'].value[0].ligas_relacionadas[2],
      ]

    }

    var juegoDos = {
      _id: this.formulario.controls['lista_juegos'].value[1]._id,
      nombre: this.formulario.controls['lista_juegos'].value[1].nombre,
      imagen_portada: this.formulario.controls['lista_juegos'].value[1].imagen_portada,
      developer: this.formulario.controls['lista_juegos'].value[1].developer,
      fecha_lanzamiento: this.formulario.controls['lista_juegos'].value[1].fecha_lanzamiento,
      lista_imagenes: [
        this.formulario.controls['lista_juegos'].value[1].lista_imagenes[0],
        this.formulario.controls['lista_juegos'].value[1].lista_imagenes[1],
        this.formulario.controls['lista_juegos'].value[1].lista_imagenes[2],
      ],
      ligas_relacionadas: [
        this.formulario.controls['lista_juegos'].value[1].ligas_relacionadas[0],
        this.formulario.controls['lista_juegos'].value[1].ligas_relacionadas[1],
        this.formulario.controls['lista_juegos'].value[1].ligas_relacionadas[2],
      ]

    }

    var juegoTres = {
      _id: this.formulario.controls['lista_juegos'].value[2]._id,
      nombre: this.formulario.controls['lista_juegos'].value[2].nombre,
      imagen_portada: this.formulario.controls['lista_juegos'].value[2].imagen_portada,
      developer: this.formulario.controls['lista_juegos'].value[2].developer,
      fecha_lanzamiento: this.formulario.controls['lista_juegos'].value[2].fecha_lanzamiento,
      lista_imagenes: [
        this.formulario.controls['lista_juegos'].value[2].lista_imagenes[0],
        this.formulario.controls['lista_juegos'].value[2].lista_imagenes[1],
        this.formulario.controls['lista_juegos'].value[2].lista_imagenes[2],
      ],
      ligas_relacionadas: [
        this.formulario.controls['lista_juegos'].value[2].ligas_relacionadas[0],
        this.formulario.controls['lista_juegos'].value[2].ligas_relacionadas[1],
        this.formulario.controls['lista_juegos'].value[2].ligas_relacionadas[2],
      ]
    }

    this.consolasService.insertarConsola(consola).subscribe();

    this.consolasService.insertarJuego(juegoUno).subscribe();
    this.consolasService.insertarJuego(juegoDos).subscribe();
    this.consolasService.insertarJuego(juegoTres).subscribe();

  }

}
