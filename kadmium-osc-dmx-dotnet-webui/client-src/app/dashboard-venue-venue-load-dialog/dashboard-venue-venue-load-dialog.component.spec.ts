import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVenueVenueLoadDialogComponent } from './dashboard-venue-venue-load-dialog.component';

describe('DashboardVenueVenueLoadDialogComponent', () => {
  let component: DashboardVenueVenueLoadDialogComponent;
  let fixture: ComponentFixture<DashboardVenueVenueLoadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVenueVenueLoadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVenueVenueLoadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
