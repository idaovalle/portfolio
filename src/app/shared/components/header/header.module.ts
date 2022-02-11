import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AngularmaterialModule } from '../../angularmaterial/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AngularmaterialModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
