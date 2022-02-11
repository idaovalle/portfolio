import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersSearchComponent } from './characters-search.component';
import { AngularmaterialModule } from '../../../shared/angularmaterial/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharactersSearchComponent],
  imports: [
    CommonModule,
    AngularmaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [CharactersSearchComponent],
})
export class CharactersSearchModule {}
