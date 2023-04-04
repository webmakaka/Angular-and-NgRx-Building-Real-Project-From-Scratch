import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesComponent } from 'src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component';
import { AddToFavoritesService } from 'src/app/shared/modules/addToFavorites/services/addToFavorites.service';
import { AddToFavoritesEffect } from 'src/app/shared/modules/addToFavorites/store/actions/effects/addToFavorite.effect';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
