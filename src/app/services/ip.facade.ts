import { Injectable } from '@angular/core';
import { IpService } from './ip-api.service';
import { IpStateService } from './ip-state.service';
import { IpData } from '../entities/model-Ip';
import { MatDialog } from '@angular/material/dialog';
import { PopUpMessageComponent } from '../components/pop-up-message/pop-up-message.component';

@Injectable()
export class IpFacadeService {
  ipData!: IpData;
  constructor(
    private ipService: IpService,
    private ipState: IpStateService,
    private dialog: MatDialog
  ) {
    this.ipService.getIpFromApi().subscribe((response: IpData) => {
      this.mappingDataFromService(response);
    }, (error: any) => {
      this.error(error);
    });
  }

  mappingDataFromService(response: IpData): void {
    this.ipData=response;
    this.updateIpData(this.ipData);
    this.updateIpSearch(this.ipData.ip)
  }
  updateIpData(ipData: IpData): void {
    this.ipState.setIpData(ipData);
  }
  updateIpSearch(ip: string): void {
    this.ipState.setIpSearch(ip);
  }
  error(error: any): void {
    const dialogRef = this.dialog.open(PopUpMessageComponent, {
      width: '100%',
      panelClass: 'modal-pricing-plans-page',     
      data: {
        title: 'Upss!',
        message: 'Estamos teniendo problemas técnicos, por favor espera mientras traemos tus vuelos de vuelta',
      }
    });
  }
  searchNewIp(ip:string){
    this.ipService.getIpFromApi(ip).subscribe((response: IpData) => {
      this.mappingDataFromService(response);
    }, (error: any) => {
      this.error(error);
    });
  }
}
