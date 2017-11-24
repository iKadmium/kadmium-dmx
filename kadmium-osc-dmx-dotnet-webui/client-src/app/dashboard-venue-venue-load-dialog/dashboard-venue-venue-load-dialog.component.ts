import { Component, OnInit, Inject } from '@angular/core';
import { VenueService } from "api/services";
import { NotificationsService } from "app/notifications.service";
import { VenueSkeleton } from "api/models";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-dashboard-venue-venue-load-dialog',
    templateUrl: './dashboard-venue-venue-load-dialog.component.html',
    styleUrls: ['./dashboard-venue-venue-load-dialog.component.css'],
    providers: [VenueService]
})
export class DashboardVenueVenueLoadDialogComponent implements OnInit
{
    public venues: VenueSkeleton[];

    constructor(private venueService: VenueService, private notificationsService: NotificationsService,
        public dialogRef: MatDialogRef<DashboardVenueVenueLoadDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any)
    { }

    ngOnInit()
    {
        this.venueService.getVenues().then(response => 
        {
            this.venues = response.data;
        });
    }

    public cancel(): void
    {
        this.dialogRef.close();
    }

}
