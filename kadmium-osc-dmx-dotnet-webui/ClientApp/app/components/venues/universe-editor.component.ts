import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { FixtureOptionsEditorComponent } from "./fixture-options-editor.component";
import { MessageBarComponent } from "../status/message-bar/message-bar.component"
import { InputBoxComponent } from "../input-box/input-box.component";
import { Overlay } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { FixtureDefinitionsService } from "../fixture-definitions/fixture-definitions.service"
import { VenuePresetService } from "./venue-preset.service";
import { GroupService } from "../groups/group.service";

import { FixtureDefinitionSkeleton } from "../fixture-definitions/fixture-definition";
import { Universe, Fixture, FixtureDefinitionOptions, VenuePreset } from "./venue";

@Component({
    selector: 'universe-editor',
    template: require('./universe-editor.component.html'),
    styles: [require('./universe-editor.component.css')],
    providers: [FixtureDefinitionsService, VenuePresetService, GroupService]
})
export class UniverseEditorComponent
{
    @Input("universe") universe: Universe;
    @Input("messageBar") messageBar: MessageBarComponent;
    @Input("inputBox") inputBox: InputBoxComponent;
    @ViewChild("fixtureOptionsEditor") fixtureOptionsEditor: FixtureOptionsEditorComponent;

    private selectedFixtures: Fixture[];
    private selectedPresetName: string;
    private skeletons: FixtureDefinitionSkeleton[];
    private venuePresetNames: string[];
    private groups: string[];

    constructor(private fixtureDefinitionsService: FixtureDefinitionsService, private venuePresetService: VenuePresetService, private groupService: GroupService,
        overlay: Overlay, vcRef: ViewContainerRef, private modal: Modal)
    {
        overlay.defaultViewContainer = vcRef;
        this.selectedFixtures = [];
        this.venuePresetService
            .getNames()
            .then(value => this.venuePresetNames = value)
            .catch(reason => this.messageBar.add("Error", reason));
        this.fixtureDefinitionsService
            .getSkeletons()
            .then((value) => this.skeletons = value)
            .catch(reason => this.messageBar.add("Error", reason));
        this.groupService
            .get()
            .then(value => this.groups = value.map(grp => grp.name))
            .catch(reason => this.messageBar.add("Error", reason));
    }

    private getManufacturers(): string[]
    {
        return this.skeletons
            .map((value: FixtureDefinitionSkeleton) => value.manufacturer)
            .filter((value, index, array) => array.indexOf(value) == index);
    }

    private getModels(manufacturer: string): string[]
    {
        return this.skeletons
            .filter(value => value.manufacturer == manufacturer)
            .map(value => value.model);
    }

    private editOptions(fixture: Fixture)
    {
        this.fixtureOptionsEditor
            .show(fixture)
            .then(value => fixture.options = value)
            .catch(() => { });
    }

    private removeFixture(index: number): void
    {
        this.universe.fixtures.splice(index, 1);
    }

    private addFixture(): void
    {
        let fixture = new Fixture();
        fixture.type.manufacturer = this.getManufacturers()[0];
        fixture.type.model = this.getModels(fixture.type.manufacturer)[0];
        this.universe.fixtures.push(fixture);
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

    private async savePreset(): Promise<void>
    {
        let preset = new VenuePreset();
        try
        {
            preset.name = await this.inputBox.show("Select a name", "Name:", "Save", "Cancel");
            preset.fixtures = this.selectedFixtures;
            this.venuePresetService
                .put(preset.name, preset)
                .then(() =>
                {
                    this.selectedFixtures = [];
                    this.messageBar.add("Success", preset.name + " saved successfully");
                    this.venuePresetNames.push(preset.name);
                })
                .catch(reason => this.messageBar.add("Error", reason));
        }
        catch (error)
        { }
    }

    private loadPreset(name: string): void
    {
        this.venuePresetService
            .get(name)
            .then((value: VenuePreset) =>
            {
                for (let fixture of value.fixtures)
                {
                    this.universe.fixtures.push(fixture);
                }
            })
            .catch(reason => this.messageBar.add("Error", reason));
    }

    private async removePreset(name: string): Promise<void>
    {
        let promise = await this.modal.confirm()
            .title("Are you sure?")
            .body("Are you sure you want to delete " + name + "?")
            .isBlocking(true)
            .open();

        try
        {
            let result = await promise.result;
            if (result)
            {
                try 
                {
                    await this.venuePresetService.delete(name);
                    let index = this.venuePresetNames.indexOf(name);
                    this.venuePresetNames.splice(index, 1);
                    this.messageBar.add("Success", name + " successfully removed");
                }
                catch (error)
                {
                    this.messageBar.add("Error", error);
                }
            }
        }
        catch (error)
        {
            //errors are generated when the message box is cancelled
        }




    }

}