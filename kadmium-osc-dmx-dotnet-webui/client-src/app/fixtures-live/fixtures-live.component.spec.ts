import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesLiveComponent } from './fixtures-live.component';

describe('FixturesLiveComponent', () => {
  let component: FixturesLiveComponent;
  let fixture: ComponentFixture<FixturesLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
