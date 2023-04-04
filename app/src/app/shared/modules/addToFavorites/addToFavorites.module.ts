import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddToFavoritesComponent } from 'src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
})
export class AddToFavoritesModule {}
