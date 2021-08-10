import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  //Se recomiendo instanciar datos de los servicios a los componentes mediante metodos:getlistadoUsuarios()
  usuario$: Observable<Usuario[]>=new Observable<Usuario[]>();
  usuarioSubscription: Subscription= new Subscription;
  Usuarios:Usuario[];
  contador:number=0;
  usuarioService;
  constructor(private _usuarioService: UsuarioService) {
    this.Usuarios=[];
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




}
