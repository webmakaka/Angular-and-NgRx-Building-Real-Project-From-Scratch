import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorMessageComponent } from 'src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent],
})
export class ErrorMessageModule {}
