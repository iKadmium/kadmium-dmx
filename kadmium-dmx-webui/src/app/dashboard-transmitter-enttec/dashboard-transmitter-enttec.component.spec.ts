import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransmitterEnttecComponent } from './dashboard-transmitter-enttec.component';

describe('DashboardTransmitterEnttecComponent', () => {
  let component: DashboardTransmitterEnttecComponent;
  let fixture: ComponentFixture<DashboardTransmitterEnttecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTransmitterEnttecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTransmitterEnttecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
