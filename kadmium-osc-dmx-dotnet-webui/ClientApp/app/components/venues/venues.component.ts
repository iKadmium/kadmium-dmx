import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { VenueService } from "./venue.service";

@Component({
    selector: 'venues',
    template: require('./venues.component.html'),
    providers: [VenueService]
})
export class VenuesComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    venues: VenueSkeleton[];

    constructor(private venueService: VenueService, overlay: Overlay, vcRef: ViewContainerRef, private modal: Modal)
    {
        overlay.defaultViewContainer = vcRef;
        this.venueService
            .getNames()
            .then((value: string[]) => this.venues = value.map(value => {
                let skeleton = new VenueSkeleton();
                skeleton.name = value;
                return skeleton;
            }))
            .catch((reason) => this.messageBar);
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
                    this.messageBar.add("Success", venue.name + " successfully removed");
                }
                catch (error)
                {
                    this.messageBar.add("Error", error);
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