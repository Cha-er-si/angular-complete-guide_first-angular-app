import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TaskInterface } from '../../../app.model';
import { CardComponent } from '../../../common/card/card';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
