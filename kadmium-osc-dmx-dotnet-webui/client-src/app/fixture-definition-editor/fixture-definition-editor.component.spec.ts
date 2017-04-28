import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorComponent } from './fixture-definition-editor.component';

describe('FixtureDefinitionEditorComponent', () => {
  let component: FixtureDefinitionEditorComponent;
  let fixture: ComponentFixture<FixtureDefinitionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDefinitionEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDefinitionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
