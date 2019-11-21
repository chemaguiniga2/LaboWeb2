import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService, Consola } from '../../servicios/consolas.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juego:any;
  idConsola:string;
  idJuego:string;
  indexOfGame:any;
  juegoInfo:any;

  constructor(private activatedRoute:ActivatedRoute,
              private consolasService:ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      this.idConsola = params['idConsola'];
      this.idJuego = params['idJuego'];    
    })

    this.consolasService.getInfoJuego(this.idConsola, this.idJuego).subscribe(
      consolas => {
        this.juegoInfo = consolas;
        console.log(consolas);
      }
    )
  }

  ngOnInit() {
  }

}
