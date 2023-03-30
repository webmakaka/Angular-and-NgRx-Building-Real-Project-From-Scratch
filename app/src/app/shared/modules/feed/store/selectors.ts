import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';

export const feedFeatureSelector =
  createFeatureSelector<FeedStateInterface>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);
