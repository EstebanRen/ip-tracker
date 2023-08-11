import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCharacteristicsComponent } from './ip-characteristics.component';

describe('IpCharacteristicsComponent', () => {
  let component: IpCharacteristicsComponent;
  let fixture: ComponentFixture<IpCharacteristicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpCharacteristicsComponent]
    });
    fixture = TestBed.createComponent(IpCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
