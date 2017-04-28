import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionsComponent } from './fixture-definitions.component';

describe('FixtureDefinitionsComponent', () => {
  let component: FixtureDefinitionsComponent;
  let fixture: ComponentFixture<FixtureDefinitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDefinitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
