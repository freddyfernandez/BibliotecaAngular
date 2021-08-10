import { AbstractControl } from "@angular/forms";

export function validStock(control: AbstractControl){

    if(control && control.value && (control.value <= 0 || control.value > 100)){
        return { validStock: true };
    }

    return null;
}