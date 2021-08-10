import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appOnlyLetters]',
  providers: [
    { provide: NG_VALIDATORS, useClass: OnlyLettersDirective, multi: true }
  ]
})
export class OnlyLettersDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors|null {
    
    if(control && control.value && !(/^[aA-zZ, " "]+$/.test(control.value))){
      return { letters: true };
    }

    return null;
  }

}
