import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCharactersComponent } from './characters-home.component';

const routes: Routes = [{ path: '', component: HomeCharactersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersHomeRoutingModule {}
