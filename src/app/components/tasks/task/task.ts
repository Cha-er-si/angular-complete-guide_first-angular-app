import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskInterface } from '../../../app.model';
import { CardComponent } from '../../../common/card/card';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task?: TaskInterface;
  @Output() complete: EventEmitter<string> = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.task?.id);
  }
}
