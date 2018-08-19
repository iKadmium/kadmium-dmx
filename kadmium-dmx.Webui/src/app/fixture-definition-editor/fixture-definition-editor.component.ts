import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { FixtureDefinition, FixtureDefinitionSkeleton, MovementAxis } from "api/models";
import { MatExpansionPanel } from '@angular/material';
import { Sleep } from '../sleep';
import { NgForm } from '@angular/forms';
import { AnimationLibrary } from "../animation-library";
import { EditorComponent } from "../editor-component/editor-component";
import { APIClient, FixtureType, ColorWheelEntryData, DMXChannelData } from 'api';
import { MessageService } from 'app/message.service';

@Component({
    selector: 'app-fixture-definition-editor',
    templateUrl: './fixture-definition-editor.component.html',
    styleUrls: ['./fixture-definition-editor.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class FixtureDefinitionEditorComponent extends EditorComponent implements OnInit
{
    private manufacturer: string | null;
    private model: string | null;
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

    constructor(private route: ActivatedRoute, private apiClient: APIClient,
        private messageService: MessageService, private title: Title, private router: Router)
    {
        super();
        this.saving = false;
    }

    ngOnInit()
    {
        this.manufacturer = this.route.snapshot.params['manufacturer'];
        this.model = this.route.snapshot.params['model'];
        this.title.setTitle("Fixture Definition Editor");
        this.form = this.formChild;
        try
        {
            if (this.isNewItem())
            {
                this.definition = {
                    id: "",
                    skeleton: {
                        manufacturer: "",
                        model: ""
                    },
                    channels: [],
                    colorWheel: [],
                    movements: [],
                    fixtureType: FixtureType.LED
                };
            }
            else
            {
                this.apiClient.getFixtureDefinition({ manufacturer: this.manufacturer, model: this.model })
                    .toPromise()
                    .then(response => 
                    {
                        this.definition = response;
                    }).catch(error => this.messageService.error(error));
            }
            this.apiClient.getFixtureDefinitions()
                .toPromise()
                .then(response => 
                {
                    this.allManufacturers = response
                        .map((skeleton: FixtureDefinitionSkeleton) => skeleton.manufacturer)
                        .filter((value: string, index: number, array: string[]) => array.indexOf(value) == index);
                }).catch(error => this.messageService.error(error));
        }
        catch (reason)
        {
            this.messageService.error(reason);
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
        return this.manufacturer == null || this.model == null;
    }

    public async addChannel(): Promise<void>
    {
        let maxChannel = 0;
        this.definition.channels.forEach((value: DMXChannelData) => 
        {
            if (value.address > maxChannel) 
            {
                maxChannel = value.address;
            }
        });

        let channel: DMXChannelData = {
            name: "",
            address: maxChannel + 1,
            min: 0,
            max: 255
        };
        this.definition.channels.push(channel);
        await Sleep.sleepUntil(() => this.channelPanels.length == this.definition.channels.length);
        this.channelPanels.last.open();
    }

    public removeChannel(channel: DMXChannelData): void
    {
        let index = this.definition.channels.indexOf(channel);
        this.definition.channels.splice(index, 1);
    }

    public getOtherChannelNames(thisEntry: DMXChannelData): string[]
    {
        return this.definition.channels
            .filter(value => value != thisEntry)
            .map((value: DMXChannelData) => value.name);
    }

    public async addColorWheelEntry(): Promise<void>
    {
        this.definition.colorWheel.push({
            name: "",
            min: 0,
            max: 255,
            color: ""
        });
        await Sleep.sleepUntil(() => this.colorWheelPanels.length == this.definition.colorWheel.length);
        this.colorWheelPanels.last.open();
    }

    public removeColorWheelEntry(axis: ColorWheelEntryData): void
    {
        let index = this.definition.colorWheel.indexOf(axis);
        this.definition.colorWheel.splice(index, 1);
    }

    public getOtherColorWheelEntryNames(thisEntry: ColorWheelEntryData): string[]
    {
        return this.definition.colorWheel
            .filter(value => value != thisEntry)
            .map((value: ColorWheelEntryData) => value.name);
    }

    public async addAxis(): Promise<void>
    {
        this.definition.movements.push({
            name: "",
            min: -270,
            max: 270
        });
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

    public getFilteredChannelNameOptions(channel: DMXChannelData): string[]
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
            if (this.manufacturer == null)
            {
                await this.apiClient.postFixtureDefinition({ value: this.definition }).toPromise();
                this.saved = true;
                this.messageService.info("Successfully edited " + this.definition.skeleton.manufacturer + " " + this.definition.skeleton.model);
            }
            else
            {
                await this.apiClient.putFixtureDefinition({
                    manufacturer: this.manufacturer,
                    model: this.model,
                    value: this.definition
                }).toPromise();
                this.saved = true;
                this.messageService.info("Successfully edited " + this.definition.skeleton.manufacturer + " " + this.definition.skeleton.model);
            }

            this.router.navigate(["../"], { relativeTo: this.route });
        }
        catch (reason)
        {
            this.messageService.error(reason);
        }
        finally
        {
            this.saving = false;
        }
    }

}
