import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/auth/store/actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ username: string; email: string; password: string }>()
);
