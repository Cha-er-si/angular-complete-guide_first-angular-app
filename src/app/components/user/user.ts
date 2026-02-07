import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { USER_IMAGE_PATH } from '../../app.const';
import { type UserInterface } from '../../app.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: true,
})
export class UserComponent {
  @Input({ required: true }) user!: UserInterface;
  @Output() selectUser: EventEmitter<string> = new EventEmitter<string>();
  select = output<string>();

  get imagePath() {
    return USER_IMAGE_PATH + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    this.selectUser.emit(this.user.id);
  }
}
