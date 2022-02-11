import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { AngularmaterialModule } from '../../../../../shared/angularmaterial/angularmaterial.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, AngularmaterialModule],
  exports: [MapComponent],
})
export class MapModule {}
