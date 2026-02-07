import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: true,
})
export class TasksComponent {
  @Input() employeeName?: string;
}
