import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseEditorPresetSaveDialogComponent } from './universe-editor-preset-save-dialog.component';

describe('UniverseEditorPresetSaveDialogComponent', () => {
  let component: UniverseEditorPresetSaveDialogComponent;
  let fixture: ComponentFixture<UniverseEditorPresetSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverseEditorPresetSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverseEditorPresetSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
