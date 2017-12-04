import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryUnassignedComponent } from './venue-discovery-unassigned.component';

describe('VenueDiscoveryUnassignedComponent', () => {
  let component: VenueDiscoveryUnassignedComponent;
  let fixture: ComponentFixture<VenueDiscoveryUnassignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDiscoveryUnassignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDiscoveryUnassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
