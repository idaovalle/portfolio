import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCharactersComponent } from './characters-home.component';
import { CharactersHomeRoutingModule } from './characters-home.routing.module';
import { AngularmaterialModule } from 'src/app/shared/angularmaterial/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeCharactersComponent],
  imports: [
    CommonModule,
    CharactersHomeRoutingModule,
    AngularmaterialModule,
    FlexLayoutModule,
  ],
})
export class HomeCharactersModule {}
