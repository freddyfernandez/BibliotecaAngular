import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  cliente:Cliente={id:1,nombre:'juan',saldo:2,fecha:new Date('1968-11-16T00:00:00'),mostrarSaldo:function(){let a=5;console.log('funcion de una interfaz')}};

  titulo: string = 'Listado de Productos';
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router)
   {
    //EL LET SOLO FUNCIONA EN METODOS
    //let cliente:Cliente={id:1,nombre:'juan',saldo:2,fecha:new Date('1968-11-16T00:00:00'),mostrarSaldo:function(){}};
    console.log(this.cliente);
    console.log(this.cliente.mostrarSaldo);
   }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.productoService.listar().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      }
    )
  }

  eliminar(id: number){
    this.productoService.eliminar(id).subscribe(
      resp => {
        this.toastr.success('Producto eliminado', 'Confirmación');
        this.listar();
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('complete!');
      }
    )
  }

  nuevo(){
    this.router.navigate(['producto/nuevo']);
  }

  nuevoReactivo(){
    this.router.navigate(['producto/form']);
  }

  editar(id: number){
    this.router.navigate(['producto/edit', id])
  }

}
