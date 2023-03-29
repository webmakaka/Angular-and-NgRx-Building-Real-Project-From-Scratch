import { routerNavigatedAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { IFeedState } from 'src/app/shared/modules/feed/types/feedState.interface';

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
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
  ),
  on(routerNavigatedAction, (): IFeedState => initialState)
);

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}
