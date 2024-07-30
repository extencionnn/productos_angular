import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

   url= "http://localhost:8080/categoria";
  
   listar():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }

  obtener1(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(this.url+'/'+id);

  }

  crear(categoria: Categoria):Observable<Categoria>
  {
    return this.http.post<Categoria>(this.url,categoria);
  }

  editar(categoria: Categoria, id:number):Observable<Categoria>
  {
    return this.http.put<Categoria>(this.url+"/"+id,categoria);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }

}
