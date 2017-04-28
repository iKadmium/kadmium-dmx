import { TestBed, inject } from '@angular/core/testing';

import { LookService } from './look.service';

describe('LookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookService]
    });
  });

  it('should ...', inject([LookService], (service: LookService) => {
    expect(service).toBeTruthy();
  }));
});
