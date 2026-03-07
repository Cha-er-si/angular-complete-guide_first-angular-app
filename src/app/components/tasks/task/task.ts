import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TaskInterface } from '../../../app.model';
import { CardComponent } from '../../../common/card/card';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task?: TaskInterface;

  constructor(private taskService: TaskService) {}

  onComplete() {
    this.taskService.removeTask(this.task?.id);
  }
}
