// Ejercicio 4: Crea una directiva que  agrande el texto al hacer hover.
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpsize]',
  standalone: true,
})
export class UpsizeDirective {

 constructor(private el: ElementRef) {}

@HostListener('mouseenter') onEnter() {
   this.el.nativeElement.style.transform = 'scale(1.1)';
 }

 @HostListener('mouseleave') onLeave() {
   this.el.nativeElement.style.transform = 'scale(1)';
 }
}
