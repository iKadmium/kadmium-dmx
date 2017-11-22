import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { FixtureDefinitionService } from "api/services";
import { FixtureDefinition, FixtureDefinitionSkeleton, DMXChannel, MovementAxis, ColorWheelEntry } from "api/models";
import { MatTableDataSource } from "@angular/material/table";

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
                this.definition.channels = [];
                this.definition.colorWheel = [];
                this.definition.movements = [];
            }
            else
            {
                this.definition = (await this.fixtureDefinitionService.getFixtureDefinitionById(this.id)).data;
                this.title.setTitle(`Fixture Definition Editor - ${this.definition.manufacturer} ${this.definition.model}`);
            }
            this.allManufacturers = (await this.fixtureDefinitionService.getFixtureDefinitionSkeletons()).data
                .map((skeleton: FixtureDefinitionSkeleton) => skeleton.manufacturer)
                .filter((value: string, index: number, array: string[]) => array.indexOf(value) == index);
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

    public addColorWheelEntry(): void
    {
        let minValue = -1;
        this.definition.colorWheel.forEach((value: ColorWheelEntry) => 
        {
            if (value.max > minValue) 
            {
                minValue = value.max;
            }
        });
        minValue = minValue < 255 ? minValue + 1 : 255;
        let entry = new ColorWheelEntry();
        entry.min = minValue;
        entry.max = 255;
        this.definition.colorWheel.push(entry);
    }

    public removeColorWheelEntry(colorWheelEntry: ColorWheelEntry): void
    {
        let index = this.definition.colorWheel.indexOf(colorWheelEntry);
        this.definition.colorWheel.splice(index, 1);
    }

    public getOtherColorWheelNames(thisEntry: ColorWheelEntry): string[]
    {
        return this.definition.colorWheel
            .filter(value => value != thisEntry)
            .map((value: ColorWheelEntry) => value.name);
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
                    return parseInt(a.min) - parseInt(b.min);
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
                await this.fixtureDefinitionService.postFixtureDefinitionById(this.definition);
                this.notificationsService.add(StatusCode.Success, "Successfully added " + this.definition.manufacturer + " " + this.definition.model);
            }
            else
            {
                await this.fixtureDefinitionService.putFixtureDefinitionById({ id: this.definition.id, definition: this.definition });
                this.notificationsService.add(StatusCode.Success, "Successfully edited " + this.definition.manufacturer + " " + this.definition.model);
            }
            this.router.navigate(["../"], { relativeTo: this.route });
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
