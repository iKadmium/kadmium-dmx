import { TestBed, inject } from '@angular/core/testing';

import { SACNTransmitterService } from './sacntransmitter.service';

describe('SACNTransmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SACNTransmitterService]
    });
  });

  it('should ...', inject([SACNTransmitterService], (service: SACNTransmitterService) => {
    expect(service).toBeTruthy();
  }));
});
