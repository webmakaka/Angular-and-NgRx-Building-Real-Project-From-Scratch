import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface GetArticleResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
