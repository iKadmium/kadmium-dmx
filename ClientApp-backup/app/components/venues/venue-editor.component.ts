import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { UniverseEditorComponent } from "./universe-editor.component";
import { FixtureOptionsEditorComponent } from "./fixture-options-editor.component";
import { InputBoxComponent } from "../input-box/input-box.component";

import { Venue, Universe, Fixture } from "./venue";

import { VenueService } from "./venue.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";

@Component({
    selector: 'venue-editor',
    template: require('./venue-editor.component.html'),
    providers: [VenueService]
})
export class VenueEditorComponent
{
    @ViewChild("universeEditor") universeEditor: UniverseEditorComponent;
    @ViewChild("inputBox") inputBox: InputBoxComponent;
    @ViewChild("fixtureOptionsEditor") fixtureOptionsEditor: FixtureOptionsEditorComponent;

    private venueId: number | null;
    private saving: boolean;

    private venue: Venue;

    private selectedUniverse: Universe;

    constructor(private route: ActivatedRoute, private venueService: VenueService, private messageBarService: MessageBarService)
    {
        this.saving = false;
    }

    ngOnInit(): void
    {
        this.venueId = this.route.snapshot.params['id'];
        if (this.isNewItem())
        {
            this.venue = new Venue();
            let universe = new Universe();
            universe.name = "Default Universe";
            this.venue.universes.push(universe);
            this.selectedUniverse = universe;
        }
        else
        {
            this.venueService
                .get(this.venueId)
                .then((value: Venue) =>
                {
                    this.venue = value;
                    this.selectedUniverse = this.venue.universes.length > 0 ? this.venue.universes[0] : null;
                })
                .catch((reason) => this.messageBarService.addError(reason));
        }
    }

    private isNewItem(): boolean
    {
        return this.venueId == null;
    }

    private addUniverse(): void
    {
        let universe = new Universe();
        universe.name = "New Universe";
        let maxNumber = 0;
        this.venue.universes.forEach(value => { if (value.universeID > maxNumber) { maxNumber = value.universeID } });
        universe.universeID = maxNumber + 1;
        this.venue.universes.push(universe);
    }

    private removeUniverse(index: number): void
    {
        let universe = this.venue.universes[index];
        this.venue.universes.splice(index, 1);
        if (this.selectedUniverse == universe)
        {
            this.selectedUniverse = this.venue.universes[index - 1];
        }
    }

    private async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem())
            {
                await this.venueService.post(this.venue);
            }
            else
            {
                await this.venueService.put(this.venue.id, this.venue);
            }
            
            window.location.href = "/venues";
        }
        catch (error)
        {
            this.messageBarService.addError(error);
        }
        finally
        {
            this.saving = false;
        }
    }

}