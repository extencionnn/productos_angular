import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../producto';
import { ProductoService } from '../../producto.service';
import { Categoria } from '../../categoria';
import { CategoriaService } from '../../categoria.service';

@Component({
  selector: 'app-editar-productos',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './editar-productos.component.html',
  styleUrl: './editar-productos.component.css'
})
export class EditarProductosComponent {

  formulario = new FormGroup({

    id: new FormControl(),
    nombre: new FormControl(),
    precio: new FormControl(),
    id_categoria: new FormControl(),
    
  });

  categorias! :Categoria[];
  producto!:Producto;
  id:any;
  constructor(
    private router : Router,
    private route:ActivatedRoute,
    private service: ProductoService,
    private categoriaService:CategoriaService
  ){}

  ngOnInit(){

    this.route.params.subscribe(params => {
      this.id = params['id'];
      
      this.categoriaService.listar().subscribe((data)=>{
        this.categorias = data;
      });

      this.service.obtener1(this.id).subscribe(
        data=>{
          this.formulario.setValue(data);
        }
      );
      
    });

    
  }

  onSubmit() {
    this.service.editar(this.formulario.value as Producto, this.id).subscribe(()=>{
      this.router.navigate(['/listar-productos']);
    });
    
  }

}
