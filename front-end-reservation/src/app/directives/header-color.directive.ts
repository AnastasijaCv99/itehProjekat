import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeaderColor]'
})
export class HeaderColorDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.color = 'rgb(68, 53, 166)';
  }
}
