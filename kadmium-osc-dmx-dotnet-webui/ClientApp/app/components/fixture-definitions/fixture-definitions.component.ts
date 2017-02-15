import { Component, ViewChild } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { ConfirmationComponent } from "../confirmation/confirmation.component";

import { FixtureDefinitionsService } from "./fixture-definitions.service";

import { FixtureDefinitionSkeleton } from "./fixture-definition";

@Component({
    selector: 'fixture-definitions',
    template: require('./fixture-definitions.component.html'),
    providers: [FixtureDefinitionsService]
})
export class FixtureDefinitionsComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    @ViewChild("confirmation") confirmation: ConfirmationComponent;
    manufacturerFilterEnabled: boolean;
    manufacturerFilter: string;
    data: FixtureDefinitionSkeleton[];

    constructor(private fixtureDefinitionsService: FixtureDefinitionsService)
    {
        this.fixtureDefinitionsService
            .getSkeletons()
            .then((value: FixtureDefinitionSkeleton[]) => this.data = value)
            .catch((reason) => this.messageBar.add("Error", reason));
    }

    private get manufacturers(): string[]
    {
        return this.data
            .map((value: FixtureDefinitionSkeleton) => value.manufacturer)
            .filter((value: string, index: number, array: string[]) => array.indexOf(value) === index);
    }

    private get filteredData(): FixtureDefinitionSkeleton[]
    {
        if (this.manufacturerFilterEnabled)
        {
            return this.data.filter((value: FixtureDefinitionSkeleton) => value.manufacturer == this.manufacturerFilter);
        }
        else
        {
            return this.data;
        }
    }

    private getEditUrl(fixture: FixtureDefinitionSkeleton): string
    {
        return "fixture-definitions" + "/" + fixture.manufacturer + "/" + fixture.model;
    }

    private async deleteConfirm(fixture: FixtureDefinitionSkeleton): Promise<void>
    {
        let result = await this.confirmation.show(
            "Are you sure?",
            "Are you sure you want to delete the fixture definition for " + fixture.manufacturer + " " + fixture.model + "?",
            "Delete",
            "Cancel"
        );
        if (result)
        {
            this.fixtureDefinitionsService
                .delete(fixture)
                .then(() =>
                {
                    this.messageBar.add("Success", fixture.manufacturer + " " + fixture.model + " was deleted");
                    let index = this.data.indexOf(fixture);
                    this.data.splice(index, 1);
                })
                .catch(reason => this.messageBar.add("Error", "Could not delete " + fixture.manufacturer + " " + fixture.model + ". " + reason));
        }
    }
}