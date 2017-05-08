import { TestBed, inject } from '@angular/core/testing';

import { FixtureDefinitionService } from './fixture-definition.service';
import { HttpModule, XHRBackend } from "@angular/http";
import { DashboardService, MockDashboardService } from "app/dashboard.service";
import { MockBackend } from "@angular/http/testing";
import { fakeAsync } from "@angular/core/testing";

describe('FixtureDefinitionService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                FixtureDefinitionService,
                { provide: XHRBackend, useClass: MockBackend },
                { provide: DashboardService, useClass: MockDashboardService }
            ],
            imports: [HttpModule]
        });
    });

    it('should ...', inject([FixtureDefinitionService, XHRBackend], fakeAsync((service: FixtureDefinitionService, backend: XHRBackend) =>
    {
        expect(service).toBeTruthy();
    })));
});
