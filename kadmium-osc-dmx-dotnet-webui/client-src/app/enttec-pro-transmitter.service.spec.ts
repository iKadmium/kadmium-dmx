import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from "@angular/http/testing";
import { EnttecProTransmitterService } from './enttec-pro-transmitter.service';
import { ConnectionBackend, Http, BaseRequestOptions, RequestOptions, Response, ResponseOptions, Connection, HttpModule, XHRBackend } from "@angular/http";
import { async, fakeAsync, tick } from "@angular/core/testing";
import { MockConnection } from "@angular/http/testing";
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { NotificationsService } from "app/notifications.service";
import { DashboardService, MockDashboardService } from "app/dashboard.service";

describe('EnttecProTransmitterService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                EnttecProTransmitterService,
                { provide: XHRBackend, useClass: MockBackend },
                { provide: DashboardService, useClass: MockDashboardService }
            ],
            imports: [
                HttpModule
            ]
        });
    });

    it('should return some ports', inject([EnttecProTransmitterService, XHRBackend], fakeAsync((service: EnttecProTransmitterService, backend: XHRBackend) =>
    {
        let result: string[];
        let lastConnection;

        (backend as any).connections.subscribe((connection: MockConnection) =>
        {
            let response = new ResponseOptions({ body: JSON.stringify(["COM1", "COM2"]) });
            connection.mockRespond(new Response(response));
        });
        service.getPorts().then(result => 
        {
            expect(result.length).toEqual(2);
            expect(result[0]).toEqual("COM1");
            expect(result[1]).toEqual("COM2");
        });
    })));

});
