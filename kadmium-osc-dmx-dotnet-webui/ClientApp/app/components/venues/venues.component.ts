import { Component, ViewContainerRef } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { VenueService } from "./venue.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'venues',
    template: require('./venues.component.html'),
    providers: [VenueService]
})
export class VenuesComponent
{
    venues: VenueSkeleton[];

    constructor(private venueService: VenueService, private messageBarService: MessageBarService, overlay: Overlay, vcRef: ViewContainerRef, private modal: Modal, title: Title)
    {
        title.setTitle("Venues");
        overlay.defaultViewContainer = vcRef;
        this.venueService
            .getNames()
            .then((value: string[]) => this.venues = value.map(value =>
            {
                let skeleton = new VenueSkeleton();
                skeleton.name = value;
                return skeleton;
            }))
            .catch((reason) => this.messageBarService);
    }

    private getEditUrl(entry: VenueSkeleton)
    {
        return "venues/" + entry.name;
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
                    await this.venueService.delete(venue.name);
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
}

class VenueSkeleton
{
    name: string;
}