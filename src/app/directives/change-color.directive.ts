import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private renderer: Renderer2,private elementRef: ElementRef) {
    renderer.setStyle(elementRef.nativeElement,'backgroundColor','yellow');
   }

   @HostListener('click',['$event.target']) onClick(event:any){
     this.renderer.setStyle(
       this.elementRef.nativeElement,
       'backgroundColor','red'
     );
   }

}
