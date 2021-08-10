import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  miNombre:string = "";
  apPaterno:string = "";
  apMaterno:string = "";
  miEdad:number=0;

  /*NG-CLASS*/
  miClase:string="";
  activador:boolean=true;
  isOne:boolean=false;

  currentClases: Record<string,boolean>={};
  misClases:string[]=[];
  especialStyle={};

  /*NGIF*/
  isNumber:Number=1;

  constructor() { }
 
  ngOnInit(): void {
    this.miClase='miEstilo';
    this.misClases=['miEstilo','miEstilo2'];
    this.setCurrentClass();
  }
  
  setCurrentClass(){
    this.currentClases={
      'miEstilo':this.activador
    }
  }
  
  
  setSpecialStyle(){
 
    this.isOne=this.activador
    let special1={
       'background-color':'yellow',
       'height':'40px',
       'font-size':'28px'
    }
    let special2={
      'background-color':'purple'
    };
    this.especialStyle=this.isOne?special1:special2;
    this.activador=!this.isOne;
   
  }

  setValue(){
    this.isNumber = this.miEdad;
  }




}
