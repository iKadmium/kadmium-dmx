import { Component, OnInit, Input } from '@angular/core';
import { Status } from "../status";
import { PreviewVenue } from "../preview-venue";
import { PreviewUniverse } from "../preview-universe";
import { MatDialog } from '@angular/material';
import { AnimationLibrary } from "../animation-library";
import { UniverseData } from "api/models";
import { VenueNameDialogComponent } from "../venue-name-dialog/venue-name-dialog.component";
import { APIClient, IVenueData } from 'api';
import { MessageService } from 'app/message.service';

@Component({
    selector: 'app-dashboard-venue',
    templateUrl: './dashboard-venue.component.html',
    styleUrls: ['./dashboard-venue.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class DashboardVenueComponent implements OnInit
{
    @Input() status: Status;
    public venue: PreviewVenue;
    public venueSkeletons: string[];

    public loading: boolean;

    constructor(private messageService: MessageService, private apiClient: APIClient, private dialog: MatDialog)
    {
        this.loading = true;
    }

    ngOnInit(): void
    {
        this.refreshVenue();
        try
        {
            this.apiClient.getVenues()
                .toPromise()
                .then(response => 
                {
                    this.venueSkeletons = response;
                    this.loading = false;
                });
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    public async refreshVenue(): Promise<void>
    {
        try
        {
            let response = await this.apiClient.getActiveVenue().toPromise();
            this.venue = new PreviewVenue().load(response);
        }
        catch (reason)
        {
            this.messageService.error(reason);
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

    public async loadVenue(name: string): Promise<void>
    {
        this.loading = true;
        this.venue = null;
        try
        {
            await this.apiClient.activateVenue({ name: name }).toPromise();
            await this.refreshVenue();
        }
        catch (error)
        {
            this.messageService.error(error);
        }
        this.loading = false;
    }

    public async newVenue(): Promise<void>
    {
        let dialogRef = this.dialog.open(VenueNameDialogComponent);
        let next = await dialogRef.afterClosed().toPromise();

        if (next != null)
        {
            let universe: UniverseData = {
                fixtures: [],
                name: "New Universe",
                universeID: 1
            };
            let venue: IVenueData = {
                id: "",
                name: next,
                universes: [universe]
            };
            try
            {
                await this.apiClient.postVenue({ value: venue });
                this.messageService.info(venue.name + " successfully created");
                await this.loadVenue(venue.name);
            }
            catch (error)
            {
                this.messageService.error(error);
            }
        }
    }

}
