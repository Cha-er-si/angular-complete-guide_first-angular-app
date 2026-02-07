import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task';
import { DUMMY_TASKS } from '../../app.const';
import { TaskInterface, UserInterface } from '../../app.interface';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: true,
})
export class TasksComponent {
  @Input() user?: UserInterface;
  tasks: TaskInterface[] = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }
}
