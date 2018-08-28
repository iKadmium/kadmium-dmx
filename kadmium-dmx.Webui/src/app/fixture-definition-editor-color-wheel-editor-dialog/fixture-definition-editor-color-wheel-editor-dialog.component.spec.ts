import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorColorWheelEditorDialogComponent } from './fixture-definition-editor-color-wheel-editor-dialog.component';

describe('FixtureDefinitionEditorColorWheelEditorDialogComponent', () => {
  let component: FixtureDefinitionEditorColorWheelEditorDialogComponent;
  let fixture: ComponentFixture<FixtureDefinitionEditorColorWheelEditorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDefinitionEditorColorWheelEditorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDefinitionEditorColorWheelEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
