import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { APIClient } from "api/api-client.service";
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { AnimationLibrary } from "../animation-library";
import { MessageService } from 'app/message.service';
import { FileReaderService } from '../file-reader.service';
import { IVenueData } from 'api';

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

    constructor(
        private apiClient: APIClient,
        private messageService: MessageService,
        title: Title,
        private fileReader: FileReaderService,
        private dialog: MatDialog)
    {
        title.setTitle("Venues");
        this.venues = [];
        this.loading = true;
    }

    ngOnInit(): void
    {
        this.apiClient.getVenues()
            .toPromise()
            .then(response => 
            {
                this.venues = response;
                this.venues.sort();
                this.loading = false;
            }).catch(error => this.messageService.error(error));
    }

    private deleteConfirm(venueName: string): void
    {
        this.dialog.open(DeleteConfirmDialogComponent, { data: venueName }).afterClosed().subscribe(async value =>
        {
            if (value)
            {
                try 
                {
                    await this.apiClient.deleteVenue({ name: venueName }).toPromise();
                    let index = this.venues.indexOf(venueName);
                    this.venues.splice(index, 1);
                    this.messageService.info(venueName + " successfully removed");
                }
                catch (error)
                {
                    this.messageService.error(error);
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
            let venue = await this.fileReader.read<IVenueData>(file);
            await this.apiClient.postVenue({ value: venue }).toPromise();
            this.venues.push(venue.name);
            this.messageService.info("Successfully added " + venue.name);
        }
        catch (reason)
        {
            this.messageService.error(reason.message);
        }
    }

}
