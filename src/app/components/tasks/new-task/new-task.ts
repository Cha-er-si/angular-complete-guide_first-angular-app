import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  onCancelTask() {
    this.cancel.emit();
  }
}
