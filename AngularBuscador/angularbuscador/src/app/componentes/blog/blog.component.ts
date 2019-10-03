import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formulario:FormGroup;
  isValidNombre:boolean=false;
  isValidEntrada:boolean=false;

  constructor() {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'entrada': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    })
  }

  ngOnInit() {
  }

  guardar() {
    var validationsNombre = document.getElementById('validacionesNombre');
    var validationsEntrada = document.getElementById('validacionesEntrada');
    validationsNombre.classList.toggle('d-none');
    validationsEntrada.classList.toggle('d-none');
    this.isValidEntrada = !this.formulario.get('entrada').valid;
    this.isValidNombre = !this.formulario.get('nombre').valid;
  }

}
