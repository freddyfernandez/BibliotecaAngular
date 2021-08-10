import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-session7',
  templateUrl: './session7.component.html',
  styleUrls: ['./session7.component.css']
})
export class Session7Component implements OnInit,OnDestroy {
  
  // Usuarios:Usuario[]=[];
  // cantidadUsuarios=0;
  // constructor(usuarioService:UsuarioService) { 
  //   this.Usuarios=usuarioService.getListUsuarios();
  //   this.cantidadUsuarios=this.Usuarios.length;
  // }

  usuario$: Observable<Usuario[]>=new Observable<Usuario[]>();
  usuarioSubscription: Subscription= new Subscription;
  Usuarios:Usuario[]=[];
  contador:number=0;
  usuarioService;
  constructor(private _usuarioService: UsuarioService) {

    this.usuarioService=this._usuarioService;
 
  }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  mostrarUsuarios(){
    this.usuario$=this.usuarioService.getListUsuarios();
    this.usuarioSubscription =this.usuario$.subscribe(milistado => {
      this.Usuarios = milistado;
      this.contador = milistado.length;
    });
  }

  ngOnDestroy(): void {
    if(this.usuarioSubscription!=null && this.usuarioSubscription!=undefined)
    this.usuarioSubscription.unsubscribe();
  }


}
