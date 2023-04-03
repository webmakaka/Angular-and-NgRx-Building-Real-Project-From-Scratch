import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsStateInterface } from 'src/app/settings/types/settingsState.interface';

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);
