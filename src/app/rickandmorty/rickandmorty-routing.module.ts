import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/characters-home.module').then(
            (m) => m.HomeCharactersModule
          ),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./pages/list/characters-list.module').then(
            (m) => m.CharactersListModule
          ),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('./pages/favorites/characters-favorites.module').then(
            (m) => m.FavoritesModule
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickandmortyRoutingModule {}
