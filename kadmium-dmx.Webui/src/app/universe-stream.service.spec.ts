import { TestBed, inject } from '@angular/core/testing';

import { UniverseStreamService } from './universe-stream.service';

describe('UniverseStreamService', () =>
{
	beforeEach(() =>
	{
		TestBed.configureTestingModule({
			providers: [UniverseStreamService]
		});
	});

	it('should ...', inject([UniverseStreamService], (service: UniverseStreamService) =>
	{
		expect(service).toBeTruthy();
	}));
});
