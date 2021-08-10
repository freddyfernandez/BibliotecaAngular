import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { validStock } from 'src/app/validations/valid-stock';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  /*form: FormGroup*/ 
  form = new FormGroup({});

  idproducto: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productoService: ProductoService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {
   
   }

  ngOnInit(): void {
    this.inicializarFormulario();

    this.activatedRoute.params.subscribe(
      response => {
        if(response.id){
          this.idproducto = response.id;
          this.setProducto(response.id);
        }
      }
    )
  }

  setProducto(id: number){
    this.productoService.obtener(id).subscribe(
      (producto: Producto) => {
        this.form.setValue({
          nombre: producto.nombre,
          stock: producto.stock,
          precio: producto.precio
        })
      }
    )
  }

  inicializarFormulario(){
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      stock: [null, [Validators.required, validStock]],
      precio: [null, [Validators.required]]
    });
  }

  get nombre(){
    return this.form.get('nombre');
  }

  get stock(){
    return this.form.get('stock');
  }

  get precio(){
    return this.form.get('precio');
  }

  cancelar(){
    this.router.navigate(['producto']);
  }

  guardar(){
    //console.log(this.form)
    if(this.form.invalid){
      this.form.markAllAsTouched();

      return;
    }

    const producto: Producto = {
      id: this.idproducto,
      nombre: this.nombre?.value,
      stock: this.stock?.value, 
      precio: this.precio?.value,
      fecha: new Date()
    }

    if(this.idproducto === 0){
      this.insertar(producto);
    }else{
      this.actualizar(producto);
    }
  }

  insertar(producto: Producto){
    this.productoService.insertar(producto).subscribe(
      response => {
        this.toastr.success('Producto registrado.', 'Confirmación');
        this.router.navigate(['producto']);
      }
    )
  }

  actualizar(producto: Producto){
    this.productoService.actualizar(producto).subscribe(
      response =>{ 
        this.toastr.success('Producto actualizado.', 'Confirmación');
        this.router.navigate(['producto']);
      }
    )
  }


}
