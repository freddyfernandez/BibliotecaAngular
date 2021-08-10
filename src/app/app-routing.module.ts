import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/session1/about/about.component';
import { CoursesComponent } from './pages/session1/courses/courses.component';
import { HomeComponent } from './pages/session1/home/home.component';
import { Session1Component } from './pages/session1/session1.component';
import { Session2Component } from './pages/session2/session2.component';
import { Session3Component } from './pages/session3/session3.component';
import { Session4Component } from './pages/session4/session4.component';
import { ProductoFormComponent } from './pages/session5/producto/producto-form/producto-form.component';
import { ProductoNuevoComponent } from './pages/session5/producto/producto-nuevo/producto-nuevo.component';
import { ProductoComponent } from './pages/session5/producto/producto.component';
import { Session5Component } from './pages/session5/session5.component';
import { Session6Component } from './pages/session6/session6.component';
import { Session7Component } from './pages/session7/session7.component';
import { Session8Component } from './pages/session8/session8.component';

const routes: Routes = [
  {path: 'session1', component: Session1Component},
  {path: 'session2', component: Session2Component},
  {path: 'session3', component: Session3Component},
  {path: 'session4', component: Session4Component},
  {path: 'session5', component: Session5Component},
  {path: 'session6', component: Session6Component},
  {path: 'session7', component: Session7Component},
  {path: 'session8', component: Session8Component},

  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'about', component: AboutComponent},


  { 
    path: 'auth',
    loadChildren: () => import('./pages/session6/auth/auth.module').then( m => m.AuthModule )
  },
  { 
    path: 'productos',
    loadChildren: () => import('./pages/session6/productos/productos.module').then( m => m.ProductosModule )
  },
  { 
    path: 'usuarios',
    loadChildren: () => import('./pages/session6/usuarios/usuarios.module').then( m => m.UsuariosModule )
  },
  { 
    path: 'session5',
    loadChildren: () => import('./pages/session5/session5.module').then( m => m.Session5Module )
  },
  { 
    path: 'session7',
    loadChildren: () => import('./pages/session7/session7.module').then( m => m.Session7Module )
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
