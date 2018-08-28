import { TestBed, inject } from '@angular/core/testing';

import { StatusStreamService } from './status-stream.service';

describe('StatusStreamService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [StatusStreamService]
        });
    });

    it('should ...', inject([StatusStreamService], (service: StatusStreamService) =>
    {
        expect(service).toBeTruthy();
    }));
});
