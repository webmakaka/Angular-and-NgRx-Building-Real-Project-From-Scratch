import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { ILoginRequest } from 'src/app/auth/types/loginRequest.interface';
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: IBackendErrors }>()
);
