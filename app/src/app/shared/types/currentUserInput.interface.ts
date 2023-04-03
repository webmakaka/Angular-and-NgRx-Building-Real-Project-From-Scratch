// не знаю как сделать extends CurrentUserInterface
export interface CurrentUserInputInterface {
  user: {
    id: number;
    username: string;
    email: string;
    bio?: string | null;
    image: string | null;
    token: string;
    createdAt: string;
    updatedAt: string;
    password: string;
  };
}
