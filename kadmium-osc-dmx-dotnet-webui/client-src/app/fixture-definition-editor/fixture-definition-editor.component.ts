import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { StatusCode } from "../status-code.enum";
import { FixtureDefinitionService } from "api/services";
import { FixtureDefinition, FixtureDefinitionSkeleton, DMXChannel, MovementAxis, ColorWheelEntry } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar, MatExpansionPanel } from '@angular/material';
import { Sleep } from 'app/sleep';
import { NgForm } from '@angular/forms';
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-fixture-definition-editor',
    templateUrl: './fixture-definition-editor.component.html',
    styleUrls: ['./fixture-definition-editor.component.css'],
    providers: [FixtureDefinitionService],
    animations: [AnimationLibrary.animations()]
})
export class FixtureDefinitionEditorComponent implements OnInit
{
    private id: number | null;
    public allManufacturers: string[];
    public definition: FixtureDefinition;

    public saving: boolean;

    @ViewChildren("movementPanels") movementPanels: QueryList<MatExpansionPanel>;
    @ViewChildren("colorWheelPanels") colorWheelPanels: QueryList<MatExpansionPanel>;
    @ViewChildren("channelPanels") channelPanels: QueryList<MatExpansionPanel>;

    @ViewChild("editorForm") form: NgForm;

    constructor(private route: ActivatedRoute, private fixtureDefinitionService: FixtureDefinitionService,
        private snackbar: MatSnackBar, private title: Title, private router: Router)
    {
        this.saving = false;
    }

    ngOnInit()
    {
        this.id = this.route.snapshot.params['id'];
        this.title.setTitle("Fixture Definition Editor");
        try
        {
            if (this.isNewItem())
            {

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

    public get loading(): boolean
    {
        return this.allManufacturers == null || this.definition == null;
    }

    public hasColorWheelChannel(): boolean
    {
        return this.definition.channels.find(channel => channel.name == "ColorWheel") != null;
    }

    private isNewItem(): boolean
    {
        return this.id == null;
    }

    public async addChannel(): Promise<void>
    {
        let maxChannel = 0;
        this.definition.channels.forEach((value: DMXChannel) => 
        {
            if (value.address > maxChannel) 
            {
                maxChannel = value.address;
            }
        });

        let channel = new DMXChannel();
        channel.address = maxChannel + 1;
        channel.min = "0";
        channel.max = "255";
        this.definition.channels.push(channel);
        await Sleep.sleepUntil(() => this.channelPanels.length == this.definition.channels.length);
        this.channelPanels.last.open();
    }

    public removeChannel(channel: DMXChannel): void
    {
        let index = this.definition.channels.indexOf(channel);
        this.definition.channels.splice(index, 1);
    }

    public getOtherChannelNames(thisEntry: DMXChannel): string[]
    {
        return this.definition.channels
            .filter(value => value != thisEntry)
            .map((value: DMXChannel) => value.name);
    }

    public async addColorWheelEntry(): Promise<void>
    {
        this.definition.colorWheel.push(new ColorWheelEntry());
        await Sleep.sleepUntil(() => this.colorWheelPanels.length == this.definition.colorWheel.length);
        this.colorWheelPanels.last.open();
    }

    public removeColorWheelEntry(axis: ColorWheelEntry): void
    {
        let index = this.definition.colorWheel.indexOf(axis);
        this.definition.colorWheel.splice(index, 1);
    }

    public getOtherColorWheelEntryNames(thisEntry: ColorWheelEntry): string[]
    {
        return this.definition.colorWheel
            .filter(value => value != thisEntry)
            .map((value: ColorWheelEntry) => value.name);
    }

    public async addAxis(): Promise<void>
    {
        this.definition.movements.push(new MovementAxis());
        await Sleep.sleepUntil(() => this.movementPanels.length == this.definition.movements.length);
        this.movementPanels.last.open();
    }

    public removeAxis(axis: MovementAxis): void
    {
        let index = this.definition.movements.indexOf(axis);
        this.definition.movements.splice(index, 1);
    }

    public getOtherAxisNames(thisEntry: MovementAxis): string[]
    {
        return this.definition.movements
            .filter(value => value != thisEntry)
            .map((value: MovementAxis) => value.name);
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
