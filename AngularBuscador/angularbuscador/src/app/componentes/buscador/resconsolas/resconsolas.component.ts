import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../../servicios/consolas.service';
@Component({
  selector: 'app-resconsolas',
  templateUrl: './resconsolas.component.html',
  styleUrls: ['./resconsolas.component.css']
})
export class ResconsolasComponent implements OnInit {

  consolas:any[] = [];
  consolasMongo:any;
  palabrasBusqueda:string;
  constructor(private activatedRoute:ActivatedRoute,
    private consolasService:ConsolasService) {
      this.activatedRoute.params.subscribe(params => {

        this.palabrasBusqueda = params['palabrasBusqueda'];
        this.consolas = this.consolasService.buscarConsolas(this.palabrasBusqueda);
      })

      // this.consolasMongo = new Promise((resolve, reject) => {
      //   this.consolasService.getConsolasByNombre(this.palabrasBusqueda).subscribe(
      //     consolas => {
      //       // console.log(consolas);
      //       resolve(consolas);
      //     }
      //   )
      // })

      //console.log(this.consolasMongo);
      this.consolasService.getConsolasByNombre(this.palabrasBusqueda).subscribe(
        consolas => {
          this.consolasMongo = consolas

          // console.log(`Consolas mongo: ${consolas}`);
          //console.log(`cons: ${consolas}`);
          console.log(consolas);
          console.log(this.consolasMongo);
        }
      )
    }
  ngOnInit() {
    
  }
}