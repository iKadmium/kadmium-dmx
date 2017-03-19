import { Component, ViewChild, ViewContainerRef, ViewChildDecorator, ElementRef } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { FixtureDefinitionsService } from "./fixture-definitions.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { FixtureDefinitionSkeleton, FixtureDefinition } from "./fixture-definition";

@Component({
    selector: 'fixture-definitions',
    template: require('./fixture-definitions.component.html'),
    providers: [FixtureDefinitionsService]
})
export class FixtureDefinitionsComponent
{
    manufacturerFilterEnabled: boolean;
    manufacturerFilter: string;
    data: FixtureDefinitionSkeleton[];

    constructor(private fixtureDefinitionsService: FixtureDefinitionsService, overlay: Overlay, vcRef: ViewContainerRef,
        private messageBarService: MessageBarService, private modal: Modal, title: Title)
    {
        title.setTitle("Fixture Definitions");
        overlay.defaultViewContainer = vcRef;
        this.fixtureDefinitionsService
            .getSkeletons()
            .then((value: FixtureDefinitionSkeleton[]) => this.data = value)
            .catch((reason) => this.messageBarService.add("Error", reason));
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
        return "fixture-definitions" + "/" + fixture.id;
    }

    private getDownloadUrl(fixture: FixtureDefinitionSkeleton): string
    {
        return "/api/FixtureDefinition" + "/" + fixture.id;
    }

    private async deleteConfirm(fixture: FixtureDefinitionSkeleton): Promise<void>
    {
        let promise = await this.modal
            .confirm()
            .title("Are you sure?")
            .body("Are you sure you want to delete the definition for " + fixture.manufacturer + " " + fixture.model + "?")
            .isBlocking(true)
            .okBtnClass("btn btn-danger")
            .okBtn("Delete")
            .open();

        try
        {
            let result = await promise.result;
            if (result)
            {
                try
                {
                    await this.fixtureDefinitionsService.delete(fixture);

                    this.messageBarService.add("Success", fixture.manufacturer + " " + fixture.model + " was deleted");
                    let index = this.data.indexOf(fixture);
                    this.data.splice(index, 1);
                }
                catch (reason)
                {
                    this.messageBarService.add("Error", "Could not delete " + fixture.manufacturer + " " + fixture.model + ". " + reason);
                }
            }
        }
        catch (error)
        {
            //errors are generated when the message box is cancelled
        }
    }
    
    private upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    private fileSelected(item: File): void
    {
        let reader = new FileReader();
        reader.addEventListener("load", (event) => 
        {
            let content = reader.result;
            let definition = JSON.parse(content) as FixtureDefinition;
            this.fixtureDefinitionsService.post(definition)
                .then(id =>
                {
                    this.messageBarService.add("Success", "Successfully added " + definition.manufacturer + " " + definition.model);
                    definition.id = id;
                    this.data.push(definition);
                })
                .catch(reason =>
                {
                    this.messageBarService.add("Error", reason);
                });
        });
        reader.readAsText(item);
    }
}