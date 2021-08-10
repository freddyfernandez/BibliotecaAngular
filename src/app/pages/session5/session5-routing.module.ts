import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoFormComponent } from './producto/producto-form/producto-form.component';
import { ProductoNuevoComponent } from './producto/producto-nuevo/producto-nuevo.component';
import { ProductoComponent } from './producto/producto.component';
import { Session5Component } from './session5.component';

const routes: Routes = [
  {
    path: '', 
    component: Session5Component,
    children: [
      { path: 'producto', component: ProductoComponent },
      { path: 'producto/nuevo', component: ProductoNuevoComponent },
      { path: 'producto/form', component: ProductoFormComponent },
      { path: 'producto/edit/:id', component: ProductoFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session5RoutingModule { }
