import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { ConfirmationComponent } from "../confirmation/confirmation.component";

import { Venue, Universe, Fixture } from "./venue";

import { VenueService } from "./venue.service";

@Component({
    selector: 'venue-editor',
    template: require('./venue-editor.component.html'),
    providers: [VenueService]
})
export class VenueEditorComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    @ViewChild("confirmation") confirmation: ConfirmationComponent;

    private originalName: string;
    private saving: boolean;

    private venue: Venue;

    constructor(private route: ActivatedRoute, private venueService: VenueService)
    {
        this.saving = false;
    }

    ngOnInit(): void
    {
        this.originalName = this.route.snapshot.params['id'];
        if (this.isNewItem())
        {
            this.venue = new Venue();
        }
        else
        {
            this.venueService
                .get(this.originalName)
                .then((value: Venue) => this.venue = value)
                .catch((reason) => this.messageBar.add("Error", reason));
        }
    }

    private isNewItem(): boolean
    {
        return this.originalName == null;
    }

    private addUniverse(): void
    {
        this.venue.universes.push(new Universe());
    }

    private removeUniverse(index: number): void
    {
        this.venue.universes.splice(index, 1);
    }
}