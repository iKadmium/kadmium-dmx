import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { APIClient } from 'api';
import { IFixtureDefinition, FixtureDefinitionSkeleton } from "api/models";
import { MessageService } from 'app/message.service';
import { EditorService } from '../editor.service';
import { Saveable } from '../unsaved-changes';
import { FixtureType } from 'app/enums/fixture-type.enum';

@Component({
    selector: 'app-fixture-definition-editor',
    templateUrl: './fixture-definition-editor.component.html',
    styleUrls: ['./fixture-definition-editor.component.css']
})
export class FixtureDefinitionEditorComponent implements OnInit, Saveable
{
    private manufacturer: string | null;
    private model: string | null;
    public allManufacturers: string[];

    public saving: boolean = false;
    public loading: boolean = false;

    @ViewChildren("movementPanels") movementPanels: QueryList<MatExpansionPanel>;
    @ViewChildren("colorWheelPanels") colorWheelPanels: QueryList<MatExpansionPanel>;

    constructor(
        private route: ActivatedRoute,
        private apiClient: APIClient,
        private messageService: MessageService,
        private title: Title,
        private router: Router,
        private fixtureDefinitionService: EditorService<IFixtureDefinition>
    )
    {
        this.loading = true;
    }

    ngOnInit()
    {
        this.manufacturer = this.route.snapshot.params['manufacturer'];
        this.model = this.route.snapshot.params['model'];
        this.title.setTitle("Fixture Definition Editor");
        let promises = [];
        try
        {
            if (!this.isNewItem())
            {
                promises.push(this.apiClient.getFixtureDefinition({ manufacturer: this.manufacturer, model: this.model })
                    .toPromise()
                    .then(response => 
                    {
                        this.fixtureDefinitionService.setActive(response);
                    }));
            }
            else
            {
                this.fixtureDefinitionService.setActive({
                    fixtureType: FixtureType.LED,
                    channels: [],
                    colorWheel: [],
                    movements: [],
                    skeleton: {
                        manufacturer: "",
                        model: ""
                    }
                });
            }

            promises.push(this.apiClient.getFixtureDefinitions()
                .toPromise()
                .then(response => 
                {
                    this.allManufacturers = response
                        .map((skeleton: FixtureDefinitionSkeleton) => skeleton.manufacturer)
                        .filter((value: string, index: number, array: string[]) => array.indexOf(value) == index);
                }));
        }
        catch (reason)
        {
            this.messageService.error(reason);
        }
        Promise.all(promises).then(() =>
        {
            this.loading = false;
        });
    }

    public hasColorWheelChannel(): boolean
    {
        return this.fixtureDefinitionService.getActive().channels.find(channel => channel.name == "ColorWheel") != null;
    }

    private isNewItem(): boolean
    {
        return this.manufacturer == null || this.manufacturer == "" || this.model == null || this.model == "";
    }

    public getFilteredManufacturers(beginning: string): string[]
    {
        return this.allManufacturers.filter(x => x.startsWith(beginning) && x != beginning);
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem())
            {
                await this.apiClient.postFixtureDefinition({ value: this.fixtureDefinitionService.getActive() }).toPromise();
                this.fixtureDefinitionService.isDirty = false;
                this.messageService.info("Successfully added " + this.fixtureDefinitionService.getActive().skeleton.manufacturer + " " + this.fixtureDefinitionService.getActive().skeleton.model);
            }
            else
            {
                await this.apiClient.putFixtureDefinition({
                    manufacturer: this.manufacturer,
                    model: this.model,
                    value: this.fixtureDefinitionService.getActive()
                }).toPromise();
                this.fixtureDefinitionService.isDirty = false;
                this.messageService.info("Successfully edited " + this.fixtureDefinitionService.getActive().skeleton.manufacturer + " " + this.fixtureDefinitionService.getActive().skeleton.model);
            }

            this.router.navigate(["../.."], { relativeTo: this.route });
        }
        catch (reason)
        {
            this.messageService.error(reason);
        }
        finally
        {
            this.saving = false;
        }
    }

    public hasUnsavedChanges(): boolean
    {
        return this.fixtureDefinitionService.isDirty;
    }

}
