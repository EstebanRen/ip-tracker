import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpMapComponent } from './ip-map.component';

describe('IpMapComponent', () => {
  let component: IpMapComponent;
  let fixture: ComponentFixture<IpMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpMapComponent]
    });
    fixture = TestBed.createComponent(IpMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
