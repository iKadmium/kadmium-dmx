import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryAddFixtureToVenueDialogComponent } from './venue-discovery-add-fixture-to-venue-dialog.component';

describe('VenueDiscoveryAddFixtureToVenueDialogComponent', () => {
  let component: VenueDiscoveryAddFixtureToVenueDialogComponent;
  let fixture: ComponentFixture<VenueDiscoveryAddFixtureToVenueDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDiscoveryAddFixtureToVenueDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDiscoveryAddFixtureToVenueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
