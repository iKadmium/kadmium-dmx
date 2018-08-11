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
import { EditorComponent } from "app/editor-component/editor-component";

@Component({
    selector: 'app-fixture-definition-editor',
    templateUrl: './fixture-definition-editor.component.html',
    styleUrls: ['./fixture-definition-editor.component.css'],
    providers: [FixtureDefinitionService],
    animations: [AnimationLibrary.animations()]
})
export class FixtureDefinitionEditorComponent extends EditorComponent implements OnInit
{
    private id: number | null;
    public allManufacturers: string[];
    public definition: FixtureDefinition;

    public saving: boolean;

    private channelNameOptions: string[] = [
        'Master',
        'Strobe',
        'Red',
        'Green',
        'Blue',
        'UV',
        'ColorWheel',
        'Pan',
        'PanCoarse',
        'PanFine',
        'Tilt',
        'TiltCoarse',
        'TiltFine',
        'CO2',
        'Fire',
        'FireHeight'
    ];

    private allAxis: string[] = [
        'Pan',
        'Tilt'
    ]

    @ViewChildren("movementPanels") movementPanels: QueryList<MatExpansionPanel>;
    @ViewChildren("colorWheelPanels") colorWheelPanels: QueryList<MatExpansionPanel>;
    @ViewChildren("channelPanels") channelPanels: QueryList<MatExpansionPanel>;

    @ViewChild("editorForm") formChild: NgForm;

    constructor(private route: ActivatedRoute, private fixtureDefinitionService: FixtureDefinitionService,
        private snackbar: MatSnackBar, private title: Title, private router: Router)
    {
        super();
        this.saving = false;
    }

    ngOnInit()
    {
        this.id = this.route.snapshot.params['id'];
        this.title.setTitle("Fixture Definition Editor");
        this.form = this.formChild;
        try
        {
            if (this.isNewItem())
            {
                this.definition = {
                    skeleton: {},
                    channels: [],
                    colorWheel: [],
                    movements: []
                };
            }
            else
            {
                this.fixtureDefinitionService.getFixtureDefinitionById(this.id)
                    .toPromise()
                    .then(response => 
                    {
                        this.definition = response;
                    }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
            }
            this.fixtureDefinitionService.getFixtureDefinitionSkeletons()
                .toPromise()
                .then(response => 
                {
                    this.allManufacturers = response
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

        let channel: DMXChannel = {
            address: maxChannel + 1,
            min: "0",
            max: "255"
        };
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
        this.definition.colorWheel.push({});
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
        this.definition.movements.push({});
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

    public getFilteredChannelNameOptions(channel: DMXChannel): string[]
    {
        let options = this.channelNameOptions
            .filter(x => x.startsWith(channel.name) && x != channel.name);
        return options.filter(x => 
        {
            return !this.getOtherChannelNames(channel).find(other => other == x);
        });
    }

    public getFilteredManufacturers(beginning: string): string[]
    {
        return this.allManufacturers.filter(x => x.startsWith(beginning) && x != beginning);
    }

    public getFilteredAxis(beginning: string): string[]
    {
        return this.allAxis.filter(x => x.startsWith(beginning) && x != beginning);
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.id == null)
            {
                await this.fixtureDefinitionService.postFixtureDefinitionById(this.definition).toPromise();
                this.saved = true;
                this.snackbar.open("Successfully edited " + this.definition.skeleton.manufacturer + " " + this.definition.skeleton.model, "Close", { duration: 3000 });
            }
            else
            {
                await this.fixtureDefinitionService.putFixtureDefinitionById({
                    id: { manufacturer: this.definition.skeleton.manufacturer, model: this.definition.skeleton.model },
                    definition: this.definition
                }).toPromise();
                this.saved = true;
                this.snackbar.open("Successfully edited " + this.definition.skeleton.manufacturer + " " + this.definition.skeleton.model, "Close", { duration: 3000 });
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
