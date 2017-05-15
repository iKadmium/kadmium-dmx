import { Component, OnInit, Input } from '@angular/core';
import { VenueSkeleton, Venue } from "app/venue";
import { VenueService } from "app/venue.service";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { Status } from "app/status";
import { SolversLiveService, UniverseData } from "app/solvers-live.service";

@Component({
    selector: 'app-dashboard-venue',
    templateUrl: './dashboard-venue.component.html',
    styleUrls: ['./dashboard-venue.component.css'],
    providers: [VenueService, SolversLiveService]
})
export class DashboardVenueComponent implements OnInit
{

    public venue: Venue;
    public universeData: UniverseData[];
    @Input() status: Status;

    constructor(private venueService: VenueService, private notificationsService: NotificationsService, private solversLiveService: SolversLiveService)
    { }

    async ngOnInit(): Promise<void>
    {
        await this.updateVenue();
    }

    public async updateVenue(): Promise<void>
    {
        try
        {
            this.venue = await this.venueService.getActive();
            this.universeData = await this.solversLiveService.get();
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

    public get universeCount(): number
    {
        if (this.universeData == null) { return 0 };

        return this.universeData.length;
    }

    public get fixtureCount(): number
    {
        if (this.universeData == null) { return 0 };

        let sum = 0;
        for (let universe of this.universeData)
        {
            sum += universe.fixtures.length;
        }
        return sum;
    }

    public get dmxChannelCount(): number
    {
        if (this.universeData == null) { return 0 };

        let sum = 0;
        for (let universe of this.universeData)
        {
            for (let fixture of universe.fixtures)
            {
                sum += fixture.attributes.filter(x => x.dmx).length;
            }
        }

        return sum;
    }

    public get solverAttributeCount(): number
    {
        if (this.universeData == null) { return 0 };

        let sum = 0;
        for (let universe of this.universeData)
        {
            for (let fixture of universe.fixtures)
            {
                sum += fixture.attributes.filter(x => !x.dmx).length;
            }
        }

        return sum;
    }

}
