import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
export interface CurrentUserInputInterface {
  user: CurrentUserInterface & { password: string };
}

// Если не будет работать
// export interface CurrentUserInputInterface {
//   user: {
//     id: number;
//     username: string;
//     email: string;
//     bio?: string | null;
//     image: string | null;
//     token: string;
//     createdAt: string;
//     updatedAt: string;
//     password: string;
//   };
// }
