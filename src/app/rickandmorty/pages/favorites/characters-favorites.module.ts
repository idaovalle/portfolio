import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersFavoritesComponent } from './characters-favorites.component';
import { FavoritesRoutingModule } from './characters-favorites-routing.module';
import { CharactersCardModule } from '../../components/card/characters-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularmaterialModule } from 'src/app/shared/angularmaterial/angularmaterial.module';

@NgModule({
  declarations: [CharactersFavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    CharactersCardModule,
    FlexLayoutModule,
    AngularmaterialModule,
  ],
})
export class FavoritesModule {}
