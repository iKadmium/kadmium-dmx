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

import { StatusPanelComponent } from "../status-panel/status-panel.component";

import { StatusCode } from "../status-code.enum";
import { VenueSkeleton } from "../venue";
import { Status } from "../status";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [VenueService, DashboardService, SolversLiveService, OSCListenerService, SACNTransmitterService, EnttecProTransmitterService]
})
export class DashboardComponent implements OnInit
{
    statuses: Map<string, Status>;

    sacn: TogglableService<SACNTransmitterService>;
    osc: TogglableService<OSCListenerService>;
    solvers: TogglableService<SolversLiveService>;
    enttec: TogglableService<EnttecProTransmitterService>;

    private venueSkeletons: VenueSkeleton[];

    constructor(private venueService: VenueService, private dashboardService: DashboardService,
        solversService: SolversLiveService, oscService: OSCListenerService,
        sacnService: SACNTransmitterService, enttecProTransmitterService: EnttecProTransmitterService,
        private notificationsService: NotificationsService, titleService: Title)
    {
        titleService.setTitle("Dashboard");

        this.sacn = new TogglableService(sacnService, notificationsService);
        this.osc = new TogglableService(oscService, notificationsService);
        this.solvers = new TogglableService(solversService, notificationsService);
        this.enttec = new TogglableService(enttecProTransmitterService, notificationsService);
        this.venueSkeletons = [];

        this.statuses = new Map<string, Status>([
            ["Venues", new Status()],
            ["SACNTransmitters", new Status()],
            ["EnttecProTransmitters", new Status()],
            ["OSCListeners", new Status()],
            ["Fixtures", new Status()],
            ["Solvers", new Status()]
        ]);
    }

    ngOnInit()
    {
        this.dashboardService.subscribe(this);
        this.venueService
            .getSkeletons()
            .then(skeletons => this.venueSkeletons = skeletons)
            .catch(reason => this.notificationsService.add(StatusCode.Error, reason));
        this.sacn.init();
        this.osc.init();
        this.solvers.init();
        this.enttec.init();
    }

    updateStatus(statusData: StatusData): void
    {
        let panelStatus = this.statuses.get(statusData.controller);
        let statusCode = StatusCode[statusData.code as string]
        panelStatus.statusCode = statusCode;
        panelStatus.body = statusData.message;

        if (statusData.controller == "Solvers" && statusCode == StatusCode.Success)
        {
            this.solvers.enabled = true;
        }
    }

    activateVenue(venueSkeleton: VenueSkeleton): void
    {
        this.venueService
            .activate(venueSkeleton.id)
            .then(() => this.notificationsService.add(StatusCode.Success, venueSkeleton.name + " successfully loaded"))
            .catch((reason) => this.notificationsService.add(StatusCode.Error, reason));
    }

    get venueLoaded(): boolean
    {
        return this.statuses.get('Fixtures').statusCode == StatusCode.Success;
    }
}