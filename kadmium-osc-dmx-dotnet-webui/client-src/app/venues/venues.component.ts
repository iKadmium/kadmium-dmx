import { Component, OnInit } from '@angular/core';
import { VenueSkeleton, Venue } from "../venue";
import { VenueService } from "../venue.service";
import { Title } from "@angular/platform-browser";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { AsyncFileReader } from "../async-file-reader";

@Component({
    selector: 'app-venues',
    templateUrl: './venues.component.html',
    styleUrls: ['./venues.component.css'],
    providers: [VenueService]
})
export class VenuesComponent implements OnInit
{
    venues: VenueSkeleton[];

    constructor(private venueService: VenueService, private notificationsService: NotificationsService, title: Title)
    {
        title.setTitle("Venues");
        this.venues = [];
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            this.venues = await this.venueService.getSkeletons();
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

    private async deleteConfirm(index: number): Promise<void>
    {
        let venue = this.venues[index];
        if (window.confirm("Are you sure you want to delete " + venue.name + "?"))
        {
            try 
            {
                await this.venueService.delete(venue.id);
                this.venues.splice(index, 1);
                this.notificationsService.add(StatusCode.Success, venue.name + " successfully removed");
            }
            catch (error)
            {
                this.notificationsService.add(StatusCode.Error, error);
            }
        }
    }

    private upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    private async uploadFiles(files: File[]): Promise<void>
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
            venue.id = await this.venueService.post(venue);
            this.venues.push(venue);
            this.notificationsService.add(StatusCode.Success, "Successfully added " + venue.name);
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

}
