import { Injectable } from '@angular/core';
import { type NewTaskInterface, type TaskInterface } from '../../app.model';
import { TASK_KEY } from '../../app.const';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskInterface[] = [];

  constructor() {
    const tasks = localStorage.getItem(TASK_KEY);

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): TaskInterface[] {
    return this.tasks?.filter((task) => task.userId === userId);
  }

  addTask(newTaskData: NewTaskInterface, userId: string) {
    const task: TaskInterface = {
      ...newTaskData,
      id: this.generateTaskId(),
      userId,
    };

    this.tasks.push(task);
    this.saveTask();
  }

  removeTask(id: string | undefined) {
    if (id) {
      const tasks = this.tasks.filter((task) => task.id !== id);
      this.tasks = tasks.length === 0 ? [] : tasks;
      this.saveTask();
    }
  }

  private generateTaskId() {
    return `task_${Date.now()}`;
  }

  private saveTask() {
    localStorage.setItem(TASK_KEY, JSON.stringify(this.tasks));
  }
}
