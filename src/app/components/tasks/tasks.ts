import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { DUMMY_TASKS } from '../../app.const';
import { type NewTaskInterface, type TaskInterface, type UserInterface } from '../../app.model';
import { NewTaskComponent } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: true,
})
export class TasksComponent {
  @Input({ required: true }) user!: UserInterface;
  tasks: TaskInterface[] = DUMMY_TASKS;
  isAddTask: boolean = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }

  onCompleteTask(id: string) {
    console.log('onCompleteTask() was called');
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask() {
    this.isAddTask = !this.isAddTask;
  }

  onCancelAddTask() {
    this.isAddTask = false;
  }

  onSubmitTask(newTaskData: NewTaskInterface) {
    const task: TaskInterface = {
      ...newTaskData,
      id: `task_${this.tasks.length + 1}`,
      userId: this.user.id,
    };

    this.tasks.push(task);
    this.isAddTask = false;
  }
}
