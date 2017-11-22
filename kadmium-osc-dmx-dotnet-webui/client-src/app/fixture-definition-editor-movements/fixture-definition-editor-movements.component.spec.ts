import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorMovementsComponent } from './fixture-definition-editor-movements.component';

describe('FixtureDefinitionEditorMovementsComponent', () => {
  let component: FixtureDefinitionEditorMovementsComponent;
  let fixture: ComponentFixture<FixtureDefinitionEditorMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDefinitionEditorMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDefinitionEditorMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
