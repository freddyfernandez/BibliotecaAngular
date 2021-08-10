import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session2practica',
  templateUrl: './session2practica.component.html',
  styleUrls: ['./session2practica.component.css']
})
export class Session2practicaComponent implements OnInit {

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

  /*NGFOR*/
  displayedColumns: string[] = ['nombre', 'nivel', 'profesor', 'escuela'];
  listadoCursos=ArrayCursos;
  constructor() {  
  }
 
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

export interface Curso {
  nombre: string;
  nivel: number;
  profesor: string;
  escuela: string;
}

const ArrayCursos: Curso[] = [
  {nombre: 'mate', nivel: 1, profesor: 'pablo', escuela: 'H'},
  {nombre: 'comu', nivel:2 , profesor: 'luisa', escuela: 'He'},
  {nombre: 'ingles', nivel: 3, profesor: 'jonas', escuela: 'Li'},

];
