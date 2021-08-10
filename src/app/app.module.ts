import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/session1/home/home.component';
import { CoursesComponent } from './pages/session1/courses/courses.component';
import { AboutComponent } from './pages/session1/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CourseComponent } from './pages/session1/courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Session1Component } from './pages/session1/session1.component';
import { Session2Component } from './pages/session2/session2.component';
import { Session3Component } from './pages/session3/session3.component';
import { Session2teoriaComponent } from './pages/session2/session2teoria/session2teoria.component';
import { Session2practicaComponent } from './pages/session2/session2practica/session2practica.component';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { Session4Component } from './pages/session4/session4.component';
import { SessionhijoComponent } from './pages/session4/sessionhijo/sessionhijo.component';
import { TextReducerPipe } from './pipe/text-reducer.pipe';
import { Session5Component } from './pages/session5/session5.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { Session6Component } from './pages/session6/session6.component';
import { Practica6Component } from './pages/session6/practica6/practica6.component';
import { Session7Component } from './pages/session7/session7.component';
import { Session8Component } from './pages/session8/session8.component';
import { Session8Module } from './pages/session8/session8.module';
import { Session10Component } from './pages/session10/session10.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    CourseComponent,
    Session1Component,
    Session2Component,
    Session3Component,
    Session2teoriaComponent,
    Session2practicaComponent,
    Session4Component,
    SessionhijoComponent,
    ChangeColorDirective,
    TextReducerPipe,
    Session5Component,
    Session6Component,
    Practica6Component,
    Session7Component,
    Session8Component,
    Session10Component,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    MatTableModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    Session8Module
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
