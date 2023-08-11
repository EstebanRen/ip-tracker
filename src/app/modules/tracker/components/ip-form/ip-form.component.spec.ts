import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpFormComponent } from './ip-form.component';

describe('IpFormComponent', () => {
  let component: IpFormComponent;
  let fixture: ComponentFixture<IpFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpFormComponent]
    });
    fixture = TestBed.createComponent(IpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
