import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { StatusCode } from "../status-code.enum";
import { AsyncFileReader } from "../async-file-reader";
import { VenueService } from "api/services";
import { VenueSkeleton, Venue } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar, MatDialog, MatSort } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'app/delete-confirm-dialog/delete-confirm-dialog.component';
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-venues',
    templateUrl: './venues.component.html',
    styleUrls: ['./venues.component.css'],
    providers: [VenueService],
    animations: [AnimationLibrary.animations()]
})
export class VenuesComponent implements OnInit
{
    venues: VenueSkeleton[];

    private filter: string = "";

    public loading: boolean;

    constructor(private venueService: VenueService, private snackbar: MatSnackBar, title: Title, private dialog: MatDialog)
    {
        title.setTitle("Venues");
        this.venues = [];
        this.loading = true;
    }

    ngOnInit(): void
    {
        this.venueService.getVenues()
            .toPromise()
            .then(response => 
            {
                response.forEach(value => this.venues.push(value));
                this.venues.sort((a, b) => a.name.localeCompare(b.name));
                this.loading = false;
            }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
    }

    private deleteConfirm(venue: VenueSkeleton): void
    {
        this.dialog.open(DeleteConfirmDialogComponent, { data: venue.name }).afterClosed().subscribe(async value =>
        {
            if (value)
            {
                try 
                {
                    await this.venueService.deleteVenue(venue.id).toPromise();
                    let index = this.venues.indexOf(venue);
                    this.venues.splice(index, 1);
                    this.snackbar.open(venue.name + " successfully removed", "Close", { duration: 3000 });
                }
                catch (error)
                {
                    this.snackbar.open(error, "Close", { duration: 3000 });
                }
            }
        });
    }

    public applyFilter(filterValue: string): void
    {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.filter = filterValue;
    }

    public get filteredData(): VenueSkeleton[]
    {
        let filtered = this.venues.filter((value: VenueSkeleton) =>
        {
            if (this.filter != "")
            {
                return value.name.toLowerCase().indexOf(this.filter) != -1;
            }
            else return true;
        });
        return filtered;
    }

    public upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    public async uploadFiles(files: File[]): Promise<void>
    {
        for (let file of files)
        {
            await this.uploadFile(file);
        }
    }

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let venue = await AsyncFileReader.read<Venue>(file);
            venue.id = (await this.venueService.uploadVenue(venue).toPromise());
            this.venues.push(venue);
            this.snackbar.open("Successfully added " + venue.name, "Close", { duration: 3000 });
        }
        catch (reason)
        {
            this.snackbar.open(reason.message, "Close", { duration: 3000 });
        }
    }

}
