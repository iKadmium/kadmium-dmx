import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueTesterComponent } from './venue-tester.component';

describe('VenueTesterComponent', () => {
  let component: VenueTesterComponent;
  let fixture: ComponentFixture<VenueTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
