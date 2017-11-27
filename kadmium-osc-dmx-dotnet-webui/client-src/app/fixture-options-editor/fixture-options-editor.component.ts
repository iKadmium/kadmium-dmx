import { Component, OnInit, Input, SimpleChanges, Inject } from '@angular/core';
import { FixtureDefinition, FixtureDefinitionSkeleton, Fixture } from "api/models";
import { FixtureDefinitionService } from "api/services";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-fixture-options-editor',
    templateUrl: './fixture-options-editor.component.html',
    styleUrls: ['./fixture-options-editor.component.css'],
    providers: [FixtureDefinitionService],
    animations: [AnimationLibrary.animations()]
})
export class FixtureOptionsEditorComponent implements OnInit
{
    public visible = false;
    private visibleAnimate = false;

    private axisOptions: AxisOptions[];

    public definition: FixtureDefinition;
    public fixture: Fixture;

    constructor(public dialogRef: MatDialogRef<FixtureOptionsEditorComponent>, private fixtureDefinitionService: FixtureDefinitionService,
        @Inject(MAT_DIALOG_DATA) public data: any)
    {
        this.fixture = data.fixture;
    }

    ngOnInit(): void
    {
        this.fixtureDefinitionService.getFixtureDefinitionById(this.fixture.type.id).then(response =>
        {
            this.definition = response.data;
            this.axisOptions = this.definition.movements
                .map(value => new AxisOptions(value.name, this.fixture, this.definition));
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
        if (this.restricted)
        {
            let restriction = (this.fixture.options as any).axisRestrictions.find(value => value.name == this.name);
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
            let restriction = (this.fixture.options as any).axisRestrictions.find(value => value.name == this.name);
            restriction.min = value;
        }
    }

    public get restrictionMax(): number
    {
        if (this.restricted)
        {
            let restriction = (this.fixture.options as any).axisRestrictions.find(value => value.name == this.name);
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
            let restriction = (this.fixture.options as any).axisRestrictions.find(value => value.name == this.name);
            restriction.max = value;
        }
    }

    public get inverted(): boolean
    {
        let match = (this.fixture.options as any).axisInversions.find(value => value == this.name);
        return match != null;
    }

    public set inverted(value: boolean)
    {
        if (value)
        {
            (this.fixture.options as any).axisInversions.push(this.name);
        }
        else
        {
            let index = (this.fixture.options as any).axisInversions.indexOf(this.name);
            if (index != -1)
            {
                (this.fixture.options as any).axisInversions.splice(index, 1);
            }
        }
    }

    public get restricted(): boolean
    {
        let match = (this.fixture.options as any).axisRestrictions.find(value => value.name == this.name);
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
            (this.fixture.options as any).axisRestrictions.push(options);
        }
        else
        {
            let restriction = (this.fixture.options as any).axisRestrictions.find(value => value.name == this.name);
            let index = (this.fixture.options as any).axisRestrictions.indexOf(restriction);
            if (index != -1)
            {
                (this.fixture.options as any).axisRestrictions.splice(index, 1);
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
