import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { APIClient } from 'api';
import { IFixtureDefinition, FixtureDefinitionSkeleton, IMovementAxisData } from "api/models";
import { AnimationLibrary } from "../animation-library";
import { MessageService } from '../message.service';

@Component({
    selector: 'app-fixture-options-editor',
    templateUrl: './fixture-options-editor.component.html',
    styleUrls: ['./fixture-options-editor.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class FixtureOptionsEditorComponent implements OnInit
{
    public axisOptions: AxisOptions[];
    public definition: IFixtureDefinition;
    public form: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<FixtureOptionsEditorComponent>,
        private apiClient: APIClient,
        @Inject(MAT_DIALOG_DATA) private data: FixtureOptionsEditorData,
        private messageService: MessageService)
    {
        this.form = new FormGroup({});
    }

    ngOnInit(): void
    {
        try
        {
            // this.apiClient
            //     .getFixtureDefinition({ manufacturer: this.data.type.manufacturer, model: this.data.type.model })
            //     .toPromise()
            //     .then(response =>
            //     {
            //         this.definition = response;
            //         this.axisOptions = this.definition.movements
            //             .map(value => new AxisOptions(value.name, this.options, this.definition));
            //     });
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    public get moving(): boolean
    {
        return this.definition.movements.length > 0;
    }
}

export interface FixtureOptionsEditorData
{
    options: FixtureOptions,
    type: FixtureDefinitionSkeleton
}

class AxisOptions
{
    public name: string;
    public min: number;
    public max: number;

    options: FixtureOptions;

    constructor(name: string, options: FixtureOptions, definition: IMovementAxisData)
    {
        this.options = options;
        this.name = definition.name;
        this.min = definition.min;
        this.max = definition.max;
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