import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { ConfirmationComponent } from "../confirmation/confirmation.component";

import { FixtureDefinition, FixtureDefinitionSkeleton } from "./fixture-definition";

import { FixtureDefinitionsService } from "./fixture-definitions.service";

@Component({
    selector: 'fixture-definitions-editor',
    template: require('./fixture-definition-editor.component.html'),
    providers: [FixtureDefinitionsService]
})
export class FixtureDefinitionEditorComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    @ViewChild("confirmation") confirmation: ConfirmationComponent;

    private originalManufacturer: string;
    private originalModel: string;

    private allManufacturers: string[];

    private definition: FixtureDefinition;

    constructor(private route: ActivatedRoute, private fixtureService: FixtureDefinitionsService)
    {
        this.allManufacturers = [];
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

    private isNewItem(): boolean
    {
        return this.originalManufacturer == null && this.originalModel == null;
    }
}