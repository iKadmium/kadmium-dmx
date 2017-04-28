import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureOptionsEditorComponent } from './fixture-options-editor.component';

describe('FixtureOptionsEditorComponent', () => {
  let component: FixtureOptionsEditorComponent;
  let fixture: ComponentFixture<FixtureOptionsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureOptionsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureOptionsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
