import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

   url= "http://localhost:8080/producto";
  
   listar():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  obtener1(id:number):Observable<Producto>{
    return this.http.get<Producto>(this.url+'/'+id);

  }

  crear(categoria: Producto):Observable<Producto>
  {
    return this.http.post<Producto>(this.url,categoria);
  }

  editar(categoria: Producto, id:number):Observable<Producto>
  {
    return this.http.put<Producto>(this.url+"/"+id,categoria);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
