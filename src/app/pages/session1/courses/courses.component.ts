import { Component, OnInit,OnDestroy } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  notas;

  constructor(private courseService: CoursesService) {
    this.notas= this.courseService.notas; 
   }

  ngOnInit(): void {
    console.log('despues del contructor');
  }
  ngOnDestroy():void{
    console.log('al salir de la vista courses');

  }

}
