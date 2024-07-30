import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../producto.service';
import { Producto } from '../../producto';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {
  productos! : Producto[];
  constructor(
    private service : ProductoService
  ){}

  ngOnInit()
  {
    this.service.listar().subscribe(lista=>{
      this.productos = lista;
      
    });
  }

  eliminar(id:any){
    this.service.delete(id).subscribe(()=>{
      this.service.listar().subscribe((data)=>{
        this.productos = data;
      })
    })
  }
}
