import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Session7RoutingModule } from './session7-routing.module';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';



@NgModule({
  declarations: [
    Componente1Component,
    Componente2Component,
  ],
  imports: [
    CommonModule,
    Session7RoutingModule,
 
  ]
})
export class Session7Module { }
