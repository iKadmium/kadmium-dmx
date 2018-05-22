import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryComponent } from './venue-discovery.component';

describe('VenueDiscoveryComponent', () => {
  let component: VenueDiscoveryComponent;
  let fixture: ComponentFixture<VenueDiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
