import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { StatusCode } from "../status-code.enum";
import { AsyncFileReader } from "../async-file-reader";
import { VenueService } from "api/services";
import { VenueSkeleton, Venue } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-venues',
    templateUrl: './venues.component.html',
    styleUrls: ['./venues.component.css'],
    providers: [VenueService]
})
export class VenuesComponent implements OnInit
{
    venues: VenueSkeleton[];
    public displayedColumns = ['name', 'actions'];
    public dataSource: MatTableDataSource<VenueSkeleton>;

    constructor(private venueService: VenueService, private snackbar: MatSnackBar, title: Title)
    {
        title.setTitle("Venues");
        this.venues = [];
        this.dataSource = new MatTableDataSource(this.venues);
    }

    ngOnInit(): void
    {
        this.venueService.getVenues().then(response => 
        {
            response.data.forEach(venue => this.venues.push(venue));
            this.updateDataSource();
        }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
    }

    public updateDataSource(): void
    {
        this.dataSource._updateChangeSubscription();
    }

    private async deleteConfirm(index: number): Promise<void>
    {
        let venue = this.venues[index];
        if (window.confirm("Are you sure you want to delete " + venue.name + "?"))
        {
            try 
            {
                await this.venueService.deleteVenue(venue.id);
                this.venues.splice(index, 1);
                this.snackbar.open(venue.name + " successfully removed", "Close", { duration: 3000 });
            }
            catch (error)
            {
                this.snackbar.open(error, "Close", { duration: 3000 });
            }
        }
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
            venue.id = (await this.venueService.postVenue(venue)).data;
            this.venues.push(venue);
            this.snackbar.open("Successfully added " + venue.name, "Close", { duration: 3000 });
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
        }
    }

}
