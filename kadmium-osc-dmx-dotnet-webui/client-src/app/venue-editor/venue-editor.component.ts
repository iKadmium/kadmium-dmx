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
import { EditorComponent } from "app/editor-component/editor-component";

@Component({
    selector: 'app-venue-editor',
    templateUrl: './venue-editor.component.html',
    styleUrls: ['./venue-editor.component.css'],
    providers: [VenueService, GroupService],
    animations: [AnimationLibrary.animations()]
})
export class VenueEditorComponent extends EditorComponent implements OnInit
{
    @ViewChild("universeEditor") universeEditor: UniverseEditorComponent;
    @ViewChild("fixtureOptionsEditor") fixtureOptionsEditor: FixtureOptionsEditorComponent;

    @ViewChild("editorForm") formChild: NgForm;

    private venueId: number | null;
    public loading: boolean;
    public saving: boolean;
    private groups: Group[];

    public venue: Venue;

    public activeUniverse: Universe;

    constructor(private route: ActivatedRoute, private venueService: VenueService, private snackbar: MatSnackBar,
        private groupService: GroupService, private router: Router, private title: Title)
    {
        super();
        this.saving = false;
        this.loading = true;
    }

    ngOnInit(): void
    {
        this.venueId = this.route.snapshot.params['id'];
        this.title.setTitle("Venue Editor");
        this.form = this.formChild;
        this.groupService.getGroups()
            .toPromise()
            .then(response =>
            {
                this.groups = response;

                if (this.isNewItem())
                {
                    this.venue = {
                        universes: [this.createUniverse("New Universe", 1)]
                    };
                    this.loading = false;
                }
                else
                {
                    this.venueService.getVenueById(this.venueId)
                        .toPromise()
                        .then(response => 
                        {
                            this.venue = response;
                            this.loading = false;
                        }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
                }
            });
    }

    private isNewItem(): boolean
    {
        return this.venueId == null;
    }

    private createUniverse(name: string, universeID: number): Universe
    {
        let universe: Universe = {
            name: name,
            fixtures: [],
            universeID: universeID
        };
        return universe;
    }

    public addUniverse(): void
    {
        let maxNumber = 0;
        this.venue.universes.forEach(value => { if (value.universeID > maxNumber) { maxNumber = value.universeID } });
        let universeID = maxNumber + 1;
        this.venue.universes.push(this.createUniverse("New Universe", universeID));
    }

    public removeUniverse(index: number): void
    {
        this.venue.universes.splice(index, 1);
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem())
            {
                await this.venueService.postVenue(this.venue);
                this.saved = true;
                this.snackbar.open("Successfully added " + this.venue.name, "Close", { duration: 3000 });
            }
            else
            {
                await this.venueService.putVenue({ id: this.venue.id, venue: this.venue });
                this.saved = true;
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
