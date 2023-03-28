import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFeedState } from 'src/app/shared/modules/feed/types/feedState.interface';

export const feedFeatureSelector = createFeatureSelector<IFeedState>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.data
);
