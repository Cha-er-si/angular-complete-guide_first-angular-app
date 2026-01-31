import { Component, computed, input, Input, InputSignal } from '@angular/core';
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
  userSignal: InputSignal<UserInterface> = input.required<UserInterface>();

  imagePathSignal = computed(() => USER_IMAGE_PATH + this.userSignal().avatar);

  get imagePath() {
    return USER_IMAGE_PATH + this.user.avatar;
  }

  onSelectUser() {}
}
