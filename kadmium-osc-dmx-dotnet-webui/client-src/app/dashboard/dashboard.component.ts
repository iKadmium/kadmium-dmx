import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { TogglableService, Togglable } from "../togglable-service";
import { SACNTransmitterService, UniverseUpdateData } from "../sacn-transmitter.service";
import { SolversLiveService, UniverseData, AttributeUpdateMessage } from "../solvers-live.service";
import { EnttecProTransmitterService } from "../enttec-pro-transmitter.service";
import { OSCListenerService } from "../osclistener.service";
import { VenueService } from "../venue.service";
import { DashboardService, StatusData } from "../dashboard.service";
import { NotificationsService } from "../notifications.service";

import { StatusCode } from "../status-code.enum";
import { VenueSkeleton, Venue } from "../venue";
import { Status } from "../status";
import { PreviewUniverse } from "app/preview-universe";
import { PreviewVenue } from "app/preview-venue";
import { DMXChannelUpdateData } from "app/dashboard-universe/dashboard-universe.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService, OSCListenerService, SACNTransmitterService, EnttecProTransmitterService, SolversLiveService, VenueService]
})
export class DashboardComponent implements OnInit
{
    public statuses: Map<string, Status>;
    private venue: PreviewVenue;

    public activeSection: string;

    constructor(private dashboardService: DashboardService, private solversLiveService: SolversLiveService, private venueService: VenueService,
        private sacnTransmitterService: SACNTransmitterService, private notificationsService: NotificationsService, titleService: Title)
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
        this.activeSection = "Venue";
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            await this.dashboardService.subscribe(this);
            this.dashboardService.init();
            await this.sacnTransmitterService.subscribe(this);
            await this.solversLiveService.subscribe(this);
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }
    }

    public async updateStatus(statusData: StatusData): Promise<void>
    {
        let panelStatus = this.statuses.get(statusData.controller);
        let statusCode = StatusCode[statusData.code as string]
        panelStatus.statusCode = statusCode;
        panelStatus.body = statusData.message;

        if (statusData.controller == "Venues")
        {
            this.venue = await this.venueService.getActive();
        }
    }

    public updateDMX(data: UniverseUpdateData): void
    {
        if (this.venue != null)
        {
            let universe = this.venue.universes.find(x => x.universeID == data.universeID);
            if (universe != null)
            {
                universe.values = data.values;
            }
        }
    }

    public updateAttributes(data: UniverseData): void
    {
        if (this.venue != null)
        {
            let localUniverse = this.venue.universes.find(x => x.universeID == data.universeID);
            for (let remoteFixture of data.fixtures)
            {
                let localFixture = localUniverse.fixtures.find(x => x.id == remoteFixture.id);
                for (let remoteAttribute of remoteFixture.attributes)
                {
                    let localAttribute = localFixture.channelNameMap.get(remoteAttribute.name);
                    localAttribute.value = remoteAttribute.value;
                }
            }
        }
    }

    public updateChannel(data: DMXChannelUpdateData): void
    {
        this.sacnTransmitterService.set(data.universeID, data.address, data.value);
    }

    public updateAttribute(data: AttributeUpdateMessage): void
    {
        this.solversLiveService.set(data.fixtureID, data.attributeName, data.attributeValue);
    }
}