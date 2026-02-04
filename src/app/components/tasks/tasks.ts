import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: true,
})
export class TasksComponent {
  @Input() employeeName?: string;
}
