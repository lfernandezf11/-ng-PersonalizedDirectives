// Ejercicio 3: Crea una directiva que cuente los clicks sobre un botón.
import { Directive, HostListener, output, signal } from '@angular/core';

@Directive({
  selector: '[appAddCount]',
  standalone: true
})
export class AddCountDirective {
//  Al usar output el constructor se omite.
  private clickCount = signal(0); // Similar al useState de React
  count = output<number>();

  @HostListener('click')
  onClick() {
    this.clickCount.set(this.clickCount() + 1);
    // Emitimos el valor del output signal
    this.count.emit(this.clickCount());
  }
}
