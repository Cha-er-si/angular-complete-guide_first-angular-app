import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskInterface } from '../../../app.model';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  taskTitle: string = '';
  taskSummary: string = '';
  taskDueDate: string = '';

  constructor(private taskService: TaskService) {}

  onCloseTask() {
    this.close.emit();
  }

  onSubmitTask() {
    const taskData: NewTaskInterface = {
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDueDate,
    };
    this.taskService.addTask(taskData, this.userId);
    this.close.emit();
  }
}
