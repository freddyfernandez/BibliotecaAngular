import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-nuevo',
  templateUrl: './producto-nuevo.component.html',
  styleUrls: ['./producto-nuevo.component.css']
})
export class ProductoNuevoComponent implements OnInit {

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.router.navigate(['producto']);
  }

  guardar(form: NgForm){
    console.log(form);
    if(form.invalid){

      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched();
      })

      return;
    }

    const producto: Producto = {
      id: 0,
      nombre: form.value.nombre,
      stock: form.value.stock,
      precio: form.value.precio,
      fecha: new Date()
    };

    this.productoService.insertar(producto).subscribe(
      response => {
        this.toastr.success('Producto insertado.', 'Confirmación');
        this.router.navigate(['producto']);
      }
    )

  }

}
