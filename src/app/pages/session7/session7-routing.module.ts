import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Session7Component } from './session7.component';

const routes: Routes = [
  {
    path: '', 
    component: Session7Component,
    children: [
      { path: 'componente1', component: Componente1Component },
      { path: 'componente2', component: Componente2Component },
      { path: '**', redirectTo: 'componente1' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session7RoutingModule { }
