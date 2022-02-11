import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByWorldRoutingModule } from './by-world-routing.module';
import { ByWorldComponent } from './by-world.component';
import { AngularmaterialModule } from '../../../../shared/angularmaterial/angularmaterial.module';
import { LoaderModule } from '../../../shared/loader/loader.module';

@NgModule({
  declarations: [ByWorldComponent],
  imports: [
    CommonModule,
    ByWorldRoutingModule,
    AngularmaterialModule,
    LoaderModule,
  ],
  exports: [ByWorldComponent],
})
export class ByWorldModule {}
