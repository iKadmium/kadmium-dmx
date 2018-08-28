import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueEditorHomeComponent } from './venue-editor-home.component';

describe('VenueEditorHomeComponent', () => {
  let component: VenueEditorHomeComponent;
  let fixture: ComponentFixture<VenueEditorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueEditorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueEditorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
