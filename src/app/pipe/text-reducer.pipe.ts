import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    /*metadata*/
    name:'textReducer',
})
export class TextReducerPipe implements PipeTransform{
    /*Captura la data de la vista en el parametro value mediante: data|metadata*/
    /*Transforma ese value con varios argumentos anidados por cadenas*/
    transform(value:string,...args:unknown[]){
        /*uknown recibe cualquier tipo de dato y [] recibe parametros sin limites*/
        let newValue= value.substr(0,14) + '.$' +args;
        return newValue;
    }
}