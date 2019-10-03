import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formulario:FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'apellidoPaterno': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'apellidoMaterno': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'correoElectronico': new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[a-z0-9._-]+@[a-z0-9.-]+\.[a-z{2,3}$]")]),
    })
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.formulario.value)
  }

}
