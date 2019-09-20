import { Component, OnInit } from '@angular/core';
import { ConsolasService, Juegos } from '../../servicios/consolas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

  juegos:Juegos[] = [];
  idConsola:string = '';
  consola:any = {};
  constructor(private consolasService:ConsolasService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.idConsola=params['id'];
      this.juegos = this.consolasService.obtieneJuegos(this.idConsola);
      this.consola = this.consolasService.obtieneConsola(this.idConsola);
    })
  }
  

  ngOnInit() {
    //this.juegos = this.consolasService.obtieneJuegos()
  }

}
