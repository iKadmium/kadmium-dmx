import { Component, ViewContainerRef, OnInit } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { VenueSkeleton, Venue } from "./venue";

import { VenueService } from "./venue.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";
import { Title } from "@angular/platform-browser";

import { AsyncFileReader } from "../../shared/async-file-reader";

@Component({
    selector: 'venues',
    template: require('./venues.component.html'),
    providers: [VenueService]
})
export class VenuesComponent implements OnInit
{
    venues: VenueSkeleton[];

    constructor(private venueService: VenueService, private messageBarService: MessageBarService, overlay: Overlay, vcRef: ViewContainerRef, private modal: Modal, title: Title)
    {
        title.setTitle("Venues");
        overlay.defaultViewContainer = vcRef;
        this.venues = [];
    }

    ngOnInit(): void
    {
        this.venueService
            .getSkeletons()
            .then((value: VenueSkeleton[]) => this.venues = value)
            .catch((reason) => this.messageBarService);
    }

    private getEditUrl(entry: VenueSkeleton)
    {
        return "venues/" + entry.id;
    }

    private getDownloadUrl(entry: VenueSkeleton)
    {
        return "/api/Venue/Download/" + entry.id;
    }

    private async deleteConfirm(index: number): Promise<void>
    {
        let venue = this.venues[index];
        let promise = await this.modal
            .confirm()
            .title("Are you sure?")
            .body("Are you sure you want to delete " + venue.name + "?")
            .isBlocking(true)
            .okBtnClass("btn btn-danger")
            .okBtn("Delete")
            .open();

        try
        {
            let result = await promise.result;
            if (result)
            {
                try 
                {
                    await this.venueService.delete(venue.id);
                    this.venues.splice(index, 1);
                    this.messageBarService.add("Success", venue.name + " successfully removed");
                }
                catch (error)
                {
                    this.messageBarService.add("Error", error);
                }
            }
        }
        catch (error)
        {
            //errors are generated when the message box is cancelled
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
            this.messageBarService.add("Success", "Successfully added " + venue.name);
        }
        catch (reason)
        {
            this.messageBarService.add("Error", reason);
        }
    }
}