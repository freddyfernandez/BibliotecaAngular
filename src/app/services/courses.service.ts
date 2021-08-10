import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
 /*Array Simple*/
  notas=[1,2,3]
  /*Array de objetos sin declaracion*/
  courses = [
    {
      title: 'Angular',
      descripcion:'ca'
    },
    {
      title: 'React',
      descripcion: 'cr'
    },
    {
      title: 'Vuejs',
      descripcion: 'cv'
    }

  ]


  
}
