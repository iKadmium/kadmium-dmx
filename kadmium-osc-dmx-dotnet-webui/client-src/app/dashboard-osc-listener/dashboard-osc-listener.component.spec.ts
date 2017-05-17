import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOSCListenerComponent } from './dashboard-osc-listener.component';

describe('DashboardOSCListenerComponent', () => {
  let component: DashboardOSCListenerComponent;
  let fixture: ComponentFixture<DashboardOSCListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOSCListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOSCListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
