import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskInterface } from '../../../app.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() submitTask: EventEmitter<NewTaskInterface> = new EventEmitter<NewTaskInterface>();
  taskTitle: string = '';
  taskSummary: string = '';
  taskDueDate: string = '';

  onCancelTask() {
    this.cancel.emit();
  }

  onSubmitTask() {
    this.submitTask.emit({
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDueDate,
    });
  }
}
