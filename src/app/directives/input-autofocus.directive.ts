import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class InputAutofocusDirective {

  @Input() appAutofocus: number | '' = '';

    constructor(private el: ElementRef<HTMLInputElement | HTMLElement>) { }

    ngAfterViewInit() {
        const delay = Number(this.appAutofocus) || 0;
        setTimeout(() => this.el.nativeElement.focus(), delay);
    }
}
