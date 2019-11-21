import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService, Consola } from '../../servicios/consolas.service';

@Component({
  selector: 'app-infoconsola',
  templateUrl: './infoconsola.component.html',
  styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {

  consola:any = {};
  idConsola:string;

  infoConsola:any;

  constructor(private activatedRoute:ActivatedRoute,
              private consolasService:ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      this.consola = this.consolasService.obtieneConsola(params['id']);
      this.idConsola = params['id'];
    })
    this.consolasService.getConsolaById(this.idConsola).subscribe(
      consolas => {
        this.infoConsola = consolas;
      }
    )

  }

  ngOnInit() {
  }

}
