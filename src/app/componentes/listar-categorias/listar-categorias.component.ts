import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Categoria } from '../../categoria';
import { CategoriaService } from '../../categoria.service';

@Component({
  selector: 'app-listar-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-categorias.component.html',
  styleUrl: './listar-categorias.component.css'
})
export class ListarCategoriasComponent {

  constructor(private service:CategoriaService){}
  categorias!:Categoria[];
  ngOnInit()
  {
    this.service.listar().subscribe(data=>{
      this.categorias = data
    });
  }

  elimiar(id:number){
    this.service.delete(id).subscribe(()=>{

      this.service.listar().subscribe(data=>{
        this.categorias = data
      
      });
    })
  }
}
