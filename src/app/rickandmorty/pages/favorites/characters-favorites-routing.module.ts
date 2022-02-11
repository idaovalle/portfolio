import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersFavoritesComponent } from './characters-favorites.component';

const routes: Routes = [{ path: '', component: CharactersFavoritesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesRoutingModule {}
