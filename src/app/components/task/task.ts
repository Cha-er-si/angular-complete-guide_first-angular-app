import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '../../app.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task?: TaskInterface;
  @Output() complete: EventEmitter<string> = new EventEmitter<string>();

  onCompleteButton() {
    this.complete.emit(this.task?.id);
  }
}
