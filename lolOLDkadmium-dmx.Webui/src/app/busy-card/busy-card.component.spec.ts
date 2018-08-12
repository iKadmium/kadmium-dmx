import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyCardComponent } from './busy-card.component';

describe('BusyCardComponent', () => {
  let component: BusyCardComponent;
  let fixture: ComponentFixture<BusyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
