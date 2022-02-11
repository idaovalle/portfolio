import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersListRoutingModule } from './characters-list-routing.module';
import { CharactersListComponent } from './characters-list.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CharactersCardModule } from '../../components/card/characters-card.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AngularmaterialModule } from '../../../shared/angularmaterial/angularmaterial.module';
import { CharactersSearchModule } from '../../components/search/characters-search.module';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [
    CommonModule,
    CharactersListRoutingModule,
    FlexLayoutModule,
    CharactersCardModule,
    InfiniteScrollModule,
    AngularmaterialModule,
    CharactersSearchModule,
  ],
})
export class CharactersListModule {}
