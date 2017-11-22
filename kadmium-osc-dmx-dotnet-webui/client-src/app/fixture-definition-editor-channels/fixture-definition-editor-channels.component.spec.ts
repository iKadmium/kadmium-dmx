import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorChannelsComponent } from './fixture-definition-editor-channels.component';

describe('FixtureDefinitionEditorChannelsComponent', () => {
  let component: FixtureDefinitionEditorChannelsComponent;
  let fixture: ComponentFixture<FixtureDefinitionEditorChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDefinitionEditorChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDefinitionEditorChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
