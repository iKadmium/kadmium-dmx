import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { AsyncFileReader } from "../async-file-reader";
import { FileSaver } from "../file-saver";
import { FixtureDefinitionSkeleton, UniverseData, FixtureData } from "api/models";
import { MatDialog } from "@angular/material/dialog";
import { UniverseEditorPresetSaveDialogComponent } from "../universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component";

import "rxjs/operator/map";
import 'rxjs/add/operator/startWith';
import { FixtureOptionsEditorComponent } from "../fixture-options-editor/fixture-options-editor.component";
import { MatExpansionPanel, MatSnackBar } from '@angular/material';
import { Sleep } from '../sleep';
import { UniverseEditorAddMultipleFixturesDialogComponent, IUniverseEditorAddMultipleFixturesDialogInputData, IUniverseEditorAddMultipleFixturesDialogOutputData } from '../universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { APIClient, GroupData } from 'api';

@Component({
    selector: 'app-universe-editor',
    templateUrl: './universe-editor.component.html',
    styleUrls: ['./universe-editor.component.css'],
    providers: [APIClient]
})
export class UniverseEditorComponent implements OnInit
{
    @Input("universe") universe: UniverseData;
    @Input("groups") groups: GroupData[];
    @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

    public fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];

    constructor(private apiClient: APIClient, private snackbar: MatSnackBar, private dialog: MatDialog)
    {

    }

    ngOnInit(): void
    {
        this.apiClient.getFixtureDefinitions()
            .toPromise()
            .then(response => 
            {
                this.fixtureDefinitionSkeletons = response;
            }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
    }


    public getElementIndex(element: FixtureData): number
    {
        return this.universe.fixtures.indexOf(element);
    }

    public removeElement(element: FixtureData): void
    {
        let index = this.universe.fixtures.indexOf(element);
        this.universe.fixtures.splice(index, 1);
    }

    public async addElement(): Promise<void>
    {
        let fixture: FixtureData = {
            group: this.groups[0].name,
            address: 1,
            type: this.fixtureDefinitionSkeletons[0],
            options: {
                maxBrightness: 1,
                axisInversions: [],
                axisRestrictions: []
            }
        };
        this.universe.fixtures.push(fixture);
        await Sleep.sleepUntil(() => this.panels.length == this.universe.fixtures.length);
        this.panels.last.open();
    }

    public async addElements(): Promise<void>
    {
        let inputData: IUniverseEditorAddMultipleFixturesDialogInputData = {
            groups: this.groups,
            skeletons: this.fixtureDefinitionSkeletons
        };
        let ref = this.dialog.open(UniverseEditorAddMultipleFixturesDialogComponent, {
            data: inputData
        });
        ref.afterClosed().subscribe(async result =>
        {
            if (result != null)
            {
                let data = result as IUniverseEditorAddMultipleFixturesDialogOutputData;
                let definition = await (this.apiClient.getFixtureDefinition({ manufacturer: data.skeleton.manufacturer, model: data.skeleton.model })).toPromise();
                let runningAddress = data.address;
                let addresses = definition.channels
                    .map(x => x.address)
                    .sort();
                let channelCount = addresses[addresses.length - 1] - addresses[0] + 1;
                for (let i = 0; i < data.quantity; i++)
                {
                    let fixture: FixtureData = {
                        group: data.group.name,
                        address: runningAddress,
                        type: data.skeleton,
                        options: {
                            maxBrightness: 1,
                            axisInversions: [],
                            axisRestrictions: []
                        }
                    };
                    this.universe.fixtures.push(fixture);
                    runningAddress += channelCount;
                }
            }
        })
    }


    public options(fixture: FixtureData): void
    {
        let ref = this.dialog.open(FixtureOptionsEditorComponent, {
            data: { fixture: fixture }
        });
        ref.afterClosed().subscribe(result =>
        {
            if (result != null)
            {
                fixture.options = result;
            }
        })
    }

    public async savePresetAs(): Promise<void>
    {
        let ref = this.dialog.open(UniverseEditorPresetSaveDialogComponent, {
            data: { filename: "", fixtures: this.universe.fixtures }
        });
        ref.afterClosed().subscribe(result =>
        {
            if (result != null)
            {
                let name = result.filename;
                let fixtures = result.fixtures;
                FileSaver.Save(name + ".json", fixtures);
            }
        })
    }

    public upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    public async uploadFiles(files: File[]): Promise<void>
    {
        for (let file of files)
        {
            await this.uploadFile(file);
        }
    }

    public skeletonCompareFn(x: FixtureDefinitionSkeleton, y: FixtureDefinitionSkeleton): boolean
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
            return x.model == y.model && x.manufacturer == y.manufacturer;
        }
    }

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let fixtures = await AsyncFileReader.read<FixtureData[]>(file);
            for (let fixture of fixtures)
            {
                fixture.type = this.fixtureDefinitionSkeletons.find(x => x.manufacturer == fixture.type.manufacturer && x.model == fixture.type.model);
                this.universe.fixtures.push(fixture);
            }
            this.snackbar.open("Successfully added " + fixtures.length + " fixtures", "Close", { duration: 3000 });
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
        }
    }

}
