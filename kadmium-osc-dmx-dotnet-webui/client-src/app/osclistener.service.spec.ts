import { TestBed, inject } from '@angular/core/testing';

import { OSCListenerService } from './osclistener.service';

describe('OSCListenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OSCListenerService]
    });
  });

  it('should ...', inject([OSCListenerService], (service: OSCListenerService) => {
    expect(service).toBeTruthy();
  }));
});
