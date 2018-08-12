import { TestBed, inject } from '@angular/core/testing';

import { StatusStreamService } from './dashboard.service';
import { AppModule } from "./app.module";

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
