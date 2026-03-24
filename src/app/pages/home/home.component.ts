import { Component } from '@angular/core';
import { FocusedInputComponent } from '../../components/focused-input/focused-input.component';
import { AdminContentComponent } from '../../components/admin-content/admin-content.component';
import { AddCountDirective } from '../../directives/add-count.directive';
import { UpsizeDirective } from '../../directives/upsize.directive';

@Component({
  selector: 'app-home',
  imports: [
    FocusedInputComponent, 
    AdminContentComponent, 
    AddCountDirective,
    UpsizeDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'

})
export class HomeComponent { 
  count = 0;

  updateCount(count: number) {
    this.count = count;
  }
}
