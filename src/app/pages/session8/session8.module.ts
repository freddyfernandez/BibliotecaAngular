import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Session8RoutingModule } from './session8-routing.module';
import { Componente2Component } from './componente2/componente2.component';
import { Componente1Component } from './componente1/componente1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Componente1Component,
    Componente2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Session8RoutingModule
  ]
})
export class Session8Module { }
