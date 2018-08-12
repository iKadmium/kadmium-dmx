import { Component, OnInit, Input, SimpleChanges, Inject } from '@angular/core';
import { FixtureDefinition, FixtureDefinitionSkeleton, FixtureData } from "api/models";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';

@Component({
    selector: 'app-fixture-options-editor',
    templateUrl: './fixture-options-editor.component.html',
    styleUrls: ['./fixture-options-editor.component.css'],
    providers: [APIClient],
    animations: [AnimationLibrary.animations()]
})
export class FixtureOptionsEditorComponent implements OnInit
{
    public visible = false;
    private visibleAnimate = false;

    private axisOptions: AxisOptions[];

    public definition: FixtureDefinition;
    public fixture: FixtureData;
    public options: FixtureOptions;

    constructor(public dialogRef: MatDialogRef<FixtureOptionsEditorComponent>, private apiClient: APIClient,
        @Inject(MAT_DIALOG_DATA) public data: { fixture: FixtureData })
    {
        this.fixture = data.fixture;
        this.options = {
            maxBrightness: this.fixture.options.maxBrightness,
            axisRestrictions: [],
            axisInversions: []
        };
        for (let option of this.fixture.options.axisInversions)
        {
            this.options.axisInversions.push(option);
        }
        for (let option of this.fixture.options.axisRestrictions)
        {
            this.options.axisRestrictions.push({
                min: option.min,
                max: option.max,
                name: option.name
            });
        }
    }

    ngOnInit(): void
    {
        this.apiClient.getFixtureDefinition({ manufacturer: this.fixture.type.manufacturer, model: this.fixture.type.model })
            .toPromise()
            .then(response =>
            {
                this.definition = response;
                this.axisOptions = this.definition.movements
                    .map(value => new AxisOptions(value.name, this.options, this.definition));
            });
    }

    public get moving(): boolean
    {
        return this.definition.movements.length > 0;
    }
}

class AxisOptions
{
    name: string;

    options: FixtureOptions;
    definition: FixtureDefinition;

    constructor(name: string, options: FixtureOptions, definition: FixtureDefinition)
    {
        this.name = name;
        this.options = options;
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
        if (this.restricted)
        {
            let restriction = (this.options as any).axisRestrictions.find(value => value.name == this.name);
            return restriction.min;
        }
        else
        {
            return this.min;
        }
    }

    public set restrictionMin(value: number)
    {
        if (this.restricted)
        {
            let restriction = this.options.axisRestrictions.find(value => value.name == this.name);
            restriction.min = value;
        }
    }

    public get restrictionMax(): number
    {
        if (this.restricted)
        {
            let restriction = this.options.axisRestrictions.find(value => value.name == this.name);
            return restriction.max;
        }
        else
        {
            return this.max;
        }
    }

    public set restrictionMax(value: number)
    {
        if (this.restricted)
        {
            let restriction = this.options.axisRestrictions.find(value => value.name == this.name);
            restriction.max = value;
        }
    }

    public get inverted(): boolean
    {
        let match = this.options.axisInversions.find(value => value == this.name);
        return match != null;
    }

    public set inverted(value: boolean)
    {
        if (value)
        {
            this.options.axisInversions.push(this.name);
        }
        else
        {
            let index = this.options.axisInversions.indexOf(this.name);
            if (index != -1)
            {
                this.options.axisInversions.splice(index, 1);
            }
        }
    }

    public get restricted(): boolean
    {
        let match = this.options.axisRestrictions.find(value => value.name == this.name);
        return match != null;
    }

    public set restricted(value: boolean)
    {
        if (value)
        {
            let options = new AxisRestrictionOptions();
            options.name = this.name;
            options.min = this.min;
            options.max = this.max;
            this.options.axisRestrictions.push(options);
        }
        else
        {
            let restriction = this.options.axisRestrictions.find(value => value.name == this.name);
            let index = this.options.axisRestrictions.indexOf(restriction);
            if (index != -1)
            {
                this.options.axisRestrictions.splice(index, 1);
            }
        }
    }

}

export class AxisRestrictionOptions
{
    name: string;
    min: number;
    max: number;
}

export interface FixtureOptions
{
    maxBrightness?: number,
    axisRestrictions?: AxisRestrictionOptions[],
    axisInversions?: string[]
}