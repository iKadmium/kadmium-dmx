import { TestBed, inject } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { StatusPanelComponent } from "app/status-panel/status-panel.component";
import { AppModule } from "app/app.module";

describe('DashboardService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [DashboardService]
        });
    });

    it('should ...', inject([DashboardService], (service: DashboardService) =>
    {
        expect(service).toBeTruthy();
    }));
});
