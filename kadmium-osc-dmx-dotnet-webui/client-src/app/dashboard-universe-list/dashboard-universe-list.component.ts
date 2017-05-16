import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { VenueService } from "app/venue.service";
import { NotificationsService } from "app/notifications.service";
import { Venue, Universe } from "app/venue";
import { StatusCode } from "app/status-code.enum";
import { PreviewUniverse } from "app/preview-universe";
import { PreviewVenue } from "app/preview-venue";

@Component({
    selector: 'app-dashboard-universe-list',
    templateUrl: './dashboard-universe-list.component.html',
    styleUrls: ['./dashboard-universe-list.component.css'],
    providers: [VenueService]
})
export class DashboardUniverseListComponent implements OnInit
{
    @Input() venue: PreviewVenue;

    constructor(private notificationsService: NotificationsService) 
    {

    }

    ngOnInit(): void
    { }


    selectUniverse(universe: PreviewUniverse): void
    {
        this.venue.activeUniverse = universe;
    }

}
