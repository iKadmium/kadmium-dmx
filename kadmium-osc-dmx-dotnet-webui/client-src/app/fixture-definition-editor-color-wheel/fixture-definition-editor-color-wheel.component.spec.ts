import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorColorWheelComponent } from './fixture-definition-editor-color-wheel.component';

describe('FixtureDefinitionEditorColorWheelComponent', () => {
  let component: FixtureDefinitionEditorColorWheelComponent;
  let fixture: ComponentFixture<FixtureDefinitionEditorColorWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDefinitionEditorColorWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDefinitionEditorColorWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
