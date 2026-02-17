import { Injectable } from '@angular/core';
import { type NewTaskInterface, type TaskInterface } from '../../app.model';
import { DUMMY_TASKS } from '../../app.const';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskInterface[] = DUMMY_TASKS;

  getUserTasks(userId: string): TaskInterface[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTaskData: NewTaskInterface, userId: string) {
    const task: TaskInterface = {
      ...newTaskData,
      id: `task_${this.tasks.length + 1}`,
      userId,
    };

    this.tasks.push(task);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
