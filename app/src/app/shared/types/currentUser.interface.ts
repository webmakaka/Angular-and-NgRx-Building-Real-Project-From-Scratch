export interface CurrentUserInterface {
  id: number;
  username: string;
  email: string;
  bio?: string | null;
  image: string | null;
  token: string;
  createdAt: string;
  updatedAt: string;
}
