import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { DUMMY_TASKS } from '../../app.const';
import { type NewTaskInterface, type TaskInterface, type UserInterface } from '../../app.model';
import { NewTaskComponent } from './new-task/new-task';
import { TaskService } from './task-service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: true,
})
export class TasksComponent {
  @Input({ required: true }) user!: UserInterface;
  isAddTask: boolean = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user.id);
  }

  onAddTask() {
    this.isAddTask = !this.isAddTask;
  }

  onCloseAddTask() {
    this.isAddTask = false;
  }
}
