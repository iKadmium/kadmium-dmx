import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { APIClient } from 'api';
import { IFixtureDefinition, FixtureDefinitionSkeleton, IMovementAxisData, MovementAxisOptions, FixtureOptions } from "api/models";
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
    public definition: IFixtureDefinition;
    public form: FormGroup;
    public loading: boolean = true;

    constructor(
        public dialogRef: MatDialogRef<FixtureOptionsEditorComponent>,
        private apiClient: APIClient,
        @Inject(MAT_DIALOG_DATA) private data: FixtureOptionsEditorData,
        private formBuilder: FormBuilder,
        private messageService: MessageService)
    {
        this.form = new FormGroup({});

        if (data.options.maxBrightness != null)
        {
            this.form.addControl(
                "maxBrightness",
                this.formBuilder.control(
                    data.options.maxBrightness,
                    [Validators.required, Validators.min(0), Validators.max(1)]
                ));
        }

        if (Object.keys(data.options.axisOptions).length > 0)
        {
            let axisOptions = new FormGroup({});

            for (let axisName in data.options.axisOptions)
            {
                let axis = data.options.axisOptions[axisName];

                let optionsGroup = this.formBuilder.group({
                    inverted: [axis.inverted],
                    restrictions: this.formBuilder.group({
                        min: [axis.restrictions.min, Validators.required],
                        max: [axis.restrictions.max, Validators.required]
                    })
                });
                axisOptions.addControl(axisName, optionsGroup);
            }
            this.form.addControl("axisOptions", axisOptions);
        }
    }

    ngOnInit(): void
    {
        try
        {
            this.apiClient
                .getFixtureDefinition({ manufacturer: this.data.type.manufacturer, model: this.data.type.model })
                .toPromise()
                .then(response =>
                {
                    this.definition = response;

                    let axisOptions = this.form.get("axisOptions") as FormGroup;
                    if (axisOptions == null)
                    {
                        axisOptions = new FormGroup({});
                        this.form.addControl("axisOptions", axisOptions);
                    }

                    for (let axis of response.movements)
                    {
                        let axisGroup = axisOptions.get(axis.name) as FormGroup;
                        if (axisGroup == null)
                        {
                            axisGroup = this.formBuilder.group({
                                inverted: [false],
                                restrictions: this.formBuilder.group({
                                    min: [axis.min, Validators.required],
                                    max: [axis.max, Validators.required]
                                })
                            });
                            axisOptions.addControl(axis.name, axisGroup);
                        }
                    }

                    this.loading = false;
                });
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

    public ok(): void
    {
        this.dialogRef.close(this.form.value);
    }

    public cancel(): void
    {
        this.dialogRef.close();
    }
}

export interface FixtureOptionsEditorData
{
    options: FixtureOptions,
    type: FixtureDefinitionSkeleton
}

export class AxisRestrictionOptions
{
    name: string;
    min: number;
    max: number;
}