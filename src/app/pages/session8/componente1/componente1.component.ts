import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component implements OnInit {
  //DECLARANDO E INICIALIZANDO PROPIEDADES 
  nombre:string='';
  apellido:string='';
  edad:number=0;
  //DECLARANDO OBJETOS
  objUsuario: Usuario;
  usuarioservice;
  listaUsuarios:Usuario[];
  //INICIALIZANDO OBJETOS 
  constructor(private usuarioService: UsuarioService) {
    this.usuarioservice=this.usuarioService;
    this.listaUsuarios=[];
    this.objUsuario={Nombre:this.nombre,Apellido:this.apellido,Edad:this.edad};
  }

  ngOnInit(): void {}

  setValue():void {

    this.objUsuario={Nombre:this.nombre,Apellido:this.apellido,Edad:this.edad};
    this.usuarioservice.setValueUsuario(this.objUsuario);

  }

}


