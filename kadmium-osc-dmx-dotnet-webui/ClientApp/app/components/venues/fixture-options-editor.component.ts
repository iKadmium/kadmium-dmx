import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { FixtureDefinitionsService } from "../fixture-definitions/fixture-definitions.service";
import { GroupService } from "../groups/group.service";

import { Group } from "../groups/group";
import { Fixture, FixtureDefinitionOptions, AxisRestrictionOptions } from "./venue";
import { FixtureDefinition, FixtureDefinitionSkeleton } from "../fixture-definitions/fixture-definition";

@Component({
    selector: 'fixture-options-editor',
    template: require('./fixture-options-editor.component.html'),
    styles: [require("./fixture-options-editor.component.css")],
    providers: [FixtureDefinitionsService, GroupService]
})
export class FixtureOptionsEditorComponent implements OnChanges
{
    @Input("fixture") fixture: Fixture;
    public visible = false;
    private visibleAnimate = false;

    private axisOptions: AxisOptions[];

    private definition: FixtureDefinition;
    private skeletons: FixtureDefinitionSkeleton[];
    private groups: Group[];
    private manufacturerFilter: string;

    constructor(private fixtureDefinitionsService: FixtureDefinitionsService, private groupService: GroupService)
    {
        this.groupService
            .get()
            .then(value => this.groups = value);
        this.fixtureDefinitionsService
            .getSkeletons()
            .then(value => this.skeletons = value);
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        if(changes["fixture"] != null)
        {
            let fixtureChanges = changes["fixture"];
            if(fixtureChanges.currentValue != null)
            {
                let fixture: Fixture = fixtureChanges.currentValue;
                if(fixture.type == null)
                {
                    fixture.type = this.skeletons[0];
                }
                this.manufacturerFilter = fixture.type.manufacturer;
                this.updateDefinition(fixture.type);
            }
            else
            {
                this.definition = null;
                this.axisOptions = [];
            }
        }
    }

    public get moving(): boolean
    {
        return this.definition.movements.length > 0;
    }

    private getManufacturers(): string[]
    {
        return this.skeletons
            .map((value: FixtureDefinitionSkeleton) => value.manufacturer)
            .filter((value, index, array) => array.indexOf(value) == index);
    }

    private getDefinitions(manufacturer: string): FixtureDefinitionSkeleton[]
    {
        return this.skeletons
            .filter(value => value.manufacturer == manufacturer);
    }

    private async updateDefinition(skeleton: FixtureDefinitionSkeleton): Promise<void>
    {
        if (skeleton != null)
        {
            this.definition = await this.fixtureDefinitionsService
                .get(skeleton.id);
            this.axisOptions = this.definition.movements
                .map(value => new AxisOptions(value.name, this.fixture, this.definition));
        }
    }
}

class AxisOptions
{
    name: string;
    
    fixture: Fixture;
    definition: FixtureDefinition;

    constructor(name: string, fixture: Fixture, definition: FixtureDefinition)
    {
        this.name = name;
        this.fixture = fixture;
        this.definition = definition;
    }

    public get min(): number
    {
        return this.definition.movements.find(value => value.name == this.name).min;
    }

    public get max(): number
    {
        return this.definition.movements.find(value => value.name == this.name).max;
    }

    public get restrictionMin(): number
    {
        if(this.restricted)
        {
            let restriction = this.fixture.options.axisRestrictions.find(value => value.name == this.name);
            return restriction.min;
        }
        else
        {
            return this.min;
        }
    }

    public set restrictionMin(value: number)
    {
        if(this.restricted)
        {
            let restriction = this.fixture.options.axisRestrictions.find(value => value.name == this.name);
            restriction.min = value;
        }
    }

    public get restrictionMax(): number
    {
        if(this.restricted)
        {
            let restriction = this.fixture.options.axisRestrictions.find(value => value.name == this.name);
            return restriction.max;
        }
        else
        {
            return this.max;
        }
    }

    public set restrictionMax(value: number)
    {
        if(this.restricted)
        {
            let restriction = this.fixture.options.axisRestrictions.find(value => value.name == this.name);
            restriction.max = value;
        }
    }

    public get inverted(): boolean
    {
        let match = this.fixture.options.axisInversions.find(value => value == this.name);
        return match != null;
    }

    public set inverted(value: boolean)
    {
        if(value)
        {
            this.fixture.options.axisInversions.push(this.name);
        }
        else
        {
            let index = this.fixture.options.axisInversions.indexOf(this.name);
            if(index != -1)
            {
                this.fixture.options.axisInversions.splice(index, 1);
            }
        }
    }

    public get restricted(): boolean
    {
        let match = this.fixture.options.axisRestrictions.find(value => value.name == this.name);
        return match != null;
    }

    public set restricted(value: boolean)
    {
        if(value)
        {
            let options = new AxisRestrictionOptions();
            options.name = this.name;
            options.min = this.min;
            options.max = this.max;
            this.fixture.options.axisRestrictions.push(options);
        }
        else
        {
            let restriction = this.fixture.options.axisRestrictions.find(value => value.name == this.name);
            let index = this.fixture.options.axisRestrictions.indexOf(restriction);
            if(index != -1)
            {
                this.fixture.options.axisRestrictions.splice(index, 1);
            }
        }
    }

}