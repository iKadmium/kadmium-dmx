import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOscListenerMessagesComponent } from './dashboard-osc-listener-messages.component';

describe('DashboardOscListenerMessagesComponent', () => {
  let component: DashboardOscListenerMessagesComponent;
  let fixture: ComponentFixture<DashboardOscListenerMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOscListenerMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOscListenerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
