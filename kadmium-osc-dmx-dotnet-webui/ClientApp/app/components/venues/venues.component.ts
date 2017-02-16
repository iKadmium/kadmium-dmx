import { Component, ViewChild } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { VenueService } from "./venue.service";

@Component({
    selector: 'venues',
    template: require('./venues.component.html'),
    providers: [VenueService]
})
export class VenuesComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    data: string[];

    constructor(private venueService: VenueService)
    {
        this.venueService
            .getNames()
            .then((value: string[]) => this.data = value)
            .catch((reason) => this.messageBar);
    }

    private getEditUrl(entry: VenueSkeleton)
    {
        return "venues/" + entry.name;
    }

    private get venues(): VenueSkeleton[]
    {
        return this.data.map((value: string) => { return { name: value } });
    }
}

class VenueSkeleton
{
    name: string;
}