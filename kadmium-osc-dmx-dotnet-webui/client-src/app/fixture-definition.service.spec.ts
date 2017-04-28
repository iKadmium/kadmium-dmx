import { TestBed, inject } from '@angular/core/testing';

import { FixtureDefinitionService } from './fixture-definition.service';

describe('FixtureDefinitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixtureDefinitionService]
    });
  });

  it('should ...', inject([FixtureDefinitionService], (service: FixtureDefinitionService) => {
    expect(service).toBeTruthy();
  }));
});
