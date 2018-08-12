import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UniverseEditorComponent } from "../universe-editor/universe-editor.component";
import { FixtureOptionsEditorComponent } from "../fixture-options-editor/fixture-options-editor.component";
import { StatusCode } from "../status-code.enum";
import { UniverseData } from "api/models";
import { Title } from "@angular/platform-browser";
import { MatTabGroup } from "@angular/material/tabs";
import { MatTabChangeEvent, MatTab, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AnimationLibrary } from "../animation-library";
import { EditorComponent } from "../editor-component/editor-component";
import { APIClient, GroupData, VenueData } from 'api';

@Component({
    selector: 'app-venue-editor',
    templateUrl: './venue-editor.component.html',
    styleUrls: ['./venue-editor.component.css'],
    animations: [AnimationLibrary.animations()],
    providers: [APIClient]
})
export class VenueEditorComponent extends EditorComponent implements OnInit
{
    @ViewChild("universeEditor") universeEditor: UniverseEditorComponent;
    @ViewChild("fixtureOptionsEditor") fixtureOptionsEditor: FixtureOptionsEditorComponent;

    @ViewChild("editorForm") formChild: NgForm;

    private venueName: string | null;
    public loading: boolean;
    public saving: boolean;
    public groups: GroupData[];

    public venue: VenueData;

    public activeUniverse: UniverseData;

    constructor(private route: ActivatedRoute, private apiClient: APIClient, private snackbar: MatSnackBar,
        private router: Router, private title: Title)
    {
        super();
        this.saving = false;
        this.loading = true;
    }

    ngOnInit(): void
    {
        this.venueName = this.route.snapshot.params['id'];
        this.title.setTitle("Venue Editor");
        this.form = this.formChild;
        this.apiClient.getGroups()
            .toPromise()
            .then(response =>
            {
                this.groups = response;

                if (this.isNewItem())
                {
                    this.venue = {
                        id: "",
                        name: "",
                        universes: [this.createUniverse("New Universe", 1)]
                    };
                    this.loading = false;
                }
                else
                {
                    this.apiClient.getVenue({ name: this.venueName })
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
        return this.venueName == null;
    }

    private createUniverse(name: string, universeID: number): UniverseData
    {
        let universe: UniverseData = {
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
                await this.apiClient.postVenue({ value: this.venue }).toPromise();
                this.saved = true;
                this.snackbar.open("Successfully added " + this.venue.name, "Close", { duration: 3000 });
            }
            else
            {
                await this.apiClient.putVenue({ originalName: this.venueName, value: this.venue }).toPromise();
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
