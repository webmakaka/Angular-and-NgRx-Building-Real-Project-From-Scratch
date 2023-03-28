import { IArticle } from 'src/app/shared/types/article.interface';

export interface IGetFeedResponse {
  articles: IArticle[];
  articlesCount: number;
}
