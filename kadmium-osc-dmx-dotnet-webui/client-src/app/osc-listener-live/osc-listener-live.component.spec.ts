import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OscListenerLiveComponent } from './osc-listener-live.component';

describe('OscListenerLiveComponent', () => {
  let component: OscListenerLiveComponent;
  let fixture: ComponentFixture<OscListenerLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscListenerLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscListenerLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
