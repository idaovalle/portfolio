import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesHomeRoutingModule } from './countries-home-routing.module';
import { CountriesHomeComponent } from './countries-home.component';
import { AngularmaterialModule } from '../../../shared/angularmaterial/angularmaterial.module';

@NgModule({
  declarations: [CountriesHomeComponent],
  imports: [CommonModule, CountriesHomeRoutingModule, AngularmaterialModule],
})
export class CountriesHomeModule {}
