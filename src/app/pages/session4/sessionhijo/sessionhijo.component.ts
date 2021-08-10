import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sessionhijo',
  templateUrl: './sessionhijo.component.html',
  styleUrls: ['./sessionhijo.component.css']
})
export class SessionhijoComponent implements OnInit {
  
  @Input() sesionNumber:number;
  @Input('title') title='';
  @Output() onCourseClick = new EventEmitter<{title: string}>();
  texto= "texto";
  numero=5;
  constructor() {
    this.sesionNumber=0;
   }

  ngOnInit(): void {
  }
  
  onCardClick():void{
    this.onCourseClick.emit({title:'Hola'});
  }

}
