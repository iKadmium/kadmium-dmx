import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { VenueService } from "api/services";
import { VenueSkeleton } from "api/models";

@Component({
    selector: 'app-dashboard-venue-list',
    templateUrl: './dashboard-venue-list.component.html',
    styleUrls: ['./dashboard-venue-list.component.css'],
    providers: [VenueService]
})
export class DashboardVenueListComponent implements OnInit
{
    public venues: VenueSkeleton[];
    public selectedVenue: VenueSkeleton;

    public venueListIsCollapsed: boolean;

    @Output() venueLoaded = new EventEmitter();

    constructor(private venueService: VenueService, private notificationsService: NotificationsService)
    {
        this.venueListIsCollapsed = true;
    }

    async ngOnInit(): Promise<void>
    {
        this.venues = (await this.venueService.getVenues()).data;
    }

    public async loadVenue(venueSkeleton: VenueSkeleton): Promise<void>
    {
        try
        {
            await this.venueService.activateVenueById(venueSkeleton.id)
            this.notificationsService.add(StatusCode.Success, venueSkeleton.name + " successfully loaded")
            this.venueLoaded.emit();
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

}
