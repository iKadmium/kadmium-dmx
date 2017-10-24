import { Component, OnInit, ViewChild, OnDestroy, ContentChild } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { TogglableService, Togglable } from "../togglable-service";
import { SACNTransmitterService, UniverseUpdateData } from "../sacn-transmitter.service";
import { SolversLiveService, UniverseData, AttributeUpdateMessage } from "../solvers-live.service";
import { EnttecProTransmitterService } from "../enttec-pro-transmitter.service";
import { OSCListenerService, OSCListenerData } from "../osclistener.service";
import { VenueService } from "../venue.service";
import { DashboardService, StatusData } from "../dashboard.service";
import { NotificationsService } from "../notifications.service";

import { StatusCode } from "../status-code.enum";
import { VenueSkeleton, Venue } from "../venue";
import { Status } from "../status";
import { PreviewUniverse } from "app/preview-universe";
import { PreviewVenue } from "app/preview-venue";
import { DMXChannelUpdateData } from "app/dashboard-universe/dashboard-universe.component";
import { DashboardOSCListenerComponent } from "app/dashboard-osc-listener/dashboard-osc-listener.component";
import { DashboardFixtureListComponent } from "app/dashboard-fixture-list/dashboard-fixture-list.component";
import { DashboardFixturePreviewComponent } from "app/dashboard-fixture-preview/dashboard-fixture-preview.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService, OSCListenerService, SACNTransmitterService, EnttecProTransmitterService, SolversLiveService, VenueService]
})
export class DashboardComponent implements OnInit, OnDestroy
{
    @ViewChild(DashboardFixtureListComponent) public fixturesComponent: DashboardFixtureListComponent;
    public statuses: Map<string, Status>;
    private venue: PreviewVenue;

    public activeSection: string;

    public unrecognisedOSCMessages: string[];
    public recognisedOSCMessages: string[];

    private attributesBusy: boolean;
    private renderThreadBusy: boolean;

    private renderTimer: number;

    constructor(private dashboardService: DashboardService, private solversLiveService: SolversLiveService, private venueService: VenueService,
        private sacnTransmitterService: SACNTransmitterService, private oscListenerService: OSCListenerService, private notificationsService: NotificationsService, titleService: Title)
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
        this.recognisedOSCMessages = [];
        this.unrecognisedOSCMessages = [];
        this.attributesBusy = false;
        this.renderThreadBusy = false;
    }

    async ngOnInit(): Promise<void>
    {
        var that = this;
        this.renderTimer = window.setInterval(async t =>
        {
            let bob = 1;
            bob = bob + 2;
            await that.render();
        }, DashboardFixturePreviewComponent.updateTime);
        try
        {
            await this.dashboardService.subscribe(this);
            this.dashboardService.init();
        } catch (error) { this.notificationsService.add(StatusCode.Error, error); }
        try { await this.sacnTransmitterService.subscribe(this); } catch (error) { this.notificationsService.add(StatusCode.Error, error) };
        try { await this.oscListenerService.subscribe(this) } catch (error) { this.notificationsService.add(StatusCode.Error, error) };
        try { await this.solversLiveService.subscribe(this) } catch (error) { this.notificationsService.add(StatusCode.Error, error) };
    }

    ngOnDestroy(): void
    {
        this.sacnTransmitterService.unsubscribe(this);
        this.oscListenerService.unsubscribe(this);
        this.solversLiveService.unsubscribe(this);
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

    public async updateDMX(data: UniverseUpdateData): Promise<void>
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

    public async render(): Promise<void>
    {
        if (!this.renderThreadBusy && this.activeSection == "Fixture")
        {
            this.renderThreadBusy = true;
            await this.fixturesComponent.render();
            this.renderThreadBusy = false;
        }
    }

    public updateAttributes(data: UniverseData): void
    {
        if (this.venue != null && this.activeSection == "Fixture" && !this.attributesBusy)
        {
            this.attributesBusy = true;
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
            this.attributesBusy = false;
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

    public addMessage(data: OSCListenerData): void
    {
        if (this.activeSection == "OSC")
        {
            let str = data.address + " " + data.value;
            let array = data.recognised ? this.recognisedOSCMessages : this.unrecognisedOSCMessages;
            array.push(str);
            if (array.length > DashboardOSCListenerComponent.MAX_LENGTH)
            {
                let tooLongAmount = array.length - DashboardOSCListenerComponent.MAX_LENGTH;
                array.splice(0, tooLongAmount);
            }
        }
    }
}