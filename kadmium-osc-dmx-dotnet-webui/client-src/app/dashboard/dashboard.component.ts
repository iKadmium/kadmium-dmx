import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { TogglableService, Togglable } from "../togglable-service";
import { SACNTransmitterService } from "../sacntransmitter.service";
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
    @ViewChild("venuePanel") venuePanel: StatusPanelComponent;
    @ViewChild("sacnTransmitterPanel") sacnTransmitterPanel: StatusPanelComponent;
    @ViewChild("oscListenerPanel") oscListenerPanel: StatusPanelComponent;
    @ViewChild("enttecProTransmitterPanel") enttecProTransmitterPanel: StatusPanelComponent;
    @ViewChild("fixturesPanel") fixturesPanel: StatusPanelComponent;
    @ViewChild("solversPanel") solversPanel: StatusPanelComponent;

    sacn: TogglableService<SACNTransmitterService>;
    osc: TogglableService<OSCListenerService>;
    solvers: TogglableService<SolversLiveService>;
    enttec: TogglableService<EnttecProTransmitterService>;

    private venueSkeletons: VenueSkeleton[];

    constructor(private venueService: VenueService, private dashboardService: DashboardService,
        private solversService: SolversLiveService, private oscService: OSCListenerService,
        private sacnService: SACNTransmitterService, private enttecProTransmitterService: EnttecProTransmitterService,
        private notificationsService: NotificationsService, titleService: Title)
    {
        titleService.setTitle("Dashboard");

        this.sacn = new TogglableService(sacnService, notificationsService);
        this.osc = new TogglableService(oscService, notificationsService);
        this.solvers = new TogglableService(solversService, notificationsService);
        this.enttec = new TogglableService(enttecProTransmitterService, notificationsService);
        this.venueSkeletons = [];
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

    updateStatus(status: StatusData): void
    {
        let statusPanel: StatusPanelComponent;
        let statusCode = StatusCode[status.code];
        switch (status.controller)
        {
            case "Venues":
                statusPanel = this.venuePanel;
                break;
            case "SACNTransmitters":
                statusPanel = this.sacnTransmitterPanel;
                break;
            case "EnttecProTransmitters":
                statusPanel = this.enttecProTransmitterPanel;
                break;
            case "OSCListeners":
                statusPanel = this.oscListenerPanel;
                break;
            case "Fixtures":
                statusPanel = this.fixturesPanel;
                break;
            case "Solvers":
                statusPanel = this.solversPanel;
                if (statusCode == StatusCode.Success)
                {
                    this.solvers.enabled = true;
                }
                break;
            default:
                return;
        }

        statusPanel.status = new Status(statusCode, status.message);
    }

    activateVenue(venueSkeleton: VenueSkeleton): void
    {
        this.venueService
            .activate(venueSkeleton.id)
            .then(() => this.notificationsService.add(StatusCode.Success, venueSkeleton.name + " successfully loaded"))
            .catch((reason) => this.notificationsService.add(StatusCode.Error, reason));
    }

    private async toggle<T extends Togglable>(service: TogglableService<T>): Promise<void>
    {
        return service.toggle();
    }
}