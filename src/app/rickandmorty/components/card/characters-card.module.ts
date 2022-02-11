import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularmaterialModule } from 'src/app/shared/angularmaterial/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CharactersCardComponent } from './characters-card.component';

@NgModule({
  declarations: [CharactersCardComponent],
  imports: [CommonModule, AngularmaterialModule, FlexLayoutModule],
  exports: [CharactersCardComponent],
})
export class CharactersCardModule {}
