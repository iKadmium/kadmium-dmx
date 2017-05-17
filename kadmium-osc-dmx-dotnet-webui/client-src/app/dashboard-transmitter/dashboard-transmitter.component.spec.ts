import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransmitterComponent } from './dashboard-transmitter.component';

describe('DashboardTransmitterComponent', () => {
  let component: DashboardTransmitterComponent;
  let fixture: ComponentFixture<DashboardTransmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTransmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTransmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
