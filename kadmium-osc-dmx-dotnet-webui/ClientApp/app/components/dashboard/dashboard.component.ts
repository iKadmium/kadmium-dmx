import { Component, ViewChild } from '@angular/core';

import { StatusPanelComponent } from "../status/status-panel/status-panel.component";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { VenueService } from "../venues/venue.service";
import { DashboardService } from "./dashboard.service";

import { StatusCode } from "../status/status";

import { URLs } from "../../shared/url";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html'),
    providers: [VenueService, DashboardService]
})
export class DashboardComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    @ViewChild("venue") venue: StatusPanelComponent;
    @ViewChild("sacnTransmitter") sacnTransmitter: StatusPanelComponent;
    @ViewChild("oscListener") oscListener: StatusPanelComponent;
    @ViewChild("fixtures") fixtures: StatusPanelComponent;

    private venueNames: string[];

    constructor(private venueService: VenueService, private dashboardService: DashboardService)
    {
        venueService.getNames()
            .then(names => this.venueNames = names)
            .catch((reason: any) => this.messageBar.add("Error", reason));
        dashboardService.subscribe(status => 
        {
            let statusPanel: StatusPanelComponent;
            switch (status.controller)
            {
                case "Venues":
                    statusPanel = this.venue;
                    break;
                case "SACNTransmitters":
                    statusPanel = this.sacnTransmitter;
                    break;
                case "OSCListeners":
                    statusPanel = this.oscListener
                    break;
                case "Fixtures":
                    statusPanel = this.fixtures
                    break;
                default:
                    return;
            }

            statusPanel.status.update(status.code, status.message);
        });
    }

    activateVenue(venueName: string): void
    {
        this.venueService
            .activate(venueName)
            .then(() => this.messageBar.add("Success", venueName + " successfully loaded"))
            .catch((reason) => this.messageBar.add("Error", reason));
    }
}