import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { UserComponent } from './components/user/user';
import { type UserInterface } from './app.model';
import { DUMMY_USERS } from './app.const';
import { TasksComponent } from './components/tasks/tasks';
import { CommonModule } from '@angular/common';

const components = [HeaderComponent, UserComponent, TasksComponent];

const modules = [CommonModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...components, ...modules],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users: UserInterface[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(): UserInterface | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log('User Selected: ' + id);
    this.selectedUserId = id;
  }
}
