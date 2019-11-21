import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../../servicios/consolas.service';

@Component({
  selector: 'app-resjuegos',
  templateUrl: './resjuegos.component.html',
  styleUrls: ['./resjuegos.component.css']
})
export class ResjuegosComponent implements OnInit {

  juegos:any;
  palabrasBusqueda:string;
  constructor(private activatedRoute:ActivatedRoute,
    private consolasService:ConsolasService) {
      this.activatedRoute.params.subscribe(params => {

        this.palabrasBusqueda = params['palabrasBusqueda'];
        
      })
      this.consolasService.getJuegoBuscador(this.palabrasBusqueda).subscribe(
        consolas => {
          this.juegos = consolas;
          console.log(consolas);
        }
      )
    }

  ngOnInit() {
  }

}
