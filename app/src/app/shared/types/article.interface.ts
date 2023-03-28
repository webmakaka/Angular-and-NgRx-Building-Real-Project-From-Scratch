import { IProfile } from 'src/app/shared/types/profile.interface';

export interface IArticle {
  title: string;
  description: string;
  body: string;
  author: IProfile;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
}
