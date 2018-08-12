import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVenueComponent } from './dashboard-venue.component';

describe('DashboardVenueComponent', () => {
  let component: DashboardVenueComponent;
  let fixture: ComponentFixture<DashboardVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
