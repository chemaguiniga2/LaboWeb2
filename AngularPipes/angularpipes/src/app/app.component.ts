import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  juego="Algun dato en especial";

  numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numero = 123.456789;

  porcentaje = 52.5921543627;

  importe = 789123.456;

}
