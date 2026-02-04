import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { UserComponent } from './components/user/user';
import { UserInterface } from './app.interface';
import { DUMMY_USERS } from './app.const';
import { TasksComponent } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users: UserInterface[] = DUMMY_USERS;
  selectedTask: string = '';

  onSelectUser(id: string) {
    console.log('User Selected: ' + id);
    this.selectedTask = this.users.find((user) => user.id === id)?.name ?? '';
  }
}
