import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StatusCode } from "app/status-code.enum";
import { Status } from "app/status";
import { PreviewVenue } from "app/preview-venue";
import { VenueService } from "api/services";
import { PreviewUniverse } from "app/preview-universe";
import { MatSnackBar, MatDialog } from '@angular/material';
import { VenueSkeleton } from 'api/models/venue-skeleton';
import { Sleep } from "app/sleep";
import { AnimationLibrary } from "app/animation-library";
import { Venue, Universe } from "api/models";
import { VenueNameDialogComponent } from "app/venue-name-dialog/venue-name-dialog.component";

@Component({
    selector: 'app-dashboard-venue',
    templateUrl: './dashboard-venue.component.html',
    styleUrls: ['./dashboard-venue.component.css'],
    providers: [VenueService],
    animations: [AnimationLibrary.animations()]
})
export class DashboardVenueComponent implements OnInit
{
    @Input() status: Status;
    public venue: PreviewVenue;
    public venueSkeletons: VenueSkeleton[];

    public loading: boolean;

    constructor(private snackbar: MatSnackBar, private venueService: VenueService, private dialog: MatDialog)
    {
        this.loading = true;
    }

    ngOnInit(): void
    {
        this.refreshVenue();
        this.venueService.getVenues()
            .toPromise()
            .then(response => 
            {
                this.venueSkeletons = response;
                this.loading = false;
            }).catch(reason => this.snackbar.open(reason, "Close", { duration: 3000 }));
    }

    public async refreshVenue(): Promise<void>
    {
        try
        {
            let response = await this.venueService.getActiveVenue().toPromise();
            this.venue = new PreviewVenue().load(response);
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
        }
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

    public async loadVenue(id: number): Promise<void>
    {
        this.loading = true;
        this.venue = null;
        try
        {
            await this.venueService.activateVenueById(id).toPromise();
            await this.refreshVenue();
        }
        catch (error)
        {
            console.error(error);
        }
        this.loading = false;
    }

    public newVenue(): void
    {
        let dialogRef = this.dialog.open(VenueNameDialogComponent);
        dialogRef.afterClosed().subscribe(async next =>
        {
            if (next != null)
            {
                let universe: Universe = {
                    fixtures: [],
                    name: "New Universe",
                    universeID: 1
                };
                let venue: Venue = {
                    name: next,
                    universes: [universe]
                };
                let response = await this.venueService.postVenue(venue).toPromise();
                this.snackbar.open(venue.name + " successfully created", "Close", { duration: 3000 });
                venue.id = response;
                this.loadVenue(venue.id);
            }
        });
    }

}
