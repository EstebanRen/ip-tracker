import { Component, Input, SimpleChanges } from '@angular/core';
import { Map, icon, marker, tileLayer } from 'leaflet';
import { IpData } from 'src/app/entities/model-Ip';

@Component({
  selector: 'app-ip-map',
  templateUrl: './ip-map.component.html',
  styleUrls: ['./ip-map.component.css']
})
export class IpMapComponent {
  @Input() ipData!: IpData;
  map!: Map;

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ipData'] && !changes['ipData'].firstChange) {
      this.updateMap();
    }
  }

  initializeMap(): void {
    this.map = new Map('map').setView([this.ipData.location.lat, this.ipData.location.lng], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);
    const iconMarket = icon({
      iconUrl: '/../../assets/images/icon-location.svg',
    });
    marker([this.ipData.location.lat, this.ipData.location.lng], { icon: iconMarket }).addTo(this.map);
  }

   updateMap(): void {
    this.map.remove();
    this.initializeMap();
  }
}
