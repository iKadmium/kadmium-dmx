import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorMovementAxisEditorDialogComponent } from './fixture-definition-editor-movement-axis-editor-dialog.component';

describe('FixtureDefinitionEditorMovementAxisEditorDialogComponent', () => {
  let component: FixtureDefinitionEditorMovementAxisEditorDialogComponent;
  let fixture: ComponentFixture<FixtureDefinitionEditorMovementAxisEditorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDefinitionEditorMovementAxisEditorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDefinitionEditorMovementAxisEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
