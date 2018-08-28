import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from '@angular/router';
import { APIClient, IGroupData } from 'api';
import { FixtureData, FixtureDefinitionSkeleton, UniverseData, IVenueData } from "api/models";
import { FixtureEditorComponent, FixtureEditorData } from 'app/fixture-editor/fixture-editor.component';
import { MessageService } from 'app/message.service';
import 'rxjs/add/operator/startWith';
import "rxjs/operator/map";
import { AnimationLibrary } from '../animation-library';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { EditorService } from '../editor.service';
import { FileReaderService } from '../file-reader.service';
import { FileSaverService } from '../file-saver.service';
import { FixtureOptionsEditorComponent } from "../fixture-options-editor/fixture-options-editor.component";
import { IUniverseEditorAddMultipleFixturesDialogInputData, IUniverseEditorAddMultipleFixturesDialogOutputData, UniverseEditorAddMultipleFixturesDialogComponent } from '../universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { UniverseEditorPresetSaveDialogComponent } from "../universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component";


@Component({
    selector: 'app-universe-editor',
    templateUrl: './universe-editor.component.html',
    styleUrls: ['./universe-editor.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class UniverseEditorComponent implements OnInit
{
    @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

    public groups: IGroupData[];
    public fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];
    public universe: UniverseData;

    constructor(
        private apiClient: APIClient,
        private messageService: MessageService,
        private fileReader: FileReaderService,
        private fileSaver: FileSaverService,
        private editorService: EditorService<IVenueData>,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog)
    {
    }

    ngOnInit(): void
    {
        let universeIDstring = this.activatedRoute.snapshot.params["universeID"] as string;
        let universeID = parseInt(universeIDstring);
        try
        {
            this.apiClient.getGroups()
                .toPromise()
                .then(response => 
                {
                    this.groups = response;
                });

            this.apiClient.getFixtureDefinitions()
                .toPromise()
                .then(response => 
                {
                    this.fixtureDefinitionSkeletons = response;
                });

            this.universe = this.editorService.getActive().universes.find(x => x.universeID == universeID);
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    public async removeElement(index: number): Promise<void>
    {
        let fixture = this.universe.fixtures[index];
        let result = await this.dialog
            .open(DeleteConfirmDialogComponent, { data: fixture.type.manufacturer + " " + fixture.type.model })
            .afterClosed()
            .toPromise();
        if (result)
        {
            this.universe.fixtures.splice(index, 1);
            this.editorService.isDirty = true;
        }

    }

    public async addElements(): Promise<void>
    {
        let inputData: IUniverseEditorAddMultipleFixturesDialogInputData = {
            groups: this.groups,
            skeletons: this.fixtureDefinitionSkeletons
        };
        let result = await this.dialog
            .open(UniverseEditorAddMultipleFixturesDialogComponent, { data: inputData })
            .afterClosed()
            .toPromise();

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
                        axisOptions: {}
                    }
                };
                this.universe.fixtures.push(fixture);
                runningAddress += channelCount;
            }
            this.editorService.isDirty = true;
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
