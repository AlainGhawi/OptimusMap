import { NgModule } from '@angular/core';
import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [MapsComponent],
  imports: [SharedModule, MapsRoutingModule, GoogleMapsModule],
})
export class MapsModule { }
