import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByWorldComponent } from './by-world.component';

const routes: Routes = [{ path: '', component: ByWorldComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByWorldRoutingModule { }
