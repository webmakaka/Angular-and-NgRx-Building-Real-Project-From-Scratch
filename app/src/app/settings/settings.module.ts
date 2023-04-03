import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SettingsComponent } from 'src/app/settings/components/settings/settings.component';
import { reducers } from 'src/app/settings/store/reducers';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module';

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
