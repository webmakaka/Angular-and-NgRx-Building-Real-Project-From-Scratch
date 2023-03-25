import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from 'src/app/auth/types/authState.interface';

export const authFeatureSelector = createFeatureSelector<IAuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);
