import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoriaService } from '../../categoria.service';
import { Categoria } from '../../categoria';

@Component({
  selector: 'app-crear-categorias',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './crear-categorias.component.html',
  styleUrl: './crear-categorias.component.css'
})
export class CrearCategoriasComponent {
  constructor(private service:CategoriaService, private route:Router){}
  formulario = new FormGroup({

    nombre: new FormControl(),
    
  });

  onSubmit(){

    this.service.crear(this.formulario.value as Categoria).subscribe(()=>{
      this.route.navigate(['/listar-categorias']);
    });
  }
}
