import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn.component';

describe('DashboardTransmitterSacnComponent', () => {
  let component: DashboardTransmitterSacnComponent;
  let fixture: ComponentFixture<DashboardTransmitterSacnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTransmitterSacnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTransmitterSacnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
