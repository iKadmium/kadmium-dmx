import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UniverseEditorComponent } from "../universe-editor/universe-editor.component";
import { FixtureOptionsEditorComponent } from "../fixture-options-editor/fixture-options-editor.component";
import { StatusCode } from "../status-code.enum";
import { GroupService, VenueService } from "api/services";
import { Group, Venue, Universe } from "api/models";
import { Title } from "@angular/platform-browser";
import { MatTabGroup } from "@angular/material/tabs";
import { MatTabChangeEvent, MatTab, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-venue-editor',
    templateUrl: './venue-editor.component.html',
    styleUrls: ['./venue-editor.component.css'],
    providers: [VenueService, GroupService],
    animations: [AnimationLibrary.animations()]
})
export class VenueEditorComponent implements OnInit
{
    @ViewChild("universeEditor") universeEditor: UniverseEditorComponent;
    @ViewChild("fixtureOptionsEditor") fixtureOptionsEditor: FixtureOptionsEditorComponent;
    @ViewChild("universeTabs") universeTabs: MatTabGroup;
    @ViewChild("addUniverseTab") addUniverseTab: MatTab;

    @ViewChild("editorForm") form: NgForm;

    private venueId: number | null;
    public loading: boolean;
    public saving: boolean;
    private groups: Group[];

    public venue: Venue;

    public activeUniverse: Universe;

    constructor(private route: ActivatedRoute, private venueService: VenueService, private snackbar: MatSnackBar,
        private groupService: GroupService, private router: Router, private title: Title)
    {
        this.saving = false;
        this.loading = true;
    }

    ngOnInit(): void
    {
        this.venueId = this.route.snapshot.params['id'];
        this.title.setTitle("Venue Editor");
        this.groupService.getGroups().then(response =>
        {
            this.groups = response.data;

            if (this.isNewItem())
            {
                this.venue = new Venue();
                this.venue.universes = [this.createUniverse("New Universe", 1)];
                this.loading = false;
            }
            else
            {
                this.venueService.getVenueById(this.venueId).then(response => 
                {
                    this.venue = response.data;
                    this.loading = false;
                }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
            }
        });
    }

    public tabChanged(event: MatTabChangeEvent): void
    {
        if (event.tab == this.addUniverseTab)
        {
            this.addUniverse();
        }
    }

    public addUniverseTabClicked(): void
    {
        if (this.universeTabs._tabs.length == 1)
        {
            this.addUniverse();
        }
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
        if (index <= this.universeTabs.selectedIndex)
        {
            this.universeTabs.selectedIndex--;
        }
    }

    private async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem())
            {
                await this.venueService.postVenue(this.venue);
                this.snackbar.open("Successfully added " + this.venue.name, "Close", { duration: 3000 });
            }
            else
            {
                await this.venueService.putVenue({ id: this.venue.id, venue: this.venue });
                this.snackbar.open("Successfully edited " + this.venue.name, "Close", { duration: 3000 });
            }
            this.router.navigate(["../", { relativeTo: this.route }]);
        }
        catch (error)
        {
            this.snackbar.open(error, "Close", { duration: 3000 });
        }
        finally
        {
            this.saving = false;
        }
    }

}
