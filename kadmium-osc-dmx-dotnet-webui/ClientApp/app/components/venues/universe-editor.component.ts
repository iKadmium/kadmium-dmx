import { Component, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { FixtureOptionsEditorComponent } from "./fixture-options-editor.component";
import { MessageBarComponent } from "../status/message-bar/message-bar.component"
import { InputBoxComponent } from "../input-box/input-box.component";
import { Overlay, OverlayConfig } from "angular2-modal";
import { Modal } from "angular2-modal/plugins/bootstrap";

import { FixtureDefinitionsService } from "../fixture-definitions/fixture-definitions.service"
import { VenuePresetService } from "./venue-preset.service";
import { GroupService } from "../groups/group.service";

import { FixtureDefinitionSkeleton } from "../fixture-definitions/fixture-definition";
import { VenuePresetSkeleton } from "./venue";
import { Universe, Fixture, FixtureDefinitionOptions, VenuePreset } from "./venue";
import { MessageBarService } from "../status/message-bar/message-bar.service";

@Component({
    selector: 'universe-editor',
    template: require('./universe-editor.component.html'),
    styles: [require('./universe-editor.component.css')],
    providers: [FixtureDefinitionsService, VenuePresetService, GroupService]
})
export class UniverseEditorComponent
{
    @Input("universe") universe: Universe;
    @Input("inputBox") inputBox: InputBoxComponent;

    private selectedFixture: Fixture;
    private selectedFixtures: Fixture[];
    private selectedPreset: VenuePresetSkeleton;
    private fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];
    private venuePresetSkeletons: VenuePresetSkeleton[];
    private groups: string[];

    constructor(private fixtureDefinitionsService: FixtureDefinitionsService, private venuePresetService: VenuePresetService, private groupService: GroupService,
        private messageBarService: MessageBarService, overlay: Overlay, private vcRef: ViewContainerRef, private modal: Modal)
    {
        overlay.defaultViewContainer = vcRef;
        this.selectedFixtures = [];
        this.selectedFixture = null;
        this.venuePresetService
            .getSkeletons()
            .then(value => this.venuePresetSkeletons = value)
            .catch(reason => this.messageBarService.addError(reason));
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

    private async savePreset(): Promise<void>
    {
        let preset = await this.venuePresetService.get(this.selectedPreset.id);
        try
        {
            preset.fixtures = this.selectedFixtures;
            this.venuePresetService
                .put(preset.id, preset)
                .then(() => {
                    this.selectedFixtures = [];
                    this.messageBarService.add("Success", preset.name + " saved successfully");
                    this.venuePresetSkeletons.push(preset);
                })
                .catch(reason => this.messageBarService.addError(reason));
        }
        catch (error)
        { }
    }

    private async savePresetAs(): Promise<void>
    {
        let preset = new VenuePreset();
        try
        {
            preset.name = await this.inputBox.show("Select a name", "Name:", "Save", "Cancel");
            preset.fixtures = this.selectedFixtures;
            this.venuePresetService
                .post(preset)
                .then(() =>
                {
                    this.selectedFixtures = [];
                    this.messageBarService.add("Success", preset.name + " saved successfully");
                    this.venuePresetSkeletons.push(preset);
                })
                .catch(reason => this.messageBarService.addError(reason));
        }
        catch (error)
        { }
    }

    private loadPreset(preset: VenuePresetSkeleton): void
    {
        this.venuePresetService
            .get(preset.id)
            .then((value: VenuePreset) =>
            {
                for (let fixture of value.fixtures)
                {
                    this.universe.fixtures.push(fixture);
                }
            })
            .catch(reason => this.messageBarService.addError(reason));
    }

    private async removePreset(preset: VenuePresetSkeleton): Promise<void>
    {
        let promise = await this.modal
            .confirm()
            .title("Are you sure?")
            .body("Are you sure you want to delete " + preset.name + "?")
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
                    await this.venuePresetService.delete(preset.id);
                    let index = this.venuePresetSkeletons.indexOf(preset);
                    this.venuePresetSkeletons.splice(index, 1);
                    this.messageBarService.add("Success", preset.name + " successfully removed");
                }
                catch (error)
                {
                    this.messageBarService.addError(error);
                }
            }
        }
        catch (error)
        {
            //errors are generated when the message box is cancelled
        }
    }

    private get sortedFixtures(): Fixture[]
    {
        return this.universe.fixtures.slice().sort((a, b) => a.address - b.address);
    }

}