import { NgModule } from '@angular/core';
import { TrackerRoutingModule } from './tracker-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './tracker.component';
import { IpFacadeService } from 'src/app/services/ip.facade';
import { IpFormComponent } from './components/ip-form/ip-form.component';
import { IpMapComponent } from './components/ip-map/ip-map.component';
import { IpCharacteristicsComponent } from './components/ip-characteristics/ip-characteristics.component';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { IpFormatDirective } from 'src/app/directives/ip-format.directive';

@NgModule({
  declarations: [
    TrackerComponent,
    IpFormComponent,
    IpMapComponent,
    IpCharacteristicsComponent,
    IpFormatDirective
  ],
  imports: [
    TrackerRoutingModule,
    ReactiveFormsModule,
    MaterialAngularModule,
    CommonModule
  ],
  providers: [IpFacadeService],
})
export class TrackerModule { }
