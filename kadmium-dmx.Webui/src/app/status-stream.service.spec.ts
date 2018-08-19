import { TestBed, inject } from '@angular/core/testing';

import { AppModule } from "./app.module";
import { StatusStreamService } from './status-stream.service';

describe('DashboardService', () =>
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
