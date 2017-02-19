import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

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
    manufacturerFilterEnabled: boolean;
    manufacturerFilter: string;
    data: FixtureDefinitionSkeleton[];

    constructor(private fixtureDefinitionsService: FixtureDefinitionsService, overlay: Overlay, vcRef: ViewContainerRef, private modal: Modal)
    {
        overlay.defaultViewContainer = vcRef;
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
        let promise = await this.modal.confirm()
            .title("Are you sure?")
            .body("Are you sure you want to delete the definition for " + fixture.manufacturer + " " + fixture.model + "?")
            .isBlocking(true)
            .open();

        try
        {
            let result = await promise.result;
            if (result)
            {
                try
                {
                    await this.fixtureDefinitionsService.delete(fixture);
                    
                    this.messageBar.add("Success", fixture.manufacturer + " " + fixture.model + " was deleted");
                    let index = this.data.indexOf(fixture);
                    this.data.splice(index, 1);
                }
                catch (reason)
                {
                    this.messageBar.add("Error", "Could not delete " + fixture.manufacturer + " " + fixture.model + ". " + reason);
                }
            }
        }
        catch (error)
        {
            //errors are generated when the message box is cancelled
        }
    }

    private add(): void
    {
        window.location.href = "/fixture-definitions/new";
    }
}