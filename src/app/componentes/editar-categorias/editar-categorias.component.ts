import { Component } from '@angular/core';
import { CategoriaService } from '../../categoria.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Categoria } from '../../categoria';

@Component({
  selector: 'app-editar-categorias',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './editar-categorias.component.html',
  styleUrl: './editar-categorias.component.css'
})
export class EditarCategoriasComponent {
  
  id:any;
  constructor(private service:CategoriaService,private route:ActivatedRoute, private router:Router){}
  formulario = new FormGroup({

    id: new FormControl(),
    nombre: new FormControl(),
    
  });
  ngOnInit(){

    this.route.params.subscribe(params => {
      this.id = params['id'];
      

      this.service.obtener1(this.id).subscribe(
        data=>{
          this.formulario.setValue(data);
        }
      );
      
    });

    
  }
  onSubmit(){

    this.service.editar(this.formulario.value as Categoria, this.id).subscribe(()=>{
      this.router.navigate(['/listar-categorias']);
    });
  }
}
