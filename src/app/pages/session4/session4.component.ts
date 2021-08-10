import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-session4',
  templateUrl: './session4.component.html',
  styleUrls: ['./session4.component.css']
})
export class Session4Component implements OnInit {
  
  today: number = Date.now();
  courses;
  constructor(private courseService: CoursesService) {
    this.courses= this.courseService.courses; 
   }

  ngOnInit(): void {
  }

  onCourseClick(event:{title: string}): void{
    console.log(event,'Data que viene del hijo');
  } 

}
