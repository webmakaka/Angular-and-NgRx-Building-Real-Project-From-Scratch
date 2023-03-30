import { ProfileInterface } from 'src/app/shared/types/profile.interface';

export interface ArticleInterface {
  title: string;
  description: string;
  body: string;
  author: ProfileInterface;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
}
