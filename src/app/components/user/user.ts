import { Component, computed, signal, WritableSignal } from '@angular/core';
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
  selectedUser: WritableSignal<UserInterface> = signal(DUMMY_USERS[0]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
