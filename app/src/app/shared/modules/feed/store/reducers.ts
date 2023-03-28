import { Action, createReducer, on } from '@ngrx/store';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { IFeedState } from 'src/app/shared/modules/feed/types/feedState.interface';

const initiaState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initiaState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}
