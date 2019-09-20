import { Component, OnInit } from '@angular/core';
import { ConsolasService, Juegos } from '../../servicios/consolas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juego:any={};
  idConsole:string = '';
  id:string = '';

  constructor(private consolasService:ConsolasService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      this.idConsole=params['idConsole'];
      this.juego = this.consolasService.obtieneJuego(this.idConsole, this.id);
      console.log(this.juego.imagen);
      // this.juego = this.consolasService.obtieneJuego
    })
  }

  ngOnInit() {
  }

}
