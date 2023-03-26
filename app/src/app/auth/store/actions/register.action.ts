import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { IRegisterRequest } from 'src/app/auth/types/registerRequest.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);
