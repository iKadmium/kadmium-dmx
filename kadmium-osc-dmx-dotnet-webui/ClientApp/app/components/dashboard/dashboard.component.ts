import { Component, ViewChild, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { SolversLiveService } from "../solvers-live/solvers-live.service";
import { OSCListenerService } from "../osc-listener-live/osc-listener.service";
import { SACNTransmitterService } from "../sacn-transmitter-live/sacn-transmitter.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";
import { VenueService } from "../venues/venue.service";
import { DashboardService, StatusData } from "./dashboard.service";

import { StatusPanelComponent } from "../status/status-panel/status-panel.component";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { StatusCode } from "../status/status";
import { URLs } from "../../shared/url";
import { TogglableService, Togglable } from "./togglable-service";
import { VenueSkeleton } from "../venues/venue";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html'),
    providers: [VenueService, DashboardService, SolversLiveService, OSCListenerService, SACNTransmitterService]
})
export class DashboardComponent implements OnInit
{
    @ViewChild("venuePanel") venuePanel: StatusPanelComponent;
    @ViewChild("sacnTransmitterPanel") sacnTransmitterPanel: StatusPanelComponent;
    @ViewChild("oscListenerPanel") oscListenerPanel: StatusPanelComponent;
    @ViewChild("fixturesPanel") fixturesPanel: StatusPanelComponent;
    @ViewChild("solversPanel") solversPanel: StatusPanelComponent;

    sacn: TogglableService<SACNTransmitterService>;
    osc: TogglableService<OSCListenerService>;
    solvers: TogglableService<SolversLiveService>;

    private venueSkeletons: VenueSkeleton[];

    constructor(private venueService: VenueService, private dashboardService: DashboardService,
        private solversService: SolversLiveService, private oscService: OSCListenerService,
        private sacnService: SACNTransmitterService, private messageBarService: MessageBarService,
        titleService: Title)
    {
        titleService.setTitle("Dashboard");

        this.sacn = new TogglableService(sacnService, messageBarService);
        this.osc = new TogglableService(oscService, messageBarService);
        this.solvers = new TogglableService(solversService, messageBarService);
        this.venueSkeletons = [];
    }

    ngOnInit(): void
    {
        this.dashboardService.subscribe(this);
        this.venueService.getSkeletons().then(skeletons => this.venueSkeletons = skeletons).catch(reason => this.messageBarService.add("Error", reason));
        this.sacn.init();
        this.osc.init();
        this.solvers.init();
    }

    updateStatus(status: StatusData): void
    {
        let statusPanel: StatusPanelComponent;
        let fred = status;
        switch (status.controller)
        {
            case "Venues":
                statusPanel = this.venuePanel;
                break;
            case "SACNTransmitters":
                statusPanel = this.sacnTransmitterPanel;
                break;
            case "OSCListeners":
                statusPanel = this.oscListenerPanel;
                break;
            case "Fixtures":
                statusPanel = this.fixturesPanel;
                break;
            case "Solvers":
                statusPanel = this.solversPanel;
                if (status.code == "Success")
                {
                    this.solvers.enabled = true;
                }
                break;
            default:
                return;
        }

        statusPanel.status.update(status.code, status.message);
    }

    activateVenue(venueSkeleton: VenueSkeleton): void
    {
        this.venueService
            .activate(venueSkeleton.id)
            .then(() => this.messageBarService.add("Success", venueSkeleton.name + " successfully loaded"))
            .catch((reason) => this.messageBarService.add("Error", reason));
    }

    private async toggle<T extends Togglable>(service: TogglableService<T>): Promise<void>
    {
        return service.toggle();
    }
}