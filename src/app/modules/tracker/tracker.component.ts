import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { IpData } from 'src/app/entities/model-Ip';
import { IpStateService } from 'src/app/services/ip-state.service';
import { IpFacadeService } from 'src/app/services/ip.facade';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent {
  ipData!: IpData;
  ipSearch: string = '';
  constructor(
    private ipFacade: IpFacadeService,
    private ipState: IpStateService
  ) {
    combineLatest([
      this.ipState.getIpData(),
      this.ipState.getIpSearch()
    ]).subscribe(([ipData, ipSearch]) => {
      this.ipData = ipData;
      this.ipSearch = ipSearch;
    });
  }
  searchIp(ip:any){
    this.ipFacade.searchNewIp(ip);
  }
}
