import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { FixtureDefinitionsService } from "./fixture-definitions.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { FixtureDefinition, FixtureDefinitionSkeleton, DMXChannel, Axis, ColorWheelEntry } from "./fixture-definition";

@Component({
    selector: 'fixture-definitions-editor',
    template: require('./fixture-definition-editor.component.html'),
    providers: [FixtureDefinitionsService]
})
export class FixtureDefinitionEditorComponent implements OnInit
{
    private id: number | null;
    
    private allManufacturers: string[];

    private definition: FixtureDefinition;

    private saving: boolean;

    constructor(private route: ActivatedRoute, private fixtureService: FixtureDefinitionsService, overlay: Overlay, vcRef: ViewContainerRef,
        private messageBarService: MessageBarService, private modal: Modal, private title: Title)
    {
        this.allManufacturers = [];
        this.saving = false;
    }

    ngOnInit(): void
    {
        this.id = this.route.snapshot.params['id'];
        
        if (this.isNewItem()) {
            this.title.setTitle("Fixture Definition Editor - New Definition");
            this.definition = new FixtureDefinition();
        }
        else {
            this.fixtureService
                .get(this.id)
                .then(definition =>
                {
                    this.definition = definition;
                    this.title.setTitle(`Fixture Definition Editor - ${this.definition.manufacturer} ${this.definition.model}`);
                })
                .catch(reason => this.messageBarService.add("Error", reason));
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
            if (value.address > maxChannel) 
            {
                maxChannel = value.address;
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

    private getOtherChannelNames(thisEntry: DMXChannel): string[]
    {
        return this.definition.channels
            .filter(value => value != thisEntry)
            .map((value: DMXChannel) => value.name);
    }

    private getOtherColorWheelNames(thisEntry: ColorWheelEntry): string[]
    {
        return this.definition.colorWheel
            .filter(value => value != thisEntry)
            .map((value: ColorWheelEntry) => value.name);
    }

    private getOtherAxisNames(thisEntry: Axis): string[]
    {
        return this.definition.movements
            .filter(value => value != thisEntry)
            .map((value: Axis) => value.name);
    }

    private hasColorWheelChannel(): boolean
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
                    return a.min - b.min;
                }
            });
    }

    private save(): void
    {
        this.saving = true;
        if (this.isNewItem()) 
        {
            this.fixtureService
                .post(this.definition)
                .then(() =>
                {
                    window.location.href = "/fixture-definitions";
                })
                .catch((reason) =>
                {
                    this.messageBarService.add("Error", reason);
                    this.saving = false;
                });
        }
        else
        {
            this.fixtureService
                .put(this.definition)
                .then(() => {
                    window.location.href = "/fixture-definitions";
                })
                .catch((reason) => {
                    this.messageBarService.add("Error", reason);
                    this.saving = false;
                });
        }
    }
}