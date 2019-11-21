import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsolasService } from '../../servicios/consolas.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formulario:FormGroup;
  isValidNombre:boolean=false;
  isValidEntrada:boolean=false;
  entradas:any;

  constructor(private consolasService:ConsolasService) {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'entrada': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    })

    this.consolasService.getBlogs().subscribe(
      blog => {
        this.entradas = blog;
        console.log(blog);
      }
    )
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
    
    if (this.formulario.valid) {
      
      this.consolasService.insertarBlog(this.formulario.value).subscribe();
      
      // this.consolasService.getBlogs().subscribe(
      //   blog => {
      //     this.entradas = blog;
      //     console.log(blog);
      //   }
      // )
    }
  }

}
