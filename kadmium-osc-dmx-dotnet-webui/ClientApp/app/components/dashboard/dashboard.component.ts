import { Component, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { SolversLiveService } from "../solvers-live/solvers-live.service";
import { OSCListenerService } from "../osc-listener-live/osc-listener.service";
import { SACNTransmitterService } from "../sacn-transmitter-live/sacn-transmitter.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";
import { VenueService } from "../venues/venue.service";
import { DashboardService } from "./dashboard.service";

import { StatusPanelComponent } from "../status/status-panel/status-panel.component";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { StatusCode } from "../status/status";
import { URLs } from "../../shared/url";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html'),
    providers: [VenueService, DashboardService, SolversLiveService, OSCListenerService, SACNTransmitterService]
})
export class DashboardComponent
{
    @ViewChild("venue") venue: StatusPanelComponent;
    @ViewChild("sacnTransmitter") sacnTransmitter: StatusPanelComponent;
    @ViewChild("oscListener") oscListener: StatusPanelComponent;
    @ViewChild("fixtures") fixtures: StatusPanelComponent;
    @ViewChild("solvers") solvers: StatusPanelComponent;

    sacnEnabled: boolean;
    oscEnabled: boolean;
    solversEnabled: boolean;

    private venueNames: string[];

    constructor(private venueService: VenueService, private dashboardService: DashboardService,
        private solversService: SolversLiveService, private oscService: OSCListenerService,
        private sacnService: SACNTransmitterService, private messageBarService: MessageBarService,
        titleService: Title)
    {
        titleService.setTitle("Dashboard");
        this.sacnService
            .getEnabled()
            .then(value => this.sacnEnabled = value)
            .catch(error => this.messageBarService.add("Error", error));
        this.oscService
            .getEnabled()
            .then(value => this.oscEnabled = value)
            .catch(error => this.messageBarService.add("Error", error));
        this.solversService
            .getEnabled()
            .then(value => this.solversEnabled = value)
            .catch(reason => this.messageBarService.add("Error", reason));

        venueService.getNames()
            .then(names => this.venueNames = names)
            .catch((reason: any) => this.messageBarService.add("Error", reason));
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
                    if (status.code == "Success")
                    {
                        this.solversEnabled = true;
                    }
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
            .then(() => this.messageBarService.add("Success", venueName + " successfully loaded"))
            .catch((reason) => this.messageBarService.add("Error", reason));
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
        try
        {
            await this.sacnService.setEnabled(targetValue);
            this.sacnEnabled = targetValue;
        }
        catch (error)
        {
            this.messageBarService.add("Error", error);
            this.sacnEnabled = !targetValue;
        }
        this.sacnEnabled = targetValue;
    }

    private async toggleOSC(): Promise<void>
    {
        let targetValue = !this.oscEnabled;
        this.oscEnabled = null;
        try
        {
            await this.oscService.setEnabled(targetValue);
            this.oscEnabled = targetValue;
        }
        catch (error)
        {
            this.messageBarService.add("Error", error);
            this.oscEnabled = !targetValue;
        }
        this.oscEnabled = targetValue;
    }

    private async toggleSolvers(): Promise<void>
    {
        let targetValue = !this.solversEnabled;
        this.solversEnabled = null;
        try
        {
            await this.solversService.setEnabled(targetValue);
            this.solversEnabled = targetValue;
        }
        catch (error)
        {
            this.messageBarService.add("Error", error);
            this.solversEnabled = !targetValue;
        }

    }
}