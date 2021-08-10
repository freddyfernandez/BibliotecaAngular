import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Session8Component } from './session8.component';

const routes: Routes = [
  {
    /*se asigna el nombre del path*/
    path:'session8',
    component:Session8Component,
    children:[
      {path:'componente1',component: Componente1Component,children:[{path:'componente2',component:Componente2Component}]},
      {path:'componente2',component:Componente2Component},
      {path:'**',redirectTo:'componente1'}
    ] 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session8RoutingModule { }
