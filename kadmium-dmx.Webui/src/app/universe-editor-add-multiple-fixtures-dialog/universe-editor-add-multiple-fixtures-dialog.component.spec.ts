import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseEditorAddMultipleFixturesDialogComponent } from './universe-editor-add-multiple-fixtures-dialog.component';

describe('UniverseEditorAddMultipleFixturesDialogComponent', () => {
  let component: UniverseEditorAddMultipleFixturesDialogComponent;
  let fixture: ComponentFixture<UniverseEditorAddMultipleFixturesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverseEditorAddMultipleFixturesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverseEditorAddMultipleFixturesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
