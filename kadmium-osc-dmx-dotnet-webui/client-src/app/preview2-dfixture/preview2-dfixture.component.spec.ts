import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Preview2DFixtureComponent } from './preview2-dfixture.component';

describe('Preview2DFixtureComponent', () => {
  let component: Preview2DFixtureComponent;
  let fixture: ComponentFixture<Preview2DFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Preview2DFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Preview2DFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
