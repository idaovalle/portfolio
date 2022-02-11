import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickandmortyRoutingModule } from './rickandmorty-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AngularmaterialModule } from '../shared/angularmaterial/angularmaterial.module';
import { CharactersSidenavModule } from './components/sidenav/characters-sidenav.module';

import { SpinnerModule } from '../shared/components/spinner/spinner.module';

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    CommonModule,
    RickandmortyRoutingModule,
    AngularmaterialModule,
    CharactersSidenavModule,
    SpinnerModule,
  ],
})
export class RickandmortyModule {}
