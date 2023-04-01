import { routerNavigatedAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from 'src/app/article/store/actions/getArticle.action';
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigatedAction, (): ArticleStateInterface => initialState)
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
