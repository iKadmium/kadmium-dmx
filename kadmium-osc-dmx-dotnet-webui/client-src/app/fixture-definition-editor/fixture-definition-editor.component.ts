import { Component, OnInit } from '@angular/core';
import { FixtureDefinitionService } from "../fixture-definition.service";
import { FixtureDefinition, FixtureDefinitionSkeleton, DMXChannel, Axis, ColorWheelEntry } from "../fixture-definition";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";

@Component({
    selector: 'app-fixture-definition-editor',
    templateUrl: './fixture-definition-editor.component.html',
    styleUrls: ['./fixture-definition-editor.component.css'],
    providers: [FixtureDefinitionService]
})
export class FixtureDefinitionEditorComponent implements OnInit
{
    private id: number | null;
    public allManufacturers: string[];
    public definition: FixtureDefinition;
    private saving: boolean;

    constructor(private route: ActivatedRoute, private fixtureDefinitionService: FixtureDefinitionService,
        private notificationsService: NotificationsService, private title: Title, private router: Router)
    {
        this.saving = false;
    }

    async ngOnInit(): Promise<void>
    {
        this.id = this.route.snapshot.params['id'];

        try
        {
            if (this.isNewItem())
            {
                this.title.setTitle("Fixture Definition Editor - New Definition");
                this.definition = new FixtureDefinition();
            }
            else
            {
                this.definition = await this.fixtureDefinitionService.get(this.id);
                this.title.setTitle(`Fixture Definition Editor - ${this.definition.manufacturer} ${this.definition.model}`);
            }
            this.allManufacturers = (await this.fixtureDefinitionService.getSkeletons())
                .map((skeleton: FixtureDefinitionSkeleton) => skeleton.manufacturer)
                .filter((value: string, index: number, array: string[]) => array.indexOf(value) == index);
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

    public addChannel(): void
    {
        let maxChannel = 0;
        this.definition.channels.forEach((value: DMXChannel) => 
        {
            if (value.address > maxChannel) 
            {
                maxChannel = value.address;
            }
        });

        this.definition.channels.push(new DMXChannel("", maxChannel + 1));
    }

    public removeChannel(channel: DMXChannel): void
    {
        let index = this.definition.channels.indexOf(channel);
        this.definition.channels.splice(index, 1);
    }

    public addAxis(): void
    {
        this.definition.movements.push(new Axis());
    }

    public removeAxis(axis: Axis): void
    {
        let index = this.definition.movements.indexOf(axis);
        this.definition.movements.splice(index, 1);
    }

    public addColorWheelEntry(): void
    {
        let minValue = 0;
        this.definition.colorWheel.forEach((value: ColorWheelEntry) => 
        {
            if (value.max > minValue) 
            {
                minValue = value.max;
            }
        });
        minValue = minValue < 255 ? minValue + 1 : 255;
        this.definition.colorWheel.push(new ColorWheelEntry("", minValue));
    }

    public removeColorWheelEntry(colorWheelEntry: ColorWheelEntry): void
    {
        let index = this.definition.colorWheel.indexOf(colorWheelEntry);
        this.definition.colorWheel.splice(index, 1);
    }

    public getOtherChannelNames(thisEntry: DMXChannel): string[]
    {
        return this.definition.channels
            .filter(value => value != thisEntry)
            .map((value: DMXChannel) => value.name);
    }

    public getOtherColorWheelNames(thisEntry: ColorWheelEntry): string[]
    {
        return this.definition.colorWheel
            .filter(value => value != thisEntry)
            .map((value: ColorWheelEntry) => value.name);
    }

    public getOtherAxisNames(thisEntry: Axis): string[]
    {
        return this.definition.movements
            .filter(value => value != thisEntry)
            .map((value: Axis) => value.name);
    }

    public hasColorWheelChannel(): boolean
    {
        return this.definition.channels.find(channel => channel.name == "ColorWheel") != null;
    }

    private isNewItem(): boolean
    {
        return this.id == null;
    }

    private sortChannels(channels: DMXChannel[]): DMXChannel[]
    {
        return channels
            .sort((a, b) => 
            {
                if (a.address != b.address)
                {
                    return a.address - b.address;
                }
                else
                {
                    return a.min - b.min;
                }
            });
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem())
            {
                await this.fixtureDefinitionService.post(this.definition);
                this.notificationsService.add(StatusCode.Success, "Successfully added " + this.definition.manufacturer + " " + this.definition.model);
            }
            else
            {
                await this.fixtureDefinitionService.put(this.definition);
                this.notificationsService.add(StatusCode.Success, "Successfully edited " + this.definition.manufacturer + " " + this.definition.model);
            }
            this.router.navigate(["../", { relativeTo: this.route }]);
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
        finally
        {
            this.saving = false;
        }
    }

}
