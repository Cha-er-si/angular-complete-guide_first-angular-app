import { Component, Input } from '@angular/core';
import { TaskInterface } from '../../app.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input() task?: TaskInterface;
}
