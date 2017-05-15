import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { TogglableService, Togglable } from "../togglable-service";
import { SACNTransmitterService } from "../sacn-transmitter.service";
import { SolversLiveService } from "../solvers-live.service";
import { EnttecProTransmitterService } from "../enttec-pro-transmitter.service";
import { OSCListenerService } from "../osclistener.service";
import { VenueService } from "../venue.service";
import { DashboardService, StatusData } from "../dashboard.service";
import { NotificationsService } from "../notifications.service";

import { StatusCode } from "../status-code.enum";
import { VenueSkeleton } from "../venue";
import { Status } from "../status";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [VenueService, DashboardService, OSCListenerService, SACNTransmitterService, EnttecProTransmitterService]
})
export class DashboardComponent implements OnInit
{
    public statuses: Map<string, Status>;


    constructor(private venueService: VenueService, private dashboardService: DashboardService,
        private notificationsService: NotificationsService, titleService: Title)
    {
        titleService.setTitle("Dashboard");

        this.statuses = new Map<string, Status>([
            ["Venues", new Status()],
            ["SACNTransmitters", new Status()],
            ["EnttecProTransmitters", new Status()],
            ["OSCListeners", new Status()],
            ["Fixtures", new Status()],
            ["Solvers", new Status()]
        ]);
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            await this.dashboardService.subscribe(this);
            this.dashboardService.init();
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }
    }

    public updateStatus(statusData: StatusData): void
    {
        let panelStatus = this.statuses.get(statusData.controller);
        let statusCode = StatusCode[statusData.code as string]
        panelStatus.statusCode = statusCode;
        panelStatus.body = statusData.message;
    }



    public get venueLoaded(): boolean
    {
        return this.statuses.get('Fixtures').statusCode == StatusCode.Success;
    }
}