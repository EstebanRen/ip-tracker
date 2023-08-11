import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IpData } from '../entities/model-Ip';

interface State {
  ipData: IpData;
  ipSearch:string;
  error: unknown;
}

@Injectable({ providedIn: 'root' })

export class IpStateService {
  #state = new BehaviorSubject<State>({
    ipData: {
      ip: '',
      location: {
        country: '',
        region: '',
        timezone: '',
        city:'',
        geonameId:0,
        lat:0,
        lng:0,
        postalCode:'',
      },
      as: {
        asn: 0,
        name: '',
        route: '',
        domain: '',
        type: ''
      },
      isp: ''
    },
    ipSearch:'',
    error: null,
  });

  getIpData() {
    return this.#state.asObservable().pipe(map((state) => state.ipData));
  }
  getIpSearch() {
    return this.#state.asObservable().pipe(map((state) => state.ipSearch));
  }
  getError() {
    return this.#state.asObservable().pipe(map((state) => state.error));
  }
  setIpData(ipData: IpData) {
    this.#state.next({
      ...this.#state.value,
      ipData:ipData,
    });
  }
  setIpSearch(ipSearch: string) {
    this.#state.next({
      ...this.#state.value,
      ipSearch:ipSearch,
    });
  }
  setError(error: unknown) {
    this.#state.next({
      ...this.#state.value,
      error,
    });
  }
}
