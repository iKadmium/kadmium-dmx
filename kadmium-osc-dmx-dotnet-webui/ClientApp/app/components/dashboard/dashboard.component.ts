import { Component, ViewChild } from '@angular/core';

import { StatusPanelComponent } from "../status/status-panel/status-panel.component";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { VenueService } from "../venues/venue.service";
import { DashboardService } from "./dashboard.service";

import { StatusCode } from "../status/status";

import { URLs } from "../../shared/url";
import { SolversService } from "../solvers/solvers.service";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html'),
    providers: [VenueService, DashboardService, SolversService]
})
export class DashboardComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    @ViewChild("venue") venue: StatusPanelComponent;
    @ViewChild("sacnTransmitter") sacnTransmitter: StatusPanelComponent;
    @ViewChild("oscListener") oscListener: StatusPanelComponent;
    @ViewChild("fixtures") fixtures: StatusPanelComponent;
    @ViewChild("solvers") solvers: StatusPanelComponent;

    sacnEnabled: boolean;
    oscEnabled: boolean;
    solversEnabled: boolean;

    private venueNames: string[];

    constructor(private venueService: VenueService, private dashboardService: DashboardService, private solversService: SolversService)
    {
        this.sacnEnabled = true;
        this.oscEnabled = true;
        this.solversService
            .getEnabled()
            .then(value => this.solversEnabled = value)
            .catch(reason => this.messageBar.add("Error", reason));

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
                    statusPanel = this.oscListener;
                    break;
                case "Fixtures":
                    statusPanel = this.fixtures;
                    break;
                case "Solvers":
                    statusPanel = this.solvers;
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

    private getStatusText(value: boolean | null): string
    {
        if (value == true)
        {
            return "Enabled";
        }
        else if (value == false)
        {
            return "Disabled";
        }
        else
        {
            return "Unknown";
        }
    }

    private async toggleSACN(): Promise<void>
    {
        let targetValue = !this.sacnEnabled;
        this.sacnEnabled = null;
        await delay(1000);
        this.sacnEnabled = targetValue;
    }

    private async toggleOSC(): Promise<void>
    {
        let targetValue = !this.oscEnabled;
        this.oscEnabled = null;
        await delay(1000);
        this.oscEnabled = targetValue;
    }

    private async toggleSolvers(): Promise<void>
    {
        let targetValue = !this.solversEnabled;
        this.solversEnabled = null;
        await delay(1000);
        this.solversEnabled = targetValue;
    }
}

async function delay(milliseconds: number)
{
    return new Promise<void>(resolve =>
    {
        setTimeout(resolve, milliseconds);
    });
}