import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Group, FixtureDefinition, FixtureDefinitionSkeleton, Fixture } from "api/models";
import { FixtureDefinitionService } from "api/services";

@Component({
    selector: 'app-fixture-options-editor',
    templateUrl: './fixture-options-editor.component.html',
    styleUrls: ['./fixture-options-editor.component.css'],
    providers: [FixtureDefinitionService]
})
export class FixtureOptionsEditorComponent implements OnInit
{
    @Input("groups") groups: Group[];
    @Input("fixture") fixture: Fixture;
    public visible = false;
    private visibleAnimate = false;

    private axisOptions: AxisOptions[];

    private definition: FixtureDefinition;
    private skeletons: FixtureDefinitionSkeleton[];
    private manufacturerFilter: string;
    private manufacturers: string[];

    constructor(private fixtureDefinitionService: FixtureDefinitionService)
    {
        this.skeletons = [];
        this.manufacturers = [];
    }

    public log(thing: any): void
    {
        console.log(thing);
    }

    ngOnInit(): void
    {
        this.fixtureDefinitionService.getFixtureDefinitionSkeletons().then(response =>
        {
            this.skeletons = response.data;
            this.manufacturers = this.skeletons
                .map((value: FixtureDefinitionSkeleton) => value.manufacturer)
                .filter((value, index, array) => array.indexOf(value) == index);
        });
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        if (changes["fixture"] != null)
        {
            let fixtureChanges = changes["fixture"];
            if (fixtureChanges.currentValue != null)
            {
                let fixture: Fixture = fixtureChanges.currentValue;
                if (fixture.type == null)
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

    private getDefinitions(manufacturer: string): FixtureDefinitionSkeleton[]
    {
        return this.skeletons
            .filter(value => value.manufacturer == manufacturer);
    }

    private updateManufacturer(manufacturer: string): void
    {
        let skeleton = this.skeletons.find((value) => value.manufacturer == manufacturer);
        this.fixture.type = skeleton;
        this.updateDefinition(skeleton);
    }

    private updateDefinition(skeleton: FixtureDefinitionSkeleton): void
    {
        this.fixtureDefinitionService.getFixtureDefinitionById(skeleton.id).then(response =>
        {
            this.definition = response.data;
            this.axisOptions = this.definition.movements
                .map(value => new AxisOptions(value.name, this.fixture, this.definition));
        });
    }

    private get getComparer(): (x: FixtureDefinitionSkeleton, y: FixtureDefinitionSkeleton) => boolean
    {

        return (x, y) =>
        {
            if (x == null && y == null)
            {
                return true;
            }
            else if ((x == null && y != null) || (x != null && y == null))
            {
                return false;
            }
            else
            {
                return x.id == y.id;
            }
        };
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
