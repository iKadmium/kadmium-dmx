import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVenueListComponent } from './dashboard-venue-list.component';

describe('DashboardVenueListComponent', () => {
  let component: DashboardVenueListComponent;
  let fixture: ComponentFixture<DashboardVenueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVenueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVenueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
