import { TestBed, inject } from '@angular/core/testing';

import { OSCListenerLiveService } from './osclistener-live.service';

describe('OSCListenerService', () =>
{
  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      providers: [OSCListenerLiveService]
    });
  });

  it('should ...', inject([OSCListenerLiveService], (service: OSCListenerLiveService) =>
  {
    expect(service).toBeTruthy();
  }));
});
