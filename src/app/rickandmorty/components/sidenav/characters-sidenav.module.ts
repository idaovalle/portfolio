import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersSidenavComponent } from './characters-sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularmaterialModule } from 'src/app/shared/angularmaterial/angularmaterial.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharactersSidenavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularmaterialModule,
    RouterModule,
  ],
  exports: [CharactersSidenavComponent],
})
export class CharactersSidenavModule {}
