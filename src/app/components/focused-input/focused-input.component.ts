import { Component } from '@angular/core';
import { InputAutofocusDirective } from '../../directives/input-autofocus.directive';

@Component({
  selector: 'app-focused-input',
  standalone: true,
  imports: [InputAutofocusDirective],
  template: `
  <input type="text" appAutofocus placeholder="Autofocus inmediato"><br><br>
  <input type="text" [appAutofocus]="2000" placeholder="Autofocus tras 2s">
  `
})
export class FocusedInputComponent {

}
