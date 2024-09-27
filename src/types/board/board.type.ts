export interface Board {
  title: string;
  detail: string;
  createdAt: string;
  category: string;
  author: User;
  id: number;
  likesCount: number;
}

export interface User {
  id: number;
  username: string;
  board: Board[];
}
