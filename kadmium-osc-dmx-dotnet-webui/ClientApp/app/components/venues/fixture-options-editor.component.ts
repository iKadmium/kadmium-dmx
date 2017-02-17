import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { FixtureDefinitionsService } from "../fixture-definitions/fixture-definitions.service"

import { Fixture, FixtureDefinitionOptions, AxisRestrictionOptions } from "./venue";
import { FixtureDefinition } from "../fixture-definitions/fixture-definition";

@Component({
    selector: 'fixture-options-editor',
    template: require('./fixture-options-editor.component.html'),
    styles: [require("./fixture-options-editor.component.css")],
    providers: [FixtureDefinitionsService]
})
export class FixtureOptionsEditorComponent
{
    private fixture: Fixture;
    public visible = false;
    private visibleAnimate = false;

    private definition: FixtureDefinition;

    private restrictionAxis: AxisOptions[];

    private resolve: (value: FixtureDefinitionOptions) => void;
    private reject: () => void;

    constructor(private fixtureDefinitionsService: FixtureDefinitionsService)
    {

    }

    private hide(): void
    {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }

    public show(fixture: Fixture): Promise<FixtureDefinitionOptions>
    {
        let promise = new Promise<FixtureDefinitionOptions>((resolve, reject) => 
        {
            this.resolve = resolve;
            this.reject = reject;
        });

        this.visible = true;
        setTimeout(() => this.visibleAnimate = true);
        this.fixture = fixture;

        this.fixtureDefinitionsService
            .get(this.fixture.type.manufacturer, this.fixture.type.model)
            .then((value) =>
            {
                this.definition = value
                this.restrictionAxis = this.definition.movements
                    .map(value =>
                    {
                        let axisOptions = new AxisOptions();
                        axisOptions.name = value.name;
                        let restrictionMatch = this.fixture.options.axisRestrictions.find(item => item.name == axisOptions.name);
                        axisOptions.restricted = restrictionMatch != null;
                        if (axisOptions.restricted)
                        {
                            axisOptions.restrictionMin = restrictionMatch.min;
                            axisOptions.restrictionMax = restrictionMatch.max;
                        }
                        else
                        {
                            axisOptions.restrictionMin = this.getAxisMin(axisOptions.name);
                            axisOptions.restrictionMax = this.getAxisMax(axisOptions.name);
                        }
                        let inversionMatch = this.fixture.options.axisInversions.find(item => item == axisOptions.name);
                        axisOptions.inverted = inversionMatch != null;
                        return axisOptions;
                    });
            });
        return promise;
    }

    public get moving(): boolean
    {
        return this.definition.movements.length > 0;
    }

    public getAxisMin(name: string): number
    {
        return this.definition.movements.find(value => value.name == name).min;
    }

    public getAxisMax(name: string): number
    {
        return this.definition.movements.find(value => value.name == name).max;
    }

    private acceptClick(): void
    {
        let options = new FixtureDefinitionOptions();
        options.axisInversions = this.restrictionAxis
            .filter(value => value.inverted)
            .map(value => value.name);
        options.axisRestrictions = this.restrictionAxis
            .filter(value => value.restricted)
            .map(value =>
            {
                let opts = new AxisRestrictionOptions();
                opts.name = value.name;
                opts.min = value.restrictionMin;
                opts.max = value.restrictionMax;
                return opts;
            });
        this.resolve(options);
        this.hide();
    }

    private cancelClick(): void
    {
        this.reject();
        this.hide();
    }
}

class AxisOptions
{
    name: string;
    restrictionMin: number;
    restrictionMax: number;
    restricted: boolean;
    inverted: boolean;
}