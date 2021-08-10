import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-session5',
  templateUrl: './session5.component.html',
  styleUrls: ['./session5.component.css']
})


export class Session5Component implements OnInit {
  @Input() sessionNumber: number;

  title='angular'
  inputText='Banana in the box';

  constructor(private coursesService: CoursesService) {
    this.sessionNumber = 0;
    console.log('desdel el constructor');
   }

  ngOnChanges():void{
    console.log('desdel el ngOnchanges');
    this.title='titulo cambiado';
  } 

  ngOnInit(): void {
    console.log(this.coursesService.courses,'desdengOninit');

  }

  showInputValue(){

    this.inputText=this.inputText+'..'
  }


}
