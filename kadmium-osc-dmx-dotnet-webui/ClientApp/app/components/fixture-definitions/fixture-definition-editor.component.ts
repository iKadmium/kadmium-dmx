import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { FixtureDefinition, FixtureDefinitionSkeleton, DMXChannel, Axis, ColorWheelEntry } from "./fixture-definition";

import { FixtureDefinitionsService } from "./fixture-definitions.service";

@Component({
    selector: 'fixture-definitions-editor',
    template: require('./fixture-definition-editor.component.html'),
    providers: [FixtureDefinitionsService]
})
export class FixtureDefinitionEditorComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;

    private originalManufacturer: string;
    private originalModel: string;

    private allManufacturers: string[];

    private definition: FixtureDefinition;

    private saving: boolean;

    constructor(private route: ActivatedRoute, private fixtureService: FixtureDefinitionsService, overlay: Overlay, vcRef: ViewContainerRef, private modal: Modal)
    {
        this.allManufacturers = [];
        this.saving = false;
    }

    ngOnInit(): void
    {
        this.originalManufacturer = this.route.snapshot.params['manufacturer'];
        this.originalModel = this.route.snapshot.params['model'];

        if (this.isNewItem())
        {
            this.definition = new FixtureDefinition();
        }
        else
        {
            this.fixtureService
                .get(this.originalManufacturer, this.originalModel)
                .then(definition => this.definition = definition)
                .catch(reason => this.messageBar.add("Error", reason));
        }

        this.fixtureService
            .getSkeletons()
            .then((value: FixtureDefinitionSkeleton[]) => 
            {
                this.allManufacturers = value
                    .map((skeleton: FixtureDefinitionSkeleton) => skeleton.manufacturer)
                    .filter((value: string, index: number, array: string[]) => array.indexOf(value) == index);
            })
            .catch((reason) => { });
    }

    private addChannel(): void
    {
        let maxChannel = 0;
        this.definition.channels.forEach((value: DMXChannel) => 
        {
            if (value.dmx > maxChannel) 
            {
                maxChannel = value.dmx;
            }
        });

        this.definition.channels.push(new DMXChannel("", maxChannel + 1));
    }

    private removeChannel(channel: DMXChannel): void
    {
        let index = this.definition.channels.indexOf(channel);
        this.definition.channels.splice(index, 1);
    }

    private addAxis(): void
    {
        this.definition.movements.push(new Axis());
    }

    private removeAxis(axis: Axis): void
    {
        let index = this.definition.movements.indexOf(axis);
        this.definition.movements.splice(index, 1);
    }

    private addColorWheelEntry(): void
    {
        let minValue = 0;
        this.definition.colorWheel.forEach((value: ColorWheelEntry) => 
        {
            if (value.max > minValue) 
            {
                minValue = value.max;
            }
        });
        minValue = minValue < 255 ? minValue + 1 : 255;
        this.definition.colorWheel.push(new ColorWheelEntry("", minValue));
    }

    private removeColorWheelEntry(colorWheelEntry: ColorWheelEntry): void
    {
        let index = this.definition.colorWheel.indexOf(colorWheelEntry);
        this.definition.colorWheel.splice(index, 1);
    }

    private validateNames(): boolean
    {
        let channelNameProblems = this.channelNames
            .filter((value, index: number, array) => array.indexOf(value) != index || value == "");
        let axisNameProblems = this.axisNames
            .filter((value, index: number, array) => array.indexOf(value) != index || value == "");
        let colorWheelNameProblems = this.colorWheelNames
            .filter((value, index: number, array) => array.indexOf(value) != index || value == "");

        return channelNameProblems.length == 0 && axisNameProblems.length == 0 && colorWheelNameProblems.length == 0;
    }

    private get channelNames(): string[]
    {
        return this.definition.channels.map((value: DMXChannel) => value.name);
    }

    private get colorWheelNames(): string[]
    {
        return this.definition.colorWheel.map((value: ColorWheelEntry) => value.name);
    }

    private get axisNames(): string[]
    {
        return this.definition.movements.map((value: Axis) => value.name);
    }

    private isNewItem(): boolean
    {
        return this.originalManufacturer == null && this.originalModel == null;
    }

    private save(): void
    {
        this.saving = true;
        let manufacturer = this.isNewItem() ? this.definition.manufacturer : this.originalManufacturer;
        let model = this.isNewItem() ? this.definition.name : this.originalModel;
        this.fixtureService
            .put(manufacturer, model, this.definition)
            .then(() =>
            {
                window.location.href = "/fixture-definitions";
            })
            .catch((reason) => 
            {
                this.messageBar.add("Error", reason);
                this.saving = false;
            });
    }
}