import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private listaUsuarios:Usuario[]=[];
  private usuarios$=new Subject<Usuario[]>(); 

  constructor() { 
 
  }
  //SIN OBSERVABLE
 
  // listaUsuarios:Usuario[]=[];

  // setValueUsuario(obj: Usuario):void{
  //   this.listaUsuarios.push(obj);
      
  // }
  // getListUsuarios():Usuario[]{
  //   return this.listaUsuarios;
  // }
  
  //CON OBSERVABLE
  setValueUsuario(obj: Usuario){
    this.listaUsuarios.push(obj);
    this.usuarios$.next(this.listaUsuarios);   
  }
  //LO TIPAMOS COMO OBSERVABLE PORQUE SERA LO QUE SE ACTUALIZARA EN TIEMPO REAL
  getListUsuarios():Observable<Usuario[]>{
     return this.usuarios$.asObservable();
  }
  
}
