import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolversLiveComponent } from './solvers-live.component';

describe('SolversLiveComponent', () => {
  let component: SolversLiveComponent;
  let fixture: ComponentFixture<SolversLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolversLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolversLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
