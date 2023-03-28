import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule {}
