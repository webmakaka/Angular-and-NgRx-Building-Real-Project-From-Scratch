import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from 'src/app/shared/modules/loading/components/loading/loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
})
export class LoadingModule {}
