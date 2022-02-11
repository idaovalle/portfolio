import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesWrapperComponent } from './wrapper/countries-wrapper.component';
import { AngularmaterialModule } from '../shared/angularmaterial/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderCountriesComponent } from './components/header/header-countries.component';
import { CountriesSidenavComponent } from './components/sidenav/countries-sidenav.component';

@NgModule({
  declarations: [
    CountriesWrapperComponent,
    HeaderCountriesComponent,
    CountriesSidenavComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    AngularmaterialModule,
    FlexLayoutModule,
  ],
})
export class CountriesModule {}
