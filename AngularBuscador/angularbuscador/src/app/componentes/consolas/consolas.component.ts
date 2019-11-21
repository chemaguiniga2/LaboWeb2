import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../servicios/consolas.service';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolas:Consola[] = [];
  consolasMongo:any;

  constructor( private consolasService:ConsolasService ) {
    this.consolasService.getConsolas().subscribe(
      consolas => {
        this.consolasMongo = consolas;
      }
    )
  }

  ngOnInit() {
  }

}
