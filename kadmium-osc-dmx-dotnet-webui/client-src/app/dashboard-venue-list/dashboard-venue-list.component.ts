import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VenueService } from "app/venue.service";
import { VenueSkeleton } from "app/venue";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";

@Component({
    selector: 'app-dashboard-venue-list',
    templateUrl: './dashboard-venue-list.component.html',
    styleUrls: ['./dashboard-venue-list.component.css'],
    providers: [VenueService]
})
export class DashboardVenueListComponent implements OnInit
{
    @Output() venueLoaded: EventEmitter<void> = new EventEmitter<void>();
    public venues: VenueSkeleton[];
    public selectedVenue: VenueSkeleton;

    constructor(private venueService: VenueService, private notificationsService: NotificationsService)
    { }

    async ngOnInit(): Promise<void>
    {
        this.venues = await this.venueService.getSkeletons();
    }

    public async loadVenue(venueSkeleton: VenueSkeleton): Promise<void>
    {
        try
        {
            await this.venueService.activate(venueSkeleton.id)
            this.venueLoaded.emit();
            this.notificationsService.add(StatusCode.Success, venueSkeleton.name + " successfully loaded")
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

}
