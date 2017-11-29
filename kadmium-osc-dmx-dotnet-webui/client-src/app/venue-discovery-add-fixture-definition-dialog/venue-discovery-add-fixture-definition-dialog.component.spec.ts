import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from './venue-discovery-add-fixture-definition-dialog.component';

describe('VenueDiscoveryAddFixtureDefinitionDialogComponent', () => {
  let component: VenueDiscoveryAddFixtureDefinitionDialogComponent;
  let fixture: ComponentFixture<VenueDiscoveryAddFixtureDefinitionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueDiscoveryAddFixtureDefinitionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDiscoveryAddFixtureDefinitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
