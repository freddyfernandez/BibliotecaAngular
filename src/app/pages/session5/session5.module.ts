import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session5RoutingModule } from './session5-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OnlyLettersDirective } from 'src/app/directives/only-letters.directive';
import { ProductoComponent } from './producto/producto.component';
import { ProductoNuevoComponent } from './producto/producto-nuevo/producto-nuevo.component';
import { ProductoFormComponent } from './producto/producto-form/producto-form.component';

@NgModule({
  declarations: [
    OnlyLettersDirective,
    ProductoComponent,
    ProductoNuevoComponent,
    ProductoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Session5RoutingModule,
    
  ]
})
export class Session5Module { }
