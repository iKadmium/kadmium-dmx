import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { StatusCode } from "../status-code.enum";
import { FixtureDefinitionService } from "api/services";
import { FixtureDefinition, FixtureDefinitionSkeleton, DMXChannel, MovementAxis, ColorWheelEntry } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-fixture-definition-editor',
    templateUrl: './fixture-definition-editor.component.html',
    styleUrls: ['./fixture-definition-editor.component.css'],
    providers: [FixtureDefinitionService]
})
export class FixtureDefinitionEditorComponent implements OnInit
{
    private id: number | null;
    public allManufacturers: string[];
    public definition: FixtureDefinition;
    private saving: boolean;

    constructor(private route: ActivatedRoute, private fixtureDefinitionService: FixtureDefinitionService,
        private snackbar: MatSnackBar, private title: Title, private router: Router)
    {
        this.saving = false;
    }

    ngOnInit()
    {
        this.id = this.route.snapshot.params['id'];

        try
        {
            if (this.isNewItem())
            {
                this.title.setTitle("Fixture Definition Editor - New Definition");
                this.definition = new FixtureDefinition();
                this.definition.channels = [];
                this.definition.colorWheel = [];
                this.definition.movements = [];
            }
            else
            {
                this.fixtureDefinitionService.getFixtureDefinitionById(this.id).then(response => 
                {
                    this.definition = response.data;
                    this.title.setTitle(`Fixture Definition Editor - ${this.definition.manufacturer} ${this.definition.model}`);
                }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
            }
            this.fixtureDefinitionService.getFixtureDefinitionSkeletons().then(response => 
            {
                this.allManufacturers = response.data
                    .map((skeleton: FixtureDefinitionSkeleton) => skeleton.manufacturer)
                    .filter((value: string, index: number, array: string[]) => array.indexOf(value) == index);
            }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
        }
    }
    public hasColorWheelChannel(): boolean
    {
        return this.definition.channels.find(channel => channel.name == "ColorWheel") != null;
    }

    private isNewItem(): boolean
    {
        return this.id == null;
    }

    private sortChannels(channels: DMXChannel[]): DMXChannel[]
    {
        return channels
            .sort((a, b) => 
            {
                if (a.address != b.address)
                {
                    return a.address - b.address;
                }
                else
                {
                    return parseInt(a.min) - parseInt(b.min);
                }
            });
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem())
            {
                await this.fixtureDefinitionService.postFixtureDefinitionById(this.definition);
                this.snackbar.open("Successfully added " + this.definition.manufacturer + " " + this.definition.model, "Close", { duration: 3000 });
            }
            else
            {
                await this.fixtureDefinitionService.putFixtureDefinitionById({ id: this.definition.id, definition: this.definition });
                this.snackbar.open("Successfully edited " + this.definition.manufacturer + " " + this.definition.model, "Close", { duration: 3000 });
            }
            this.router.navigate(["../"], { relativeTo: this.route });
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
        }
        finally
        {
            this.saving = false;
        }
    }

}
