import { TestBed, inject } from '@angular/core/testing';

import { SolversLiveService } from './solvers-live.service';

describe('SolversLiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolversLiveService]
    });
  });

  it('should ...', inject([SolversLiveService], (service: SolversLiveService) => {
    expect(service).toBeTruthy();
  }));
});
