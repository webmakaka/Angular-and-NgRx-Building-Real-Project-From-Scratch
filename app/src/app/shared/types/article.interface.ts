import { IProfile } from 'src/app/shared/types/profile.interface';

export interface IArticle {
  title: string;
  description: string;
  body: string;
  author: IProfile;
  favorited: boolean;
  favoritesCount: number;
  slub: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
}
