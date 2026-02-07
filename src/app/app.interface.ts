export interface UserInterface {
  id: string;
  name: string;
  avatar: string;
}

export interface TaskInterface {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
