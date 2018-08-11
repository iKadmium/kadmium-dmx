import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueNameDialogComponent } from './venue-name-dialog.component';

describe('VenueNameDialogComponent', () => {
  let component: VenueNameDialogComponent;
  let fixture: ComponentFixture<VenueNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
