import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';

export const articleFeatureSelector =
  createFeatureSelector<ArticleStateInterface>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);
