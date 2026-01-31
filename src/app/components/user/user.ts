import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USER_IMAGE_PATH } from '../../app.const';
import { UserInterface } from '../../app.interface';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: true,
})
export class UserComponent {
  @Input({ required: true }) user!: UserInterface;
  @Output() selectUser: EventEmitter<string> = new EventEmitter();

  get imagePath() {
    return USER_IMAGE_PATH + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
