import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorHomeComponent } from './fixture-definition-editor-home.component';

describe('FixtureDefinitionEditorHomeComponent', () => {
  let component: FixtureDefinitionEditorHomeComponent;
  let fixture: ComponentFixture<FixtureDefinitionEditorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDefinitionEditorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDefinitionEditorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
