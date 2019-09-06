import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplicacion-basica';

  album:string = "ABCD";
  artista:string = "XYZ";
  lanzamiennto:string = "29 Agosto 2019";
}
