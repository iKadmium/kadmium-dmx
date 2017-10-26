import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { Status } from "app/status";
import { PreviewVenue } from "app/preview-venue";
import { VenueService } from "api/services";
import { PreviewUniverse } from "app/preview-universe";

@Component({
    selector: 'app-dashboard-venue',
    templateUrl: './dashboard-venue.component.html',
    styleUrls: ['./dashboard-venue.component.css'],
    providers: [VenueService]
})
export class DashboardVenueComponent implements OnInit
{
    public venue: PreviewVenue;

    constructor(private notificationsService: NotificationsService, private venueService: VenueService)
    {

    }

    ngOnInit(): void
    {
        this.refreshVenue();
    }

    public refreshVenue(): void
    {
        this.venueService.getActiveVenue()
            .then(response =>
            {
                this.venue = new PreviewVenue().load(response.data);
            })
            .catch(reason => 
            {
                this.notificationsService.add(StatusCode.Error, reason);
            });
    }

    public get universeCount(): number
    {
        if (this.venue == null) { return 0 };

        return this.venue.universes.length;
    }

    public getFixtureCount(universe: PreviewUniverse): number
    {
        return universe.fixtures.length;
    }

    public getDMXChannelCount(universe: PreviewUniverse): number
    {
        if (this.venue == null) { return 0 };

        let sum = 0;
        for (let fixture of universe.fixtures)
        {
            sum += fixture.channelNumberMap.size;
        }

        return sum;
    }

    public get solverAttributeCount(): number
    {
        if (this.venue == null) { return 0 };

        let sum = 0;
        for (let universe of this.venue.universes)
        {
            for (let fixture of universe.fixtures)
            {
                let attributes = Array.from(fixture.channelNameMap.values());
                sum += attributes.filter(x => !x.dmx).length
            }
        }

        return sum;
    }

}
