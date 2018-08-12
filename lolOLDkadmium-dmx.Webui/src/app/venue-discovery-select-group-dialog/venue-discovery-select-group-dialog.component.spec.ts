import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoverySelectGroupDialogComponent } from './venue-discovery-select-group-dialog.component';

describe('VenueDiscoverySelectGroupDialogComponent', () => {
  let component: VenueDiscoverySelectGroupDialogComponent;
  let fixture: ComponentFixture<VenueDiscoverySelectGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDiscoverySelectGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDiscoverySelectGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
