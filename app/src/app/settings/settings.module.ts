import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SettingsComponent } from 'src/app/settings/components/settings/settings.component';
import { reducers } from 'src/app/settings/store/reducers';

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
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
