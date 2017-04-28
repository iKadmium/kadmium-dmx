import { TestBed, inject } from '@angular/core/testing';

import { EnttecProTransmitterService } from './enttec-pro-transmitter.service';

describe('EnttecProTransmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnttecProTransmitterService]
    });
  });

  it('should ...', inject([EnttecProTransmitterService], (service: EnttecProTransmitterService) => {
    expect(service).toBeTruthy();
  }));
});
