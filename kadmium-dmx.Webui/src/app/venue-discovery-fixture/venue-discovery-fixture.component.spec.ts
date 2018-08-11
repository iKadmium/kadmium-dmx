import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryFixtureComponent } from './venue-discovery-fixture.component';

describe('VenueDiscoveryFixtureComponent', () => {
  let component: VenueDiscoveryFixtureComponent;
  let fixture: ComponentFixture<VenueDiscoveryFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDiscoveryFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDiscoveryFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
