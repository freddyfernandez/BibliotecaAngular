import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Producto[]>{
    const url = `${environment.urlBase}/productos`;
    return this.http.get<Producto[]>(url);
  }

  eliminar(id: number) {
    const url = `${environment.urlBase}/productos/${id}`;
    return this.http.delete(url);
  }

  insertar(producto: Producto){
    const url = `${environment.urlBase}/productos`;
    return this.http.post(url, producto);
  }

  obtener(id: number): Observable<Producto>{
    const url = `${environment.urlBase}/productos/${id}`;
    return this.http.get<Producto>(url);
  }

  actualizar(producto: Producto){
    const url = `${environment.urlBase}/productos/${producto.id}`;
    return this.http.put(url, producto);
  }

}
