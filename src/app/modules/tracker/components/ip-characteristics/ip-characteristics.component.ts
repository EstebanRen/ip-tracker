import { Component, Input } from '@angular/core';
import { IpData } from 'src/app/entities/model-Ip';

@Component({
  selector: 'app-ip-characteristics',
  templateUrl: './ip-characteristics.component.html',
  styleUrls: ['./ip-characteristics.component.css']
})
export class IpCharacteristicsComponent {
  @Input() ipData!: IpData;

}
