import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { VenueSkeleton, Venue } from "app/venue";
import { VenueService } from "app/venue.service";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { Status } from "app/status";
import { SolversLiveService, UniverseData } from "app/solvers-live.service";
import { PreviewVenue } from "app/preview-venue";

@Component({
    selector: 'app-dashboard-venue',
    templateUrl: './dashboard-venue.component.html',
    styleUrls: ['./dashboard-venue.component.css'],
    providers: [VenueService, SolversLiveService]
})
export class DashboardVenueComponent implements OnInit
{
    @Input() venue: PreviewVenue;
    @Output() navigate = new EventEmitter<string>();

    constructor(private notificationsService: NotificationsService)
    { }

    ngOnInit(): void
    {

    }

    public get universeCount(): number
    {
        if (this.venue == null) { return 0 };

        return this.venue.universes.length;
    }

    public get fixtureCount(): number
    {
        if (this.venue == null) { return 0 };

        let sum = 0;
        for (let universe of this.venue.universes)
        {
            sum += universe.fixtures.length;
        }
        return sum;
    }

    public get dmxChannelCount(): number
    {
        if (this.venue == null) { return 0 };

        let sum = 0;
        for (let universe of this.venue.universes)
        {
            for (let fixture of universe.fixtures)
            {
                sum += fixture.channelNumberMap.size;
            }
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

    public navigateTo(area: string): void
    {
        this.navigate.emit(area);
    }

}
