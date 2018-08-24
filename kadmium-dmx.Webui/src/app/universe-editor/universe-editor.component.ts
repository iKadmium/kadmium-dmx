import { Component, OnInit, Input, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { FixtureDefinitionSkeleton, UniverseData, FixtureData } from "api/models";
import { MatDialog } from "@angular/material/dialog";
import { UniverseEditorPresetSaveDialogComponent } from "../universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component";

import "rxjs/operator/map";
import 'rxjs/add/operator/startWith';
import { FixtureOptionsEditorComponent } from "../fixture-options-editor/fixture-options-editor.component";
import { MatExpansionPanel } from '@angular/material';
import { UniverseEditorAddMultipleFixturesDialogComponent, IUniverseEditorAddMultipleFixturesDialogInputData, IUniverseEditorAddMultipleFixturesDialogOutputData } from '../universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { APIClient, GroupData } from 'api';
import { MessageService } from 'app/message.service';
import { FileReaderService } from '../file-reader.service';
import { FileSaverService } from '../file-saver.service';
import { FixtureEditorComponent, FixtureEditorData } from 'app/fixture-editor/fixture-editor.component';

@Component({
    selector: 'app-universe-editor',
    templateUrl: './universe-editor.component.html',
    styleUrls: ['./universe-editor.component.css'],
})
export class UniverseEditorComponent implements OnInit
{
    @Input("universe") universe: UniverseData;
    @Input("groups") groups: GroupData[];
    @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

    public fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];

    constructor(
        private apiClient: APIClient,
        private messageService: MessageService,
        private fileReader: FileReaderService,
        private fileSaver: FileSaverService,
        private dialog: MatDialog)
    {
    }

    ngOnInit(): void
    {
        try
        {
            this.apiClient.getFixtureDefinitions()
                .toPromise()
                .then(response => 
                {
                    this.fixtureDefinitionSkeletons = response;
                });
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    public removeElement(index: number): void
    {
        this.universe.fixtures.splice(index, 1);
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
        let result = await ref.afterClosed().toPromise();

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

    }

    public async edit(index: number): Promise<void>
    {
        let data: FixtureEditorData = {
            fixture: this.universe.fixtures[index],
            skeletons: this.fixtureDefinitionSkeletons,
            groups: this.groups
        }
        let ref = this.dialog.open(FixtureEditorComponent, {
            data: data
        });
        let result = await ref.afterClosed().toPromise();

        if (result != null)
        {
            this.universe.fixtures[index] = result;
        }
    }

    public async options(fixture: FixtureData): Promise<void>
    {
        let ref = this.dialog.open(FixtureOptionsEditorComponent, {
            data: { fixture: fixture }
        });
        let result = await ref.afterClosed().toPromise();

        if (result != null)
        {
            fixture.options = result;
        }
    }

    public async savePresetAs(): Promise<void>
    {
        let ref = this.dialog.open(UniverseEditorPresetSaveDialogComponent, {
            data: { filename: "", fixtures: this.universe.fixtures }
        });
        let result = await ref.afterClosed().toPromise();
        if (result != null)
        {
            let name = result.filename;
            let fixtures = result.fixtures;
            this.fileSaver.save(name + ".json", fixtures);
        }
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

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let fixtures = await this.fileReader.read<FixtureData[]>(file);
            for (let fixture of fixtures)
            {
                this.universe.fixtures.push(fixture);
            }
            this.messageService.info("Successfully added " + fixtures.length + " fixtures");
        }
        catch (reason)
        {
            this.messageService.error(reason);
        }
    }

}
