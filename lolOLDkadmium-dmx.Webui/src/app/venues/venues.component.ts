import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { StatusCode } from "../status-code.enum";
import { AsyncFileReader } from "../async-file-reader";
import { APIClient } from "api/api-client.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar, MatDialog, MatSort } from '@angular/material';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { AnimationLibrary } from "../animation-library";
import { VenueData } from 'api/models/venue-data.model';

@Component({
    selector: 'app-venues',
    templateUrl: './venues.component.html',
    styleUrls: ['./venues.component.css'],
    providers: [APIClient],
    animations: [AnimationLibrary.animations()]
})
export class VenuesComponent implements OnInit
{
    venues: string[];

    private filter: string = "";

    public loading: boolean;

    constructor(private apiService: APIClient, private snackbar: MatSnackBar, title: Title, private dialog: MatDialog)
    {
        title.setTitle("Venues");
        this.venues = [];
        this.loading = true;
    }

    ngOnInit(): void
    {
        this.apiService.getVenues()
            .toPromise()
            .then(response => 
            {
                this.venues = response;
                this.venues.sort();
                this.loading = false;
            }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
    }

    private deleteConfirm(venueName: string): void
    {
        this.dialog.open(DeleteConfirmDialogComponent, { data: venueName }).afterClosed().subscribe(async value =>
        {
            if (value)
            {
                try 
                {
                    await this.apiService.deleteVenue({ name: venueName }).toPromise();
                    let index = this.venues.indexOf(venueName);
                    this.venues.splice(index, 1);
                    this.snackbar.open(venueName + " successfully removed", "Close", { duration: 3000 });
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

    public get filteredData(): string[]
    {
        let filtered = this.venues.filter((value: string) =>
        {
            if (this.filter != "")
            {
                return value.toLowerCase().indexOf(this.filter) != -1;
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
            let venue = await AsyncFileReader.read<VenueData>(file);
            venue.id = "";
            await this.apiService.postVenue({ value: venue }).toPromise();
            this.venues.push(venue.name);
            this.snackbar.open("Successfully added " + venue.name, "Close", { duration: 3000 });
        }
        catch (reason)
        {
            this.snackbar.open(reason.message, "Close", { duration: 3000 });
        }
    }

}
