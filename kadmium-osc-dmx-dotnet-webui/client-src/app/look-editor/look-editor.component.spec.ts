import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookEditorComponent } from './look-editor.component';

describe('LookEditorComponent', () => {
  let component: LookEditorComponent;
  let fixture: ComponentFixture<LookEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
