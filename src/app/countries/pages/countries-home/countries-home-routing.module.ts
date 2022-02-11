import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesHomeComponent } from './countries-home.component';

const routes: Routes = [{ path: '', component: CountriesHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesHomeRoutingModule { }
