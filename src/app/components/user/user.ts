import { Component } from '@angular/core';
import { UserInterface } from '../../app.interface';
import { DUMMY_USERS } from '../../app.const';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: true,
})
export class UserComponent {
  selectedUser: UserInterface = DUMMY_USERS[0];
}
