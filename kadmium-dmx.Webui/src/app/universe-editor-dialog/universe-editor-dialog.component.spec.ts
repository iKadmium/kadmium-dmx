import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseEditorDialogComponent } from './universe-editor-dialog.component';

describe('UniverseEditorDialogComponent', () => {
  let component: UniverseEditorDialogComponent;
  let fixture: ComponentFixture<UniverseEditorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverseEditorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverseEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
