import { Component, ViewChild } from '@angular/core';

import { StatusPanelComponent } from "../status/status-panel/status-panel.component";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { VenueService } from "../venues/venue.service";

import { StatusCode } from "../status/status";

import { URL } from "../../shared/url";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html'),
    providers: [VenueService]
})
export class DashboardComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    @ViewChild("venue") venue: StatusPanelComponent;
    @ViewChild("sacnTransmitter") sacnTransmitter: StatusPanelComponent;
    @ViewChild("oscListener") oscListener: StatusPanelComponent;
    @ViewChild("fixtures") fixtures: StatusPanelComponent;

    private webSocket: WebSocket;

    private static socketURL = URL.getSocketURL("Dashboard");
    private venueNames: string[];

    constructor(private venueService: VenueService)
    {
        venueService.getNames()
            .then(names => this.venueNames = names)
            .catch((reason: any) => this.messageBar.add("Error", reason));
        this.webSocket = new WebSocket(DashboardComponent.socketURL);
        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let status = JSON.parse(ev.data) as StatusData;
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

interface StatusData
{
    code: StatusCode;
    message: string;
    controller: string;
}