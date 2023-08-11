import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FlightData } from '../entities/modelFlights';
import { environment } from 'src/environments/environments';
import { IpData } from '../entities/model-Ip';

@Injectable({
  providedIn: 'root'
})

export class IpService {
  constructor(private http: HttpClient) { }

  getIpFromApi(ip: string = '') {
    return this.http.get<IpData>(environment.urlApiIp + ip);
  }
}
