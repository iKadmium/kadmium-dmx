import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UniverseEditorComponent } from "../universe-editor/universe-editor.component";
import { FixtureOptionsEditorComponent } from "../fixture-options-editor/fixture-options-editor.component";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { GroupService, VenueService } from "api/services";
import { Group, Venue, Universe } from "api/models";
import { Title } from "@angular/platform-browser";
import { MatTabGroup } from "@angular/material/tabs";

@Component({
    selector: 'app-venue-editor',
    templateUrl: './venue-editor.component.html',
    styleUrls: ['./venue-editor.component.css'],
    providers: [VenueService, GroupService]
})
export class VenueEditorComponent implements OnInit
{
    @ViewChild("universeEditor") universeEditor: UniverseEditorComponent;
    @ViewChild("fixtureOptionsEditor") fixtureOptionsEditor: FixtureOptionsEditorComponent;
    @ViewChild("universeTabs") universeTabs: MatTabGroup;

    private venueId: number | null;
    private saving: boolean;
    private groups: Group[];

    public venue: Venue;

    public activeUniverse: Universe;

    constructor(private route: ActivatedRoute, private venueService: VenueService, private notificationsService: NotificationsService,
        private groupService: GroupService, private router: Router, private title: Title)
    {
        this.saving = false;
    }

    ngOnInit(): void
    {
        this.venueId = this.route.snapshot.params['id'];

        this.groupService.getGroups().then(response =>
        {
            this.groups = response.data;

            if (this.isNewItem())
            {
                this.venue = new Venue();
                this.venue.universes = [this.createUniverse("DefaultUniverse", 1)];
                this.title.setTitle("Venue Editor - New Venue");
            }
            else
            {
                this.venueService.getVenueById(this.venueId).then(response => 
                {
                    this.venue = response.data;
                    this.title.setTitle("Venue Editor - " + this.venue.name);
                }).catch(reason => this.notificationsService.add(StatusCode.Error, reason));
            }
        });
    }

    private isNewItem(): boolean
    {
        return this.venueId == null;
    }

    private createUniverse(name: string, universeID: number): Universe
    {
        let universe = new Universe();
        universe.name = name;
        universe.fixtures = [];
        universe.universeID = universeID;
        return universe;
    }

    private addUniverse(): void
    {
        let maxNumber = 0;
        this.venue.universes.forEach(value => { if (value.universeID > maxNumber) { maxNumber = value.universeID } });
        let universeID = maxNumber + 1;
        this.venue.universes.push(this.createUniverse("New Universe", universeID));
    }

    private removeUniverse(index: number): void
    {
        let universe = this.venue.universes[index];
        this.venue.universes.splice(index, 1);
    }

    private async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem())
            {
                await this.venueService.postVenue(this.venue);
                this.notificationsService.add(StatusCode.Success, "Successfully added " + this.venue.name);
            }
            else
            {
                await this.venueService.putVenue({ id: this.venue.id, venue: this.venue });
                this.notificationsService.add(StatusCode.Success, "Successfully edited " + this.venue.name);
            }
            this.router.navigate(["../", { relativeTo: this.route }]);
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }
        finally
        {
            this.saving = false;
        }
    }

}
