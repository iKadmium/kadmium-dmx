import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SACNTransmitterLiveComponent } from './sacn-transmitter-live.component';

describe('SACNTransmitterLiveComponent', () =>
{
  let component: SACNTransmitterLiveComponent;
  let fixture: ComponentFixture<SACNTransmitterLiveComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [SACNTransmitterLiveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(SACNTransmitterLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
