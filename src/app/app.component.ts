import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from './interfaces/usuario.interface';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  cantidadUsuarios:number=0;
  usuario$:Observable<Usuario[]>=new Observable();
  usuarioSubscription: Subscription = new Subscription;
  
  constructor(private usuarioService:UsuarioService) {}

  ngOnInit(): void {

    this.usuario$=this.usuarioService.getListUsuarios();
    this.usuarioSubscription=this.usuario$.subscribe(list => {
      this.cantidadUsuarios = list.length;
    });
  }

  ngOnDestroy(): void {
    if(this.usuarioSubscription!=null && this.usuarioSubscription!=undefined)
    this.usuarioSubscription.unsubscribe();
  }
  
}
