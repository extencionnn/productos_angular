import { Component } from '@angular/core';
import { Producto } from '../../producto';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../producto.service';
import { CategoriaService } from '../../categoria.service';
import { Categoria } from '../../categoria';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-productos',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './crear-productos.component.html',
  styleUrl: './crear-productos.component.css'
})
export class CrearProductosComponent {
  
  formulario = new FormGroup({

    id: new FormControl(),
    nombre: new FormControl(),
    precio: new FormControl(),
    id_categoria: new FormControl(),
    
  });

  categorias! :Categoria[];
  producto!:Producto;
  constructor(
    private router : Router,
    private route:ActivatedRoute,
    private service: ProductoService,
    private categoriaService:CategoriaService
  ){}

  ngOnInit(){

      this.categoriaService.listar().subscribe((data)=>{
        this.categorias = data;
      });

          

    
  }

  onSubmit() {
    this.service.crear(this.formulario.value as Producto).subscribe(()=>{
      this.router.navigate(['/listar-productos']);
    });
  }    
}
