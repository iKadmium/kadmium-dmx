import { TestBed, inject } from '@angular/core/testing';

import { PreviewServiceService } from './preview-service.service';

describe('PreviewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviewServiceService]
    });
  });

  it('should ...', inject([PreviewServiceService], (service: PreviewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
