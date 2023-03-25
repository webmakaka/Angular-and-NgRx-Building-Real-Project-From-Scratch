import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions/register.action';
import { IAuthState } from 'src/app/auth/types/authState.interface';

const initiaState: IAuthState = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initiaState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
