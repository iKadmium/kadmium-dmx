import { Component, OnInit, Inject } from '@angular/core';
import { VenueService } from "api/services";
import { VenueSkeleton } from "api/models";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-dashboard-venue-venue-load-dialog',
    templateUrl: './dashboard-venue-venue-load-dialog.component.html',
    styleUrls: ['./dashboard-venue-venue-load-dialog.component.css'],
    providers: [VenueService]
})
export class DashboardVenueVenueLoadDialogComponent implements OnInit
{
    public venues: VenueSkeleton[];

    constructor(private venueService: VenueService, private snackbar: MatSnackBar,
        public dialogRef: MatDialogRef<DashboardVenueVenueLoadDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any)
    { }

    ngOnInit()
    {
        this.venueService.getVenues().then(response => 
        {
            this.venues = response.data;
        }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
    }

    public cancel(): void
    {
        this.dialogRef.close();
    }

}
