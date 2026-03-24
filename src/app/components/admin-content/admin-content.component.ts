import { Component } from '@angular/core';
import { ShowIfRoleDirective } from '../../directives/show-if-role.directive';

@Component({
  selector: 'app-admin-content',
  standalone: true,
  imports: [ShowIfRoleDirective],
  templateUrl: './admin-content.component.html',
})
export class AdminContentComponent {
  userRole="admin"
}
