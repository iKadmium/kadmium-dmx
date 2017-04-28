import { Component, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { FixtureOptionsEditorComponent } from "./fixture-options-editor.component";
import { MessageBarComponent } from "../status/message-bar/message-bar.component"
import { InputBoxComponent } from "../input-box/input-box.component";
import { Overlay, OverlayConfig } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { FixtureDefinitionsService } from "../fixture-definitions/fixture-definitions.service"
import { GroupService } from "../groups/group.service";

import { FixtureDefinitionSkeleton } from "../fixture-definitions/fixture-definition";
import { Universe, Fixture, FixtureDefinitionOptions } from "./venue";
import { MessageBarService } from "../status/message-bar/message-bar.service";
import { AsyncFileReader } from "../../shared/async-file-reader";
import { FileSaver } from "../../shared/file-saver";

@Component({
    selector: 'universe-editor',
    template: require('./universe-editor.component.html'),
    styles: [require('./universe-editor.component.css')],
    providers: [FixtureDefinitionsService, GroupService]
})
export class UniverseEditorComponent
{
    @Input("universe") universe: Universe;
    @Input("inputBox") inputBox: InputBoxComponent;

    private selectedFixture: Fixture;
    private selectedFixtures: Fixture[];
    private fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];
    private groups: string[];

    constructor(private fixtureDefinitionsService: FixtureDefinitionsService, private groupService: GroupService,
        private messageBarService: MessageBarService, overlay: Overlay, private vcRef: ViewContainerRef, private modal: Modal)
    {
        overlay.defaultViewContainer = vcRef;
        this.selectedFixtures = [];
        this.selectedFixture = null;
        this.fixtureDefinitionsService
            .getSkeletons()
            .then((value) => this.fixtureDefinitionSkeletons = value)
            .catch(reason => this.messageBarService.addError(reason));
        this.groupService
            .get()
            .then(value => this.groups = value.map(grp => grp.name))
            .catch(reason => this.messageBarService.addError(reason));
    }

    private async removeFixture(fixture: Fixture): Promise<void>
    {
        let promise = await this.modal
            .confirm()
            .title("Are you sure?")
            .body("Are you sure you want to delete " + fixture.type.manufacturer + " " + fixture.type.model + "?")
            .isBlocking(true)
            .okBtnClass("btn btn-danger")
            .okBtn("Delete")
            .open();

        try
        {
            let result = await promise.result;
            if (result)
            {
                let index = this.universe.fixtures.indexOf(fixture);
                this.universe.fixtures.splice(index, 1);
                if (this.selectedFixture == fixture)
                {
                    let newIndex = (index == this.universe.fixtures.length) ? this.universe.fixtures.length - 1 : index;
                    this.selectedFixture = this.universe.fixtures[newIndex];
                }
            }
        }
        catch (error)
        {
            //errors are generated when the message box is cancelled
        }

    }

    private addFixture(): void
    {
        let fixture = new Fixture();
        fixture.group = this.groups[0];
        this.universe.fixtures.push(fixture);
        this.selectedFixture = fixture;
    }

    private isSelected(fixture: Fixture): boolean
    {
        return this.selectedFixtures.indexOf(fixture) != -1;
    }

    private selectFixture(fixture: Fixture, selected: boolean)
    {
        let index = this.selectedFixtures.indexOf(fixture);
        if (selected && index == -1)
        {
            this.selectedFixtures.push(fixture);
        }
        else if (!selected && index != -1)
        {
            this.selectedFixtures.splice(index, 1);
        }
    }

    private async savePresetAs(): Promise<void>
    {
        try
        {
            let name = await this.inputBox.show("Select a name", "Name:", "Save", "Cancel");
            let fixtures = this.selectedFixtures;
            FileSaver.Save(name + ".json", fixtures);
        }
        catch (error)
        { }
    }

    private get sortedFixtures(): Fixture[]
    {
        return this.universe.fixtures.slice().sort((a, b) => a.address - b.address);
    }

    private upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    private async uploadFiles(files: File[]): Promise<void>
    {
        for (let file of files)
        {
            await this.uploadFile(file);
        }
    }

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let fixtures = await AsyncFileReader.read<Fixture[]>(file);
            for (let fixture of fixtures)
            {
                fixture.id = 0;
                fixture.type = this.fixtureDefinitionSkeletons.find(x => x.manufacturer == fixture.type.manufacturer && x.model == fixture.type.model);
                this.universe.fixtures.push(fixture);
            }
            this.messageBarService.add("Success", "Successfully added " + fixtures.length + " fixtures");
        }
        catch (reason)
        {
            this.messageBarService.addError(reason);
        }
    }

}